import { FC } from "react";



import styled from "styled-components";
import { styleColors } from "../../styleHelpers/styleColors";
import { WrapperCenteredXY } from "../../styleHelpers/styleComponents";
import { styleFontSizes } from "../../styleHelpers/styleFontSizes";
import { styleFunctions } from "../../styleHelpers/styleFunctions";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=162e25f49215469b830106735c325599&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const InnerWrapper = styled(WrapperCenteredXY)`
  min-height: 100vh;
`;
const LoginButton = styled.a`
${styleFunctions.flexCenter()};
background-color: ${styleColors.spotifyGreen};
min-height: 60px;
min-width: 240px;
border-radius: 5px;
color: ${styleColors.spotifyWhite};
text-decoration: none;
font-size: ${styleFontSizes[20]};
`;

export const Login: FC = () => {
  return (
    <InnerWrapper>
        <LoginButton href={AUTH_URL}>Login with Spotify</LoginButton>
    </InnerWrapper>
  );
};
