/*import axios from 'axios';

const getAppInfo = async () => {
    const appInfo = await axios.get('http://localhost:5034/api/v1/AppInfo');
    return appInfo;
}
*/

const getAppInfo = () => ([{ name: 'HardcodePodekexName', version: '0', status: 'Up'}]);

export {
    getAppInfo,
};
