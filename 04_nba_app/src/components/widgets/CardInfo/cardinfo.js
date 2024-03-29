import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './cardInfo.css';

const teamName=(teams, team)=>{
    const data = teams.find((item)=>{
        return item.id===team
    });
    if(data){
        return data.name
    }
}

const CardInfo = (props) =>{
    return(
        <div className={styles.CardNfo}>
            <span className={styles.teamName}>
                {teamName(props.teams, props.team)}
            </span>
            <span className={styles.date}>
                <FontAwesome name="clock-o"/>
                {props.date}
            </span>
        </div>
    )
}

export default CardInfo;