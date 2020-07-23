import React from 'react';
import "./Post.css"
import postImage from "./images/image-post.png"
import profilePic from "./images/profile.jpg"

function Post() {
  return (
    <div className="post-container">
      <div className="profile-info">
        <img src={profilePic} className="profile-pic" alt="" />
        <p className="username">ramit</p>
        <button className="extra-button">&hellip;</button>
      </div>
      <img src={postImage} className="post-pic" alt="" />
      <div className="post-description">
        <div className="action-bar">
          {/* icons etc */}
        </div>
        <p className="likes">7,230 likes</p>
        <p><span className="username">ramit</span>You decide your Rich Life, including your morning routine.</p>
      </div>
      <form className="make-comment">
        <input type="text" placeholder="Add a comment..." className="comment-input" />
        <button>Post</button>
      </form>
    </div>
  );
}

export default Post;
