import styles from "./app.module.css";
import { Route, Switch } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/MainPage";
import { Profile } from "../../pages/Profile/Profile";
import React from "react";
import ProtectedRoute from "../protectedRouters/protectedUnLogged";


export const App = () => {
  return (
    <div className={styles.mainBox}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <ProtectedRoute exact path="/profile">
          <Profile />
        </ProtectedRoute>
        <Route path='' render={() => (<h1>ops! error 404!</h1>)} />
      </Switch>
    </div>
  );
};
