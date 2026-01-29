const fs = require('fs');
const http = require('http');
const url = require('url');
const path = './posts.json';

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const postId = parsedUrl.query.id;

  // GET all posts
  if (req.url === '/post' && req.method === 'GET' && !postId) {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });

  // GET single post by query param
  } else if (req.url.startsWith('/post') && req.method === 'GET' && postId) {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
      } else {
        const posts = JSON.parse(data);
        const post = posts.find(p => p.id == postId); 
        if (post) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(post));
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Post Not Found' }));
        }
      }
    });

  // POST create new post
  } else if (req.url === '/post' && req.method === 'POST') {
    let postData = '';
    req.on('data', chunk => postData += chunk);
    req.on('end', () => {
      try {
        const newPost = JSON.parse(postData);
        fs.readFile(path, 'utf-8', (err, data) => {
          let posts = [];
          if (!err && data) posts = JSON.parse(data);
          posts.push(newPost);
          fs.writeFile(path, JSON.stringify(posts, null, 2), err => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ message: 'Internal Server Error' }));
            } else {
              res.writeHead(201, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ message: 'Post received' }));
            }
          });
        });
      } catch {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid JSON' }));
      }
    });

  // PUT update post
  } else if (req.url === '/post' && req.method === 'PUT') {
    let postData = '';
    req.on('data', chunk => postData += chunk);
    req.on('end', () => {
      try {
        const updatedPost = JSON.parse(postData);
        fs.readFile(path, 'utf-8', (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Internal Server Error' }));
          } else {
            let posts = JSON.parse(data);
            const index = posts.findIndex(p => p.id == updatedPost.id);
            if (index !== -1) {
              posts[index] = updatedPost;
              fs.writeFile(path, JSON.stringify(posts, null, 2), err => {
                if (err) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ message: 'Internal Server Error' }));
                } else {
                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ message: 'Post updated' }));
                }
              });
            } else {
              res.writeHead(404, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ message: 'Post Not Found' }));
            }
          }
        });
      } catch {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid JSON' }));
      }
    });

  // DELETE post
  } else if (req.url === '/post' && req.method === 'DELETE') {
    let postData = '';
    req.on('data', chunk => postData += chunk);
    req.on('end', () => {
      try {
        const deletePost = JSON.parse(postData);
        fs.readFile(path, 'utf-8', (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Internal Server Error' }));
          } else {
            let posts = JSON.parse(data);
            const initialLength = posts.length;
            posts = posts.filter(p => p.id != deletePost.id);
            if (posts.length === initialLength) {
              res.writeHead(404, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ message: 'Post Not Found' }));
            } else {
              fs.writeFile(path, JSON.stringify(posts, null, 2), err => {
                if (err) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ message: 'Internal Server Error' }));
                } else {
                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ message: 'Post deleted' }));
                }
              });
            }
          }
        });
      } catch {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid JSON' }));
      }
    });

  // Fallback for unknown routes
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

server.listen(8000, () => console.log('Server running on 3000'));
