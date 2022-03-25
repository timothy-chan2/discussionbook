import { check } from 'meteor/check';
import { CommentsCollection } from '/imports/db/CommentsCollection';

Meteor.methods({
  'comments.insert'({ text, user }) {
    check(text, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    CommentsCollection.insert({
      emailId: user.emails[0].address,
      text: text.trim()
    });
  }
});