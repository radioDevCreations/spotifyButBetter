import { ChangeEvent, FC } from "react";
import useAuth from "../../hooks/useAuth";

import styled from "styled-components";
import { WrapperCenteredXY } from "../../styleHelpers/styleComponents";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setSearchInputValue } from "../../redux/actions/appActions";
import { styleFontSizes } from "../../styleHelpers/styleFontSizes";
import { styleFunctions } from "../../styleHelpers/styleFunctions";

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
padding: 20px;
overflow: auto;
flex-grow: 1;
`;
const Bottom = styled.section`
width: 100%;
`;


export interface DashboardProps {
  code: string;
}

export const Dashboard: FC<DashboardProps> = ({ code }) => {
  const accessToken = useAuth(code);
  const localState = useAppSelector((state) => {
    const searchInputState = state.app.searchInputValue;
    return { searchInputState };
  });
  const dispatch = useAppDispatch();
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInputValue(event.target.value));
  }

  return (
    <InnerWrapper>
        <SearchInput
          type="search"
          placeholder="Search songs and artists..."
          value={localState.searchInputState}
          onChange={handleSearchInputChange}
        />
        <SearchingResults>
          Songs
        </SearchingResults>
        <Bottom>
          Bottom
        </Bottom>
    </InnerWrapper>
  );
};
