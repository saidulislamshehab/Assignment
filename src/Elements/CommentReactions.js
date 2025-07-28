import React, { useState } from 'react';

function CommentReactions() {
  const [selectedReaction, setSelectedReaction] = useState(null);

  const handleReactionClick = (reaction) => {
    setSelectedReaction(selectedReaction === reaction ? null : reaction);
  };

  return (
    <div className="comment-reactions">
      <button
        onClick={() => handleReactionClick('like')}
        className={`comment-reaction-button ${selectedReaction === 'like' ? 'active like' : ''}`}
      >
        <span>👍</span>
        <span>Like</span>
      </button>
      <button
        onClick={() => handleReactionClick('dislike')}
        className={`comment-reaction-button ${selectedReaction === 'dislike' ? 'active dislike' : ''}`}
      >
        <span>👎</span>
        <span>Dislike</span>
      </button>
    </div>
  );
}

export default CommentReactions; 