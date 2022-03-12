export const UPDATE_APP_INFO = 'UPDATE_APP_INFO';

export function updateAppInfo(appInfo = { appName: '', version: ''}) {
    return {
        type: UPDATE_APP_INFO,
        payload: {
            appInfo,
        }
    }
}
