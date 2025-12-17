import { RSAA } from 'redux-api-middleware';
import * as rsaaTypes from './rsaaTypes';

export default function StateApiActions(
    itemName,
    actionTypeRoot,
    uri,
    actionTypes,
    appRoot,
    uriPath
) {
    this.fetchState = (requiresAuth = true) => ({
        [RSAA]: {
            endpoint: `${appRoot}${uri}/${uriPath}`,
            method: 'GET',
            options: { requiresAuth },
            headers: {
                Accept: 'application/vnd.linn.application-state+json;version=1'
            },
            types: [
                rsaaTypes.requestedState(actionTypes, actionTypeRoot),
                rsaaTypes.receivedState(actionTypes, actionTypeRoot, itemName),
                rsaaTypes.error(actionTypes, actionTypeRoot, itemName)
            ]
        }
    });
}
