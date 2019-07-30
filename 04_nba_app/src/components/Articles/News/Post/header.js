import React from 'react';
import TeamNfo from '../../Elements/teamNfo';
import PostData from '../../Elements/postData';

const ArticleHeader = (props) => {

    const teamNfo = (team) => {
        return team ? (
            <TeamNfo team={team}/>
        ) : null
    }
    const postData = (date, author)=>(
        <PostData data={{date, author}}/>
    )

    // const teamNfo = (team)=>{
    //     return (<div>
    //         eewdwef
    //     </div>)
    // }

    return(
        <div>
            {teamNfo(props.teamData)}
            {postData(props.date, props.author)}
        </div>
    )
}

export default ArticleHeader;