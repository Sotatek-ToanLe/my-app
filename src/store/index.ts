import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { rootSaga } from "./saga";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
