import React from 'react';
import { Comment } from './Comment';

const comments = [
  {_id: 1, user: '1@email.ca', text: 'First Comment'},
  {_id: 2, user: '2@email.ca',text: 'Second Comment'},
  {_id: 3, user: '3@email.ca',text: 'Third Comment'},
];

const oldComments = comments.map(comment => (
  <Comment
    key={comment._id}
    comment={comment}
  />
));

export const App = () => (
  <div>
    <h1>Discussionbook</h1>

    <article>{oldComments}</article>
  </div>
);
