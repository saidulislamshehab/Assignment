import React, { useState } from 'react';

function CommentReactions({ likes = 0, dislikes = 0 }) {
  const [selectedReaction, setSelectedReaction] = useState(null);

  const handleReactionClick = (reaction) => {
    setSelectedReaction(selectedReaction === reaction ? null : reaction);
  };

  const handleReplyClick = () => {
    // Handle reply functionality
    console.log('Reply clicked');
  };

  return (
    <div className="comment-reactions">
      <button
        onClick={() => handleReactionClick('like')}
        className={`comment-reaction-button ${selectedReaction === 'like' ? 'active like' : ''}`}
      >
        <span>👍</span>
        <span>Like {likes}</span>
      </button>
      <button
        onClick={() => handleReactionClick('dislike')}
        className={`comment-reaction-button ${selectedReaction === 'dislike' ? 'active dislike' : ''}`}
      >
        <span>👎</span>
        <span>Dislike {dislikes}</span>
      </button>
      <span
        onClick={handleReplyClick}
        className="comment-reply-text"
      >
        <span></span>
        <span>Reply</span>
      </span>
    </div>
  );
}

export default CommentReactions; 