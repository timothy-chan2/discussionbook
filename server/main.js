import { Meteor } from 'meteor/meteor';
import { CommentsCollection } from '/imports/db/CommentsCollection';

const insertComment = (email, commentText) =>
  CommentsCollection.insert({
    user: email,
    text: commentText
  });

Meteor.startup(() => {
  // If the Comments collection is empty, add some data.
  if (CommentsCollection.find().count() === 0) {
    [
      {user: '1@email.ca', text: 'First Comment'},
      {user: '2@email.ca',text: 'Second Comment'},
      {user: '3@email.ca',text: 'Third Comment'},
      {user: '1@email.ca',text: 'Fourth Comment'}
    ].forEach(comment => insertComment(comment.user, comment.text));
  }
});
