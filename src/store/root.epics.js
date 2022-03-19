import { combineEpics } from 'redux-observable';
import appInfoLoadEpic from './app-info/app-info.epics';

const rootEpic = combineEpics(
  appInfoLoadEpic,

);

export default rootEpic;
