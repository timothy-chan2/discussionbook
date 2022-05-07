import React, { Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CommentsCollection } from '/imports/db/CommentsCollection';
import { Comment } from './Comment';
import { CommentForm } from './CommentForm';
import { LoginForm } from './LoginForm';

// Displays the log in page if the user isn't logged in
// Displays the discussion board once the user is authenticated
export const App = () => {
  const user = useTracker(() => Meteor.user());
  const { comments, isLoading } = useTracker(() => {
    const noDataAvailable = { comments: [] };
    if (!user) {
      return noDataAvailable;
    }
    const handler = Meteor.subscribe('comments');

    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const comments = CommentsCollection.find({}).fetch();

    return { comments };
  });

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
            {isLoading && <p className="loading">Loading...</p>}
            <section className="old-comments">{oldComments}</section>
          </Fragment>
        ) : (
          <LoginForm />
        )}
      </main>

      <footer>
        <p>Made with ❤️ by Timothy Chan in Quebec, Canada</p>
      </footer>
    </div>
  );
};