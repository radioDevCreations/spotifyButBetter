import { FC } from "react";
import styled from "styled-components";

import { Login } from "../Login/Login";
import { Dashboard } from "../Dashboard/Dashboard";

import "./App.scss";
import { WrapperCenteredX } from "../../styleHelpers/styleComponents";

const code = new URLSearchParams(window.location.search).get("code");

const InnerWrapper = styled(WrapperCenteredX)`
  font-family: 'Ubuntu', sans-serif;
  background-color: #fff;
`;

export const App: FC = () => {
  return (
    <InnerWrapper>
      {code ? <Dashboard code = {code}/> : <Login />}
    </InnerWrapper>
  );
};
