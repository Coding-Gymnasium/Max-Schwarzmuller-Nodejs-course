const { validationResult } = require('express-validator/check');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'First Post',
        content: 'This is the first post',
        imageUrl: '../images/nico.png',
        creator: {
          name: 'Nico',
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation failed, entered data is incorrect.',
      errros: errors.array(),
    });
  }

  const title = req.body.title;
  const content = req.body.content;
  // TODO: create db
  res.status(201).json({
    message: 'Post created successfully',
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: 'Nico' },
      createdAt: new Date(),
    },
  });
};
