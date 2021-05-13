import { FC } from "react";
import styled from "styled-components";
import { styleColors } from "../../styleHelpers/styleColors";
import {
  WrapperCenteredY,
} from "../../styleHelpers/styleComponents";
import { styleFontSizes } from "../../styleHelpers/styleFontSizes";
import { styleFunctions } from "../../styleHelpers/styleFunctions";
import { Track } from "../../types/Track";

const InnerWrapper = styled(WrapperCenteredY)`
  width: 100%;
  flex-direction: row;
  height: 64px;
  font-size: ${styleFontSizes[16]};
  padding: 6px;
  cursor: pointer;
`;
const TrackImage = styled.img`
  height: 64px;
  width: 64px;
`;
const TrackInfo = styled.div`
  position: relative;
  left: 20px;
`;
const TrackInfoTitle = styled.div`
  height: 24px;
  ${styleFunctions.flexCenterY()};
`;
const TrackInfoAuthor = styled.div`
  height: 24px;
  ${styleFunctions.flexCenterY()};
  color: ${styleColors.gray};
`;

export interface TrackSingleResultProps {
  track: Track;
  chooseTrack(track: Track):void;
}

export const TrackSingleResult: FC<TrackSingleResultProps> = ({ track, chooseTrack }) => {
  const handlePlay = () => {
      chooseTrack(track);
  }
  
    return (
    <InnerWrapper onClick = {handlePlay}>
      <TrackImage src={track.albumUrl} />
      <TrackInfo>
        <TrackInfoTitle>{track.title}</TrackInfoTitle>
        <TrackInfoAuthor>{track.artist}</TrackInfoAuthor>
      </TrackInfo>
    </InnerWrapper>
  );
};
