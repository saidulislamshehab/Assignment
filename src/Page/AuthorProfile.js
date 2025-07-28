import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { comments } from '../DummyData/dummyData';

function AuthorProfile() {
  const { authorId } = useParams();
  
  const author = comments.find(comment => comment.id === parseInt(authorId));
  
  const authorName = author ? author.author : 'Author Name';
  const authorDate = author ? author.date : 'January 2025';

  const getAuthorStats = (authorName) => {
    const stats = {
      'John Smith': { followers: 1247, following: 89, posts: 156, bio: 'Tech enthusiast and software developer with 8+ years of experience. Love sharing insights about programming and new technologies.' },
      'Sarah Johnson': { followers: 892, following: 234, posts: 89, bio: 'Digital marketing specialist and content creator. Passionate about helping businesses grow through strategic marketing.' },
      'Mike Davis': { followers: 2156, following: 156, posts: 203, bio: 'UX/UI designer and creative professional. Always exploring new design trends and user experience best practices.' },
      'Emily Wilson': { followers: 567, following: 445, posts: 67, bio: 'Freelance writer and editor. Specializing in technology and lifestyle content. Always eager to learn and share knowledge.' },
      'David Brown': { followers: 1893, following: 78, posts: 134, bio: 'Data scientist and analytics expert. Helping organizations make data-driven decisions and optimize their processes.' },
      'Lisa Anderson': { followers: 3421, following: 123, posts: 278, bio: 'Product manager with expertise in SaaS and mobile applications. Focused on creating user-centric products that solve real problems.' },
      'Robert Taylor': { followers: 756, following: 567, posts: 45, bio: 'Startup founder and entrepreneur. Building innovative solutions and sharing lessons learned from the startup journey.' },
      'Jennifer Lee': { followers: 1543, following: 234, posts: 167, bio: 'Content strategist and social media expert. Helping brands create engaging content that resonates with their audience.' },
      'Thomas Garcia': { followers: 987, following: 345, posts: 78, bio: 'Full-stack developer and open source contributor. Passionate about clean code and building scalable applications.' },
      'Amanda White': { followers: 2134, following: 189, posts: 145, bio: 'Business consultant and strategy advisor. Helping companies navigate digital transformation and market challenges.' },
      'Kevin Martinez': { followers: 678, following: 456, posts: 56, bio: 'Cybersecurity analyst and ethical hacker. Dedicated to making the digital world a safer place for everyone.' },
      'Rachel Green': { followers: 1892, following: 234, posts: 123, bio: 'UX researcher and accessibility advocate. Ensuring digital products are inclusive and user-friendly for all users.' },
      'Alex Thompson': { followers: 3456, following: 123, posts: 234, bio: 'AI researcher and machine learning engineer. Exploring the future of artificial intelligence and its applications.' },
      'Maria Rodriguez': { followers: 1234, following: 567, posts: 89, bio: 'Healthcare technology specialist and medical informatics expert. Bridging the gap between technology and patient care.' },
      'James Wilson': { followers: 2789, following: 156, posts: 178, bio: 'Financial analyst and investment advisor. Providing insights on market trends and personal finance strategies.' },
      'Sophie Chen': { followers: 892, following: 234, posts: 67, bio: 'Environmental scientist and sustainability advocate. Working towards a greener future through science and education.' },
      'Daniel Kim': { followers: 1567, following: 345, posts: 112, bio: 'Mobile app developer and iOS specialist. Creating intuitive and beautiful mobile experiences for users worldwide.' },
      'Emma Davis': { followers: 2341, following: 189, posts: 156, bio: 'Digital artist and creative director. Bringing ideas to life through visual storytelling and innovative design.' },
      'Michael Johnson': { followers: 987, following: 234, posts: 78, bio: 'Blockchain developer and cryptocurrency enthusiast. Building decentralized applications and exploring Web3 technologies.' },
      'Olivia Brown': { followers: 1789, following: 267, posts: 134, bio: 'E-commerce specialist and online business consultant. Helping entrepreneurs build successful digital businesses.' }
    };
    
    return stats[authorName] || { 
      followers: Math.floor(Math.random() * 2000) + 500, 
      following: Math.floor(Math.random() * 500) + 100, 
      posts: Math.floor(Math.random() * 200) + 50,
      bio: `${authorName} is an active community member who enjoys sharing insights and perspectives on various topics. They contribute thoughtful comments and engage in meaningful discussions.`
    };
  };

  const authorStats = getAuthorStats(authorName);

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
              <p className="author-title">Community Member & Content Creator</p>
              <p className="author-joined">Member since {authorDate}</p>
            </div>
          </div>

          {/* Author Bio */}
          <div className="author-bio">
            <h2>About</h2>
            <p>{authorStats.bio}</p>
          </div>

          {/* Social Stats */}
          <div className="author-stats">
            <div className="stat-item">
              <div className="stat-number blue">{authorStats.followers.toLocaleString()}</div>
              <div className="stat-label">Followers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number green">{authorStats.following.toLocaleString()}</div>
              <div className="stat-label">Following</div>
            </div>
            <div className="stat-item">
              <div className="stat-number purple">{authorStats.posts.toLocaleString()}</div>
              <div className="stat-label">Posts</div>
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
