import React from 'react'
import VideoList from '../../../widgets/VideosList/videosList';

const VideosNews = () =>{
    return(
        <div>
            <VideoList
                type="card"
                title={true}
                loadmore={true}
                start={0}
                amount={10}
            />
        </div>
    )
}


export default VideosNews;