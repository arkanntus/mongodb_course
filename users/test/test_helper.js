const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //ES6

before((done) => {
  mongoose.connect('mongodb://localhost/users_test', { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

beforeEach((done) => {
  const { users, comments, blogPosts} = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() =>{
      blogPosts.drop(() => {
        // Ready to run the next test!
        done();
      });
    });
  });
})