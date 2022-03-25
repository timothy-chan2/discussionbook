import React from 'react';

// A single comment in the feed from the Comments collection
export const Comment = ({ comment }) => {
  return (
    <section className="comment">
      <header>
        <h2>{comment.emailId}</h2>
      </header>
      <p>{comment.text}</p>
    </section>
  );
};