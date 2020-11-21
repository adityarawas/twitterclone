import React, { useState } from 'react'
import './TweetBox.css'
import avatar from './avatar.png'
import { Avatar, Button } from '@material-ui/core'
import db from './firebase'
function TweetBox() {
    const [tweetMessage, settweetMessage] = useState("")
    const [tweetImage, settweetImage] = useState("")

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Aditya Rawas",
            username: "rawas_aditya",
            verified:true,
            text: tweetMessage,
            image: tweetImage || null,
        });
        settweetMessage("");
        settweetImage("");
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetbox__input'>
                    <Avatar src={avatar} />
                    <input 
                    onChange = { e=> settweetMessage(e.target.value)}
                    value={tweetMessage} placeholder="What's happening ?" type='text' />

                </div>
                <input className='tweetbox__imginput'
                    placeholder="Enter image src" type='text' value={tweetImage} onChange={e=>settweetImage(e.target.value)}/>
                <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
