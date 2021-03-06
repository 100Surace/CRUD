import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import productReducer from './slices/product';
import vendorReducer from './slices/vendor';
import ecomCategoryReducer from './slices/ecomCategory';
import productVariantReducer from './slices/productVariant';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const productPersistConfig = {
  key: 'product',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout']
};

const rootReducer = combineReducers({
  product: persistReducer(productPersistConfig, productReducer),
  vendor: vendorReducer,
  ecomCategory: ecomCategoryReducer,
  productVariant: productVariantReducer
});

export { rootPersistConfig, rootReducer };
