import styles from "./mainPage.module.css";
import React from "react";
import { loginRequest } from "../../services/actions/index";
import { useDispatch, useSelector } from "../../types/index";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {login, password} = useSelector((state) => state.userInfo.info);
  const logged = useSelector(state => state.userInfo.logged)
  const [enteredPassword, setEnteredPassword] = useState<number|string>('');
  const [enteredLogin, setenteredLogin] = useState<number|string>('');
  const disabled = !(enteredLogin === login && enteredPassword == password)
  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginRequest())
    history.replace({ pathname: '/profile'})
    console.log(logged)
  } 
  return (
    <div className={styles.mainBox}>
      <div className={styles.header}>
        <h1>Главная страница</h1>
      </div>
      <div className={styles.enter}>
        <form onSubmit={submit}>
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="login"
              value={enteredLogin}
              onChange={(e) => setenteredLogin(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
          </div>
          <button disabled={disabled}>Вход</button>
        </form>
      </div>
    </div>
  );
};
