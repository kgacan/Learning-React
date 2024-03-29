import React from 'react'
import styles from './footer.css';
import {Link } from 'react-router-dom';

import {CURRENT_YEAR } from '../../config';


const Footer = () =>{
    return (
        <div className={styles.footer}>
            <Link className={styles.logo}>
                <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
            <div className={styles.right}>
                @NBA {CURRENT_YEAR} All right reserved.
            </div>
        </div>
    )
}

export default Footer;