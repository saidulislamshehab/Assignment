import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommentReactions from './CommentReactions';

function Comments({ comments, totalComments, onAddComment }) {
  const [commentText, setCommentText] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      
      const newComment = {
        id: comments.length + 1,
        author: 'You',
        date: new Date().toLocaleDateString('en-US', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        }),
        text: commentText,
        likes: 0,
        dislikes: 0
      };
      
      
      onAddComment(newComment);
      
      
      setCommentText('');
    }
  };

  return (
    <div className="comments-section">
      <h3 className="comments-header">{totalComments} Comments</h3>
      
      {/* Comment Input */}
      <form onSubmit={handleSubmitComment} className="comment-input-container">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write your comment.."
          className="comment-input"
        />
        <button
          type="submit"
          className="comment-submit"
        >
          →
        </button>
      </form>

      {/* Comments List */}
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comment-header">
              <div className="comment-avatar"></div>
              <div>
                <Link 
                  to={`/author/${comment.id}`} 
                  className="comment-author-link"
                >
                  {comment.author}
                </Link>
                <span className="comment-date">{comment.date}</span>
              </div>
              <button className="comment-report">Report</button>
            </div>
            <p className="comment-text">{comment.text}</p>
            <CommentReactions likes={comment.likes} dislikes={comment.dislikes} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;