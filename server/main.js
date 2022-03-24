import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { CommentsCollection } from '/imports/db/CommentsCollection';

const insertComment = (user, commentText) =>
  CommentsCollection.insert({
    emailId: user.emails[0].address,
    text: commentText
  });

const SEED_EMAIL = 'comet@email.ca';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  if (!Accounts.findUserByEmail(SEED_EMAIL)) {
    Accounts.createUser({
      email: SEED_EMAIL,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByEmail(SEED_EMAIL);
  
  // If the Comments collection is empty, add some data.
  if (CommentsCollection.find().count() === 0) {
    [
      'First Comment',
      'Second Comment',
      'Third Comment',
      'Fourth Comment'
    ].forEach(comment => insertComment(user, comment));
  }
});
