import React, { useState } from 'react';

// The form to enter a new comment on the discussion board
export const CommentForm = ({ user }) => {
  const [text, setText] = useState("");
  const [commentError, setCommentError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setCommentError("");

    if (!text) {
      setCommentError("🔥 Cannot be empty 🔥");
      return;
    }

    Meteor.call('comments.insert', { text, user });

    setText("");
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      {commentError && <p className="error-message">{commentError}</p>}
      <textarea
        placeholder="Type your new comment"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button type="submit">Send</button>
    </form>
  );
};