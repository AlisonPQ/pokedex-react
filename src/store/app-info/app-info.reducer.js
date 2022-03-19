import { createReducers } from 'redux-arc';
import { types } from './app-info.actions';

const INITIAL_STATE = {
    description: {},
};

const onAttempted = (state) => ({
    ...state,
});

const onSuccessful = (state, action) => {
    const { payload } = action;

    return {
        ...state,
        description: payload,
    };
};

const onFailed = () => INITIAL_STATE;

const HANDLERS = {
    [types.ATTEMPTED]: onAttempted,
    [types.SUCCESSFUL]: onSuccessful,
    [types.FAILED]: onFailed,
};

export default createReducers(INITIAL_STATE, HANDLERS);
