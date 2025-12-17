import { RSAA } from 'redux-api-middleware';
import * as rsaaTypes from './rsaaTypes';

export default function FetchApiActions(
    itemName,
    actionTypeRoot,
    uri,
    actionTypes,
    appRoot,
    accept
) {
    this.fetch = (requiresAuth = true) => ({
        [RSAA]: {
            endpoint: `${appRoot}${uri}`,
            method: 'GET',
            options: { requiresAuth },
            headers: {
                Accept: accept ?? 'application/json'
            },
            types: [
                rsaaTypes.requested(actionTypes, actionTypeRoot),
                rsaaTypes.received(actionTypes, actionTypeRoot, itemName),
                rsaaTypes.error(actionTypes, actionTypeRoot, itemName)
            ]
        }
    });

    this.fetchById = (id, requiresAuth = true) => ({
        [RSAA]: {
            endpoint: `${appRoot}${uri}/${id}`,
            method: 'GET',
            options: { requiresAuth },
            headers: {
                Accept: accept ?? 'application/json'
            },
            types: [
                rsaaTypes.requested(actionTypes, actionTypeRoot),
                rsaaTypes.received(actionTypes, actionTypeRoot, itemName),
                rsaaTypes.error(actionTypes, actionTypeRoot, itemName)
            ]
        }
    });

    this.fetchByPath = (id, path, requiresAuth = true) => ({
        [RSAA]: {
            endpoint: `${appRoot}${uri}/${id}/${path}`,
            method: 'GET',
            options: { requiresAuth },
            headers: {
                Accept: accept ?? 'application/json'
            },
            types: [
                rsaaTypes.requested(actionTypes, actionTypeRoot),
                rsaaTypes.received(actionTypes, actionTypeRoot, itemName),
                rsaaTypes.error(actionTypes, actionTypeRoot, itemName)
            ]
        }
    });

    this.fetchPage = (pageNumber, rowsPerPage, requiresAuth = true) => ({
        [RSAA]: {
            endpoint: `${appRoot}${uri}/${pageNumber}/${rowsPerPage}`,
            method: 'GET',
            options: { requiresAuth },
            headers: {
                Accept: accept ?? 'application/json'
            },
            types: [
                rsaaTypes.requested(actionTypes, actionTypeRoot),
                rsaaTypes.received(actionTypes, actionTypeRoot, itemName),
                rsaaTypes.error(actionTypes, actionTypeRoot, itemName)
            ]
        }
    });

    this.fetchSortedPage = (pageNumber, rowsPerPage, sortBy, asc, requiresAuth = true) => ({
        [RSAA]: {
            endpoint: `${appRoot}${uri}/${pageNumber}/${rowsPerPage}/${sortBy}/${asc}`,
            method: 'GET',
            options: { requiresAuth },
            headers: {
                Accept: accept ?? 'application/json'
            },
            types: [
                rsaaTypes.requested(actionTypes, actionTypeRoot),
                rsaaTypes.received(actionTypes, actionTypeRoot, itemName),
                rsaaTypes.error(actionTypes, actionTypeRoot, itemName)
            ]
        }
    });

    this.search = (searchTerm, requiresAuth = true) => ({
        [RSAA]: {
            endpoint: `${appRoot}${uri}?searchTerm=${searchTerm}`,
            method: 'GET',
            options: { requiresAuth },
            headers: {
                Accept: accept ?? 'application/json'
            },
            types: [
                rsaaTypes.requestSearch(actionTypes, actionTypeRoot),
                rsaaTypes.receiveSearch(actionTypes, actionTypeRoot, itemName),
                rsaaTypes.error(actionTypes, actionTypeRoot, itemName)
            ]
        }
    });

    this.searchWithOptions = (searchTerm, options, requiresAuth = true) => ({
        [RSAA]: {
            endpoint: `${appRoot}${uri}?searchTerm=${searchTerm}${options}`,
            method: 'GET',
            options: { requiresAuth },
            headers: {
                Accept: accept ?? 'application/json'
            },
            types: [
                rsaaTypes.requestSearch(actionTypes, actionTypeRoot),
                rsaaTypes.receiveSearch(actionTypes, actionTypeRoot, itemName),
                rsaaTypes.error(actionTypes, actionTypeRoot, itemName)
            ]
        }
    });

    this.clearSearch = () => ({
        type: actionTypes[`CLEAR_SEARCH_${actionTypeRoot}`],
        payload: {}
    });

    this.clearItems = () => ({
        type: actionTypes[`CLEAR_${actionTypeRoot}_DATA`],
        payload: {}
    });

    this.fetchState = (requiresAuth = true) => ({
        [RSAA]: {
            endpoint: `${appRoot}${uri}/application-state`,
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
