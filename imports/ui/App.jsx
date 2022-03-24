import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CommentsCollection } from '/imports/db/CommentsCollection';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';

export const App = () => {
  const comments = useTracker(() => CommentsCollection.find({}).fetch());

  const oldComments = comments.map(comment => (
    <Comment
      key={comment._id}
      comment={comment}
    />
  ));

  return (
    <div>
      <h1>Discussionbook</h1>

      <CommentForm />

      <section className="old-comments">{oldComments}</section>
    </div>
  );
};