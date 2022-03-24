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

  const logout = () => Meteor.logout();

  return (
    <div className="app">
      <header className="menu">
        <h1>Discussionbook</h1>
        {user &&
          <section className="user">
            <span>Logged in as: {user.emails[0].address}</span>
            <button onClick={logout}>Logout</button>
          </section>
        }
      </header>

      <main>
        {user ? (
          <Fragment>
            <CommentForm user={user} />
            <section className="old-comments">{oldComments}</section>
          </Fragment>
        ) : (
          <LoginForm />
        )}
      </main>
    </div>
  );
};