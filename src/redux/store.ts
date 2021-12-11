import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./reducers/productReducer";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import menuReducer from "./reducers/menuReducer";
import cartReducer from "./reducers/cartReducer";
import basketReducer from "./reducers/basketReducer";

const rootReducer = combineReducers({
  productReducer,
  menuReducer,
  cartReducer,
  basketReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

type RootState = ReturnType<typeof rootReducer>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
