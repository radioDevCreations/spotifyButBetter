import {ActionStringPayload} from '../../types/Action';

export const SET_SEARCH_INPUT_VALUE = 'SET_SEARCH_INPUT_VALUE';


export const setSearchInputValue = (value: string):ActionStringPayload => ({
    type: SET_SEARCH_INPUT_VALUE,
    payload: value
})