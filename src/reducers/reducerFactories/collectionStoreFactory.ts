import utilities from '../../utilities/index';

// Type for hypermedia links
interface Link {
    rel: string;
    href: string;
}

// Application state slice
interface ApplicationState {
    links: Link[];
    loading: boolean;
}

// Complete reducer state
interface State {
    loading?: boolean;
    searchLoading?: boolean;
    items?: Record<string, unknown>[];
    searchItems?: Record<string, unknown>[];
    applicationState?: ApplicationState;
    snackbarVisible?: boolean;
}

// Action type map
type ActionTypes = Record<string, string>;

type HypermediaLink = {
    rel: string;
    href: string;
};

interface Data {
  links?: HypermediaLink[];
  [key: string]: unknown;
}

type Action = {
  type: string;
  payload?: {
    data?: Data| Data[];
  };
};

export default function collectionReducerFactory(
    itemRoot: string,
    actionTypes: ActionTypes,
    defaultState: State = { loading: false, searchLoading: false, items: [], searchItems: [] },
    listFieldName: string | null = null
): (state: State | undefined, action: Action) => State {
    const makeItem = (item: Record<string, unknown>): Record<string, unknown> => ({
        ...item,   
        href: utilities.getSelfHref(item)
    });

    const getItems = (response?: Record<string, unknown> | Record<string, unknown>[]): Record<string, unknown>[] => {
        if (!response) return [];

        if (listFieldName && !Array.isArray(response)) {
            const list = response[listFieldName];
            if (Array.isArray(list)) {
               return list;
            }
        }

        if (Array.isArray(response)) {
            return response;
        }

        return [];
    };

    return (state = defaultState, action: Action): State => {
        switch (action.type) {
            case actionTypes[`REQUEST_${itemRoot}`]:
                return { ...state, loading: true, items: [], searchItems: [] };

            case actionTypes[`REQUEST_APPLICATION_STATE_${itemRoot}`]:
                return { ...state, applicationState: { loading: true, links: [] } };

            case actionTypes[`RECEIVE_${itemRoot}`]:
                return {
                    ...state,
                    loading: false,
                    items: getItems(action.payload?.data)
                };

            case actionTypes[`RECEIVE_APPLICATION_STATE_${itemRoot}`]:
                const data = action.payload?.data;

                return {
                    ...state,
                    applicationState: {
                        links:
                            data && !Array.isArray(data) && Array.isArray(data.links)
                                ? (data.links as Link[])
                                : [],
                        loading: false
                    }
                };

            case actionTypes[`REQUEST_SEARCH_${itemRoot}`]:
                return { ...state, searchLoading: true, searchItems: [] };

            case actionTypes[`RECEIVE_SEARCH_${itemRoot}`]:
                return {
                    ...state,
                    searchLoading: false,
                    searchItems: getItems(action.payload?.data)
                };

            case actionTypes[`CLEAR_SEARCH_${itemRoot}`]:
                return { ...state, searchLoading: false, searchItems: [] };

            case actionTypes[`CLEAR_${itemRoot}_DATA`]:
                return defaultState;

            case actionTypes[`FETCH_${itemRoot}_ERROR`]:
                return { ...state, loading: false };

            case actionTypes[`REQUEST_UPDATE_${itemRoot}`]:
            case actionTypes[`REQUEST_POST_${itemRoot}`]:
                return { ...state, loading: true };

            case actionTypes[`RECEIVE_UPDATED_${itemRoot}`]:
            case actionTypes[`RECEIVE_POST_${itemRoot}`]:
                return {
                    ...state,
                    loading: false,
                    items: getItems(action.payload?.data),
                    snackbarVisible: true
                };

            case actionTypes[`SHOW_${itemRoot}_SNACKBAR`]:
                return { ...state, snackbarVisible: true };

            case actionTypes[`HIDE_${itemRoot}_SNACKBAR`]:
                return { ...state, snackbarVisible: false };

            default:
                return state;
        }
    };
}
