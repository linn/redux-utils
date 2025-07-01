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

// Types
import ItemType from './src/ItemType';

type ReducersType = {
  menu: typeof menu;
  news: typeof news;
};

const reducers: ReducersType = { menu, news };

function hello(): void {
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

  // Types
  ItemType,

  // Test
  hello
};
