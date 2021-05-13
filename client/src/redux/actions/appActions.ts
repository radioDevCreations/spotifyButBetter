import {ActionTrackPayload, ActionArrayPayload, ActionStringPayload, ActionBooleanPayload} from '../../types/Action';
import { Track } from '../../types/Track';

export const SET_SEARCH_INPUT_VALUE = 'SET_SEARCH_INPUT_VALUE';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const SET_PLAYING_TRACK = 'SET_PLAYING_TRACK';
export const SET_PLAY = 'SET_PLAY';
export const SET_PLAYING_TRACK_LYRICS = 'SET_PLAYING_TRACK_LYRICS';




export const setSearchInputValue = (value: string):ActionStringPayload => ({
    type: SET_SEARCH_INPUT_VALUE,
    payload: value
});

export const setSearchResults = (results: any[] | undefined):ActionArrayPayload => ({
    type: SET_SEARCH_RESULTS,
    payload: results
})

export const setPlayingTrack = (playing: Track):ActionTrackPayload => ({
    type: SET_PLAYING_TRACK,
    payload: playing
})

export const setPlay = (play: boolean):ActionBooleanPayload => ({
    type: SET_PLAY,
    payload: play
})

export const setPlayingTrackLyrics = (lyrics: string):ActionStringPayload => ({
    type: SET_PLAYING_TRACK_LYRICS,
    payload: lyrics
})