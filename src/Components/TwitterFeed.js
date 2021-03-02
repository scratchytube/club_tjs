import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = () => {
    return (
        <div>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="TraderJoesList"
                options={{height: 400}}
            />
        </div>
    )
}

export default TwitterFeed