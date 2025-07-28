import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { comments } from '../DummyData/dummyData';

function AuthorProfile() {
  const { authorId } = useParams();
  
  // Find the author from comments data
  const author = comments.find(comment => comment.id === parseInt(authorId));
  
  // If author not found, show default author
  const authorName = author ? author.author : 'Author Name';
  const authorDate = author ? author.date : 'January 2025';

  return (
    <div className="author-profile">
      <div className="author-profile-content">
        {/* Back to Article Link */}
        <Link 
          to="/" 
          className="back-link"
        >
          ← Back to Article
        </Link>

        {/* Author Profile Card */}
        <div className="author-card">
          <div className="author-header">
            <div className="author-profile-avatar"></div>
            <div className="author-profile-info">
              <h1>{authorName}</h1>
              <p>Comment Author & Content Creator</p>
              <p>Member since {authorDate}</p>
            </div>
          </div>

          {/* Author Bio */}
          <div className="author-bio">
            <h2>About</h2>
            <p>
              {authorName} is an active community member who enjoys sharing insights and perspectives on various topics. 
              They contribute thoughtful comments and engage in meaningful discussions.
            </p>
            <p>
              With a passion for knowledge sharing and community building, {authorName} has been participating in discussions 
              and providing valuable feedback to help improve content quality and user experience.
            </p>
          </div>

          {/* Stats */}
          <div className="author-stats">
            <div className="stat-item">
              <div className="stat-number blue">{author ? author.likes : 0}</div>
              <div className="stat-label">Likes Received</div>
            </div>
            <div className="stat-item">
              <div className="stat-number green">{author ? author.dislikes : 0}</div>
              <div className="stat-label">Dislikes</div>
            </div>
            <div className="stat-item">
              <div className="stat-number purple">1</div>
              <div className="stat-label">Comments</div>
            </div>
          </div>
        </div>

        {/* Author ID Display (for debugging) */}
        <div className="author-id">
          Author ID: {authorId}
        </div>
      </div>
    </div>
  );
}

export default AuthorProfile;
