import React, { Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CommentsCollection } from '/imports/db/CommentsCollection';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';
import { LoginForm } from './LoginForm';

export const App = () => {
  const user = useTracker(() => Meteor.user());
  const comments = useTracker(() => CommentsCollection.find({}).fetch());

  const oldComments = comments.map(comment => (
    <Comment
      key={comment._id}
      comment={comment}
    />
  ));

  return (
    <div className="app">
      <header>
        <h1>Discussionbook</h1>
      </header>

      <main>
        {user ? (
          <Fragment>
            <CommentForm />
            <section className="old-comments">{oldComments}</section>
          </Fragment>
        ) : (
          <LoginForm />
        )}
      </main>
    </div>
  );
};