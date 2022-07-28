import { createReducers } from 'redux-arc';
import { types } from './app-info.actions';

const INITIAL_STATE = {
    description: {},
    loading: false,
    loaded: false,
    error: false,
};

const onAttempted = (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: false,
});

const onSuccessful = (state, action) => {
    const { payload } = action;

    return {
        ...state,
        description: payload,
        loading: false,
        loaded: true,
        error: false,
    };
};

const onFailed = (state) => ({
    ...state,
    loading: false,
    loaded: false,
    error: true,
});

const HANDLERS = {
    [types.ATTEMPTED]: onAttempted,
    [types.SUCCESSFUL]: onSuccessful,
    [types.FAILED]: onFailed,
};

export default createReducers(INITIAL_STATE, HANDLERS);
