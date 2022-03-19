import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { creators, types } from './app-info.actions';
import { getAppInfo } from '../../services/app-info.services';

const appInfoLoadEpic = (actions$) => actions$.pipe(
    ofType(types.ATTEMPTED),
    switchMap(() => from(
        getAppInfo(),
    ).pipe(
        map((payload) => creators.successful(payload)),
        catchError((error) => creators.failed(error)),
    )),
);

export default appInfoLoadEpic;

