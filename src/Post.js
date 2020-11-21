import React from 'react'
import './Post.css'
import avatar from './avatar.png'
import {Avatar} from '@material-ui/core'
import RepeatIcon from '@material-ui/icons/Repeat';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublicIcon from '@material-ui/icons/Public';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
function Post({
displayName,
username,
verified,
text,
image,
avatar
}) {
    return (
        <div className="post">
            <div class="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Aditya Rawas{""}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" />
                                @rawasaditya
                            </span>
                        </h3>
                </div>
                <div className="post__headerDescription">
                    <p>I challeng you to build a Twitter Clone with react</p>
                </div>
            </div>
            <img src="https://media2.giphy.com/media/WTXdofYvFFhMTYhVKp/giphy.webp" />
            <div className='post__footer' >
                <ChatBubbleOutlineIcon fontSize='small' />
                <RepeatIcon fontSize='small' />  
                <FavoriteBorderIcon fontSize="small" />  
                <PublicIcon fontSize="small" />  

            </div>
        </div>
        </div>

    )
}

export default Post
