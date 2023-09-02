import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Utilities and component
import {api} from '../utils/API';
import samyak from './slice/OauthSlice';
import promotion from './slice/DashBoardPromotionSlice';
import healthTips from './slice/DashBoardHealthTipsPostSlice';
import bookingList from './slice/BookingListPostSlice';
import addNewAddressPost from './slice/ManageAddNewAddressPostSlice';
import getAddressPost from './slice/ManageAddressPostSlice';
import aboutUs from './slice/AboutUsSlice';
import contactUs from './slice/ContactUsSlice';
import manageBranch from './slice/ManageBranchPostSlice';
import showAddress from './slice/ManageShowAddressSlice';
import manageMemberList from './slice/ManageMemberListSlice';
import addMemberList from './slice/AddMemberListSlice';

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  samyak,
  promotion,
  healthTips,
  bookingList,
  addNewAddressPost,
  getAddressPost,
  aboutUs,
  contactUs,
  manageBranch,
  showAddress,
  manageMemberList,
  addMemberList,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['samyak'], // deletes all state value except "auth" state value
  blacklist: [''],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);
    // comment this line if your system doesnt have flipper installed
    // if (_DEV_ && !process.env.JEST_WORKER_ID) {
    //   const createDebugger = require("redux-flipper").default;
    //   middlewares.push(createDebugger(), logger);
    // }
    return middlewares;
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

setupListeners(store.dispatch);

export {store, persistor};
