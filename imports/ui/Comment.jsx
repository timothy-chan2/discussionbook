import React from 'react';

export const Comment = ({ comment }) => {
  return (
    <section className="comment">
      <header>
        <h2>{comment.user}</h2>
      </header>
      <p>{comment.text}</p>
    </section>
  );
};