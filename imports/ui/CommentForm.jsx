import React, { useState } from 'react';
import { CommentsCollection } from '/imports/db/CommentsCollection';

export const CommentForm = ({ user }) => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    CommentsCollection.insert({
      emailId: user.emails[0].address,
      text: text.trim()
    });

    setText("");
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Type to add new comments"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
};