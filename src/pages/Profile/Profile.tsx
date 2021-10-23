import styles from './profile.module.css'
import React from 'react';
import { useSelector } from '../../types/index';

export const Profile = () => {
    const login = useSelector(state => state.userInfo.info.login)
    return (
        <div className={styles.mainBox}>
            <h1>{login}</h1>
        </div>
    )
}