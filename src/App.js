import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StateProvider } from "./state/context";
import { initialState } from "./state/initialState";
import { reducer } from "./state/reducer";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import "./styles/styles.scss";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/homepage" component={HomePage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
