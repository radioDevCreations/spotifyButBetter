import { ChangeEvent, FC, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

import styled from "styled-components";
import { WrapperCenteredXY } from "../../styleHelpers/styleComponents";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  setPlayingTrack,
  setSearchInputValue,
  setSearchResults,
  setPlayingTrackLyrics
} from "../../redux/actions/appActions";
import { styleFontSizes } from "../../styleHelpers/styleFontSizes";
import { styleFunctions } from "../../styleHelpers/styleFunctions";

import SpotifyWebApi from "spotify-web-api-node";

import { TrackSingleResult } from "../TrackSingleResult/TrackSingleResult";
import { Player } from "../Player/Player";
import { Track } from "../../types/Track";
import axios from "axios";
import { styleColors } from "../../styleHelpers/styleColors";

const InnerWrapper = styled(WrapperCenteredXY)`
  max-width: 1000px;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  height: calc(100vh - 62px);
  font-size: ${styleFontSizes[18]};
`;
const SearchInput = styled.input`
  border-radius: 3px;
  ${styleFunctions.inputBorder()};
  width: 100%;
  padding: 12px 20px;
  font-size: ${styleFontSizes[20]};
`;
const SearchingResults = styled.section`
  width: 100%;
  padding: 6px 20px;
  overflow: auto;
  flex-grow: 1;
  &::-webkit-scrollbar{
    width: 13px;
  }
  &::-webkit-scrollbar-track{
    background-color: ${styleColors.spotifyWhite};
  }
  &::-webkit-scrollbar-thumb{
    background-color: ${styleColors.interfacegray};
    border-radius: 100px;
  }
`;
const Bottom = styled.section`
  width: 100%;
  ${styleFunctions.flexCenterY()};
`;

const TrackText = styled.div`
  text-align: center;
  white-space: pre;
  padding: 24px 0;
  line-height: 1.5;
`;

const spotifyApi = new SpotifyWebApi({
  clientId: "162e25f49215469b830106735c325599",
});

export interface DashboardProps {
  code: string;
}

export const Dashboard: FC<DashboardProps> = ({ code }) => {
  const accessToken = useAuth(code);
  const localState = useAppSelector((state) => {
    const searchInputState = state.app.searchInputValue;
    const searchResults = state.app.searchResults;
    const playingTrack = state.app.playingTrack;
    const lyrics = state.app.playingTrackLyrics;
    return { searchInputState, searchResults, playingTrack, lyrics };
  });
  const dispatch = useAppDispatch();

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInputValue(event.target.value));
  };

  const chooseTrack = (track: Track) => {
    dispatch(setPlayingTrack(track));
    dispatch(setSearchInputValue(""));
    dispatch(setPlayingTrackLyrics(""));
  };

  useEffect(() => {
    if (!localState.playingTrack) return;
    
    axios.get('http://localhost:3001/lyrics', {
      params: {
        track: localState.playingTrack.title,
        artist: localState.playingTrack.artist
      }
    })
    .then(res => {
      dispatch(setPlayingTrackLyrics(res.data.lyrics))
    })
  }, [dispatch, localState.playingTrack]);

  useEffect(() => {
    if (!accessToken || accessToken === "") return; //maybe change to only 1st condition
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect((): any | undefined => {
    if (!localState.searchInputState || localState.searchInputState === "") {
      return dispatch(setSearchResults([]));
    }
    if (!accessToken || accessToken === "") return undefined;
    let cancel = false;
    spotifyApi.searchTracks(localState.searchInputState).then((res) => {
      if (!!cancel) return;
      dispatch(
        setSearchResults(
          res.body.tracks?.items.map((track) => {
            const smallestAlbumImage = track.album.images.reduce(
              (smallest, image) => {
                if ((image.height as number) < (smallest.height as number))
                  return image;
                return smallest;
              }
            );
            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: smallestAlbumImage.url,
            } as Track;
          })
        )
      );
    });
    return () => (cancel = true);
  }, [localState.searchInputState, accessToken, dispatch]);

  return (
    <InnerWrapper>
      <SearchInput
        type="search"
        placeholder="Search songs and artists..."
        value={localState.searchInputState}
        onChange={handleSearchInputChange}
      />
      <SearchingResults>
        {localState.searchResults.map((track: Track) => (
          <TrackSingleResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {localState.searchResults.length === 0 && (
          <TrackText>{localState.lyrics}</TrackText>
        )}
      </SearchingResults>
      <Bottom>
        <Player
          accessToken={accessToken}
          trackUri={localState.playingTrack?.uri}
        />
      </Bottom>
    </InnerWrapper>
  );
};
