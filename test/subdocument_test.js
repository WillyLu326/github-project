const assert = require('assert'),
      User = require('../src/user');

describe('Subdocument test', () => {
  it('subdocument ...', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{ title: 'New Title' }]
    });

    joe.save()
      .then(() => User.findOne({ name: 'Joe' }))
      .then(user => {
        assert(user.posts.length === 1);
        assert(user.posts[0].title === 'New Title');
        done();
      });
  });


  it('test add data to subdocument', (done) => {
    const user = new User({
      name: 'Joe',
      posts: []
    });

    user.save()
      .then(User.findOne({ name: 'Joe' }))
      .then(user => {
        user.posts.push({ title: 'New Post' });
        return user.save();
      })
      .then(User.findOne({ name: 'Joe' }))
      .then(user => {
        assert(user.posts[0].title === 'New Post');
        done();
      });
  });


  it('test remove data from subdocument', (done) => {
    const user = new User({
      name: 'Joe',
      posts: [{ title: 'New Post' }]
    });

    user.save()
      .then(() => User.findOne({ name: 'Joe' }))
      .then(user => {
        user.posts[0].remove();
        return user.save();
      })
      .then(() => User.findOne({ name: 'Joe' }))
      .then(user => {
        assert(user.posts.length === 0);
        done();
      });
  });


  it('test virtual type of postCount', (done) => {
    const user = new User({
      name: 'Joe',
      posts: [{ title: 'New Post' }]
    });

    user.save()
      .then(() => User.findOne({ name: 'Joe' }))
      .then(user => {
        assert(user.postCount === 1);
        done();
      });
  });
});
