import "./App.css";
import thunk from "redux-thunk";
import rootReducer from "../Store/mainReducers";
import Navbar from "../components/Navbar/Navbar";
import AnimationRoutes from "../components/AnimationRoutes";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function App() {
  return (
    <div>
      <Router>
        <Provider store={store}>
        <Navbar hideReservation={"hidden"} showSearchID={"visible"} />
        <AnimationRoutes/>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
