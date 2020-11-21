import React from 'react'
import './TweetBox.css'
import avatar from './avatar.png'
import {Avatar,Button} from '@material-ui/core'
function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
            <div className='tweetbox__input'>
                <Avatar src={avatar} />
                <input placeholder="What's happening ?" type='text' />

            </div>
                <input className='tweetbox__imginput'
                placeholder="Enter image src" type='text' />
            <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
