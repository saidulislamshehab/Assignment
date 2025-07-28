import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reactions from '../Elements/Reactions';
import Comments from '../Elements/Comments';
import Pagination from '../Elements/Pagination';
import { comments } from '../DummyData/dummyData';

function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  return (
    <div className="page">
      <div className="content">
        {/* Breadcrumb */}
        <p className="breadcrumb">Section &gt; Sub-section</p>
        
        {/* Article Title */}
        <h1 className="title">
          Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor
        </h1>
        
        {/* Introduction */}
        <p className="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        {/* Main Content Image */}
        <div className="image-placeholder"></div>
        <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        {/* Author Information */}
        <div className="author-section">
          <div className="author-avatar"></div>
          <div className="author-info">
            <Link to="/author/1" className="author-name">
              Author Name
            </Link>
            <p className="author-date">7 January 2025</p>
          </div>
        </div>

        {/* Main Article Body */}
        <div className="article-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>

        {/* Post Reactions */}
        <Reactions />

        {/* Comments Section */}
        <Comments comments={currentComments} totalComments={comments.length} />

        {/* Pagination */}
        <Pagination
          totalComments={comments.length}
          commentsPerPage={commentsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default MainPage;
