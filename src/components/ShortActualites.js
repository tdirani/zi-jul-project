import React from 'react';
// import TwitterContainer from './TwitterContainer';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class ShortActualites extends React.Component {
    render() {
        return (
            <div class="col-3 border border-secondary">
                <h2>Actualités</h2>
                {/* <TwitterContainer/> */}
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="jul"
                    options={{ height: '100em'}}
                    theme='dark'
                />
            </div>
        )
    };
}

export default ShortActualites;