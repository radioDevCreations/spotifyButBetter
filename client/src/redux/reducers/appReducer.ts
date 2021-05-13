import { AnyAction } from "redux";
import {
  SET_PLAYING_TRACK,
  SET_SEARCH_INPUT_VALUE,
  SET_SEARCH_RESULTS,
  SET_PLAY,
  SET_PLAYING_TRACK_LYRICS
} from "../actions/appActions";
//npm install --save react-redux @types/react-redux

export interface AppState {
  searchInputValue: string | undefined;
  searchResults: any[] | undefined;
  playingTrack: string | undefined;
  play: boolean;
  playingTrackLyrics: string;
}

const initialState = {
  searchInputValue: "",
  searchResults: [],
  playingTrack: undefined,
  play: false,
  playingTrackLyrics: "",
};

export const appReducer = (
  state: AppState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_SEARCH_INPUT_VALUE:
      return { ...state, searchInputValue: action.payload };
    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    case SET_PLAYING_TRACK:
      return { ...state, playingTrack: action.payload };
      case SET_PLAY:
        return { ...state, play: action.payload };
        case SET_PLAYING_TRACK_LYRICS:
        return { ...state, playingTrackLyrics: action.payload };
    default:
      return state;
  }
};
