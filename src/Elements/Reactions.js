import React, { useState } from 'react';

const reactions = [
  { icon: '👍', label: 'Like', percentage: 20 },
  { icon: '❤️', label: 'Love', percentage: 60 },
  { icon: '😡', label: 'Angry', percentage: 5 },
  { icon: '😢', label: 'Sad', percentage: 5 }
];

function Reactions() {
  const [selectedReaction, setSelectedReaction] = useState(null);

  const handleReactionClick = (label) => {
    setSelectedReaction(selectedReaction === label ? null : label);
  };

  return (
    <div className="reactions-bar">
      <div className="reactions-container">
        {reactions.map((reaction) => (
          <button
            key={reaction.label}
            onClick={() => handleReactionClick(reaction.label)}
            className={`reaction-button ${selectedReaction === reaction.label ? 'active' : ''}`}
          >
            <span className="reaction-icon">{reaction.icon}</span>
            <span className="reaction-label">{reaction.label}</span>
            <span className="reaction-percentage">({reaction.percentage}%)</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Reactions;
