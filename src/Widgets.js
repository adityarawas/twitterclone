import React from 'react'
import './Widgets.css'
import SearchIcon from "@material-ui/icons/Search"
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from "react-twitter-embed"
function Widgets() {
    return (
        <div className='widgets'>
           <div className="widgets__input">
               <SearchIcon className="widgets__searchIcon" />
               <input placeholder="Search Twitter" type="text" />
           </div>
           <div className="widgets_widgetContainer">
               <h2>What's happening </h2>
            <TwitterTweetEmbed tweetId={"828449796922941441"} />
            <TwitterTimelineEmbed sourceType="profile" screenName="rawas_aditya"
            style={{height:400}}
            />

            <TwitterShareButton
          url={"https://facebook.com/"}
          options={{ text: "Test post", via: "Aditya Rawas" }}
        />
           </div>
        </div>
    )
}

export default Widgets
