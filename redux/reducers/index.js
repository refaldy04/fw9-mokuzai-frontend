import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth';
import CostomImage from './imageProduct';

const imageUrlValConfig ={
  key: 'imageProduct',
  storage
}

const authConfig ={
  key: 'auth',
  storage
}

const presistedAuth = persistReducer(authConfig, auth)
const presistedReducerImage = persistReducer(imageUrlValConfig, CostomImage)

const reducer = combineReducers({
  CostomImage: presistedReducerImage,
  auth: presistedAuth
})

export default reducer