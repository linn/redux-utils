// Actions
import makeActionTypes from './src/actions/makeActionTypes';
import makeReportActionTypes from './src/actions/makeReportActionTypes';
import makeProcessActionTypes from './src/actions/makeProcessActionTypes';
import FetchApiActions from './src/actions/FetchApiActions';
import ProcessActions from './src/actions/ProcessActions';
import ReportActions from './src/actions/ReportActions';
import UpdateApiActions from './src/actions/UpdateApiActions';
import StateApiActions from './src/actions/StateApiActions';
import fetchNews from './src/actions/fetchNews';
import markNotificationSeen from './src/actions/markNotificationSeen';
import fetchMenu from './src/actions/fetchMenu';

// Reducers
import collectionStoreFactory from './src/reducers/reducerFactories/collectionStoreFactory';
import collectionWithLinksStoreFactory from './src/reducers/reducerFactories/collectionWithLinksStoreFactory';
import processStoreFactory from './src/reducers/reducerFactories/processStoreFactory';
import itemStoreFactory from './src/reducers/reducerFactories/itemStoreFactory';
import reportOptionsFactory from './src/reducers/reducerFactories/reportOptionsFactory';
import reportResultsFactory from './src/reducers/reducerFactories/reportResultsFactory';
import reportsResultsFactory from './src/reducers/reducerFactories/reportsResultsFactory';
import fetchErrorReducerFactory from './src/reducers/reducerFactories/fetchErrorReducerFactory';
import menu from './src/reducers/menu';
import news from './src/reducers/news';

// Selectors
import collectionSelectorHelpers from './src/selectors/collectionSelectorHelpers';
import paginationSelectorHelpers from './src/selectors/paginationSelectorHelpers';
import itemSelectorHelpers from './src/selectors/itemSelectorHelpers';
import reportSelectorHelpers from './src/selectors/reportSelectorHelpers';
import processSelectorHelpers from './src/selectors/processSelectorHelpers';
import menuSelectors from './src/selectors/menuSelectors';
import newsSelectors from './src/selectors/newsSelectors';
import getUsername from './src/selectors/legacyUserSelectors';
import userSelectors from './src/selectors/userSelectors';
import {
    getItemError,
    getRequestErrors,
    getItemErrors,
    getItemErrorDetailMessage
} from './src/selectors/errorSelectors';

// Types
import ItemType from './src/ItemType';

const reducers = { menu, news };

function hello() {
    console.log('Hello from linn-redux-utils!');
}

export {
    // Actions
    makeActionTypes,
    makeReportActionTypes,
    makeProcessActionTypes,
    FetchApiActions,
    ProcessActions,
    ReportActions,
    UpdateApiActions,
    StateApiActions,
    fetchNews,
    markNotificationSeen,
    fetchMenu,

    // Reducers
    collectionStoreFactory,
    collectionWithLinksStoreFactory,
    processStoreFactory,
    itemStoreFactory,
    reportOptionsFactory,
    reportResultsFactory,
    reportsResultsFactory,
    fetchErrorReducerFactory,
    menu,
    news,
    reducers,

    // Selectors
    collectionSelectorHelpers,
    paginationSelectorHelpers,
    itemSelectorHelpers,
    reportSelectorHelpers,
    processSelectorHelpers,
    menuSelectors,
    newsSelectors,
    getUsername,
    userSelectors,
    getItemError,
    getRequestErrors,
    getItemErrors,
    getItemErrorDetailMessage,

    // Types
    ItemType,

    // Test
    hello
};
