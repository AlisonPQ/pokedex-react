import { createActions } from 'redux-arc';

export const { creators, types } = createActions('app_info_load', {
    attempted: null,
    successful: null,
    failed: null,
});
