import { combineReducers } from '@reduxjs/toolkit'
import dataReducer from './reducer/dataReducer';

export const rootReducer = combineReducers({
    data: dataReducer,
});