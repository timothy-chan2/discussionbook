import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';

// The form to enter a new comment on the discussion board
export const CommentForm = ({ user }) => {
  const maxLength = 1000;
  const [text, setText] = useState("");
  const [commentError, setCommentError] = useState("");

  useTracker(() => {
    if (text.length > maxLength) {
      setCommentError("🔥 Text exceeds max length 🔥");
    } else {
      setCommentError("");
    }
  },[text]);
  
  const handleSubmit = e => {
    e.preventDefault();

    if (text.length > maxLength) return;

    Meteor.call('comments.insert', { text, user });

    setText("");
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      {commentError && <p className="error-message">{commentError}</p>}
      <textarea
        placeholder="Type your new comment"
        value={text}
        required
        onChange={e => setText(e.target.value)}
      />
      <div>
        <button type="submit">Send</button>
        <p>{text.length} / {maxLength}</p>
      </div>
    </form>
  );
};