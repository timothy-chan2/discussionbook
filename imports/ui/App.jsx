import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CommentsCollection } from '/imports/db/CommentsCollection';
import { Comment } from './Comment';

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

      <article>{oldComments}</article>
    </div>
  );
};