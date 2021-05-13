import { FC, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setPlay } from "../../redux/actions/appActions";

export interface PlayerProps {
    accessToken: string;
    trackUri: string;
}
 

export const Player: FC<PlayerProps> = ({accessToken, trackUri}) => {
    const localState = useAppSelector((state) => {
        const play = state.app.play;
        return { play };
      });
      const dispatch = useAppDispatch();
      useEffect(() => {dispatch(setPlay(true))}, [trackUri, dispatch])

    if(!accessToken || accessToken === "") return null;
    return ( <SpotifyPlayer
    token={accessToken}
    showSaveIcon
    callback = {state => {
        if(!state.isPlaying) dispatch(setPlay(false));
    }}
    play = {localState.play}
    uris = {trackUri ? [trackUri] : []}
    /> );
}