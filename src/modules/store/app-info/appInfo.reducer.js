import { UPDATE_APP_INFO } from './appInfo.actions';

const initialState = { appName: '', version: '' };

export default function appInfoReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_APP_INFO:
            return {
                ...action.payload.appInfo,
            };
        default:
            return state;
    }
}
