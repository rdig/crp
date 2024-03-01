import http from 'http';
import fs from 'fs';

const fileTypes = {
  'html': 'text/html',
  'css': 'text/css',
  'js': 'text/javascript',
  'png': 'image/png',
  'jpg': 'image/jpg',
  'ico': 'image/x-icon',
};

String.prototype.escape = function () {
  var tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };
  return this.replace(/[&<>]/g, function (tag) {
    return tagsToReplace[tag] || tag;
  });
};

const requestListener = (req, res) => {
  console.log('request url:', req.url);

  const filename = req.url === '/' ? './public/index.html' : `./public${req.url}`;

  const fileType = fileTypes[filename.split('.')[2]] || fileTypes['html'];
  fs.promises.readFile(filename)
    .then(contents => {
      // res.setHeader("Content-Type", fileType);
      // res.writeHead(200);
      // res.send(contents);
      res.writeHead(200, { 'Content-Type': fileType });
      res.write(contents);
      res.end();
    })
    .catch(err => {
      // res.writeHead(500);
      // res.send(err);
      // return;
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.write(JSON.stringify(err));
      res.end();
    });
};

const server = http.createServer(requestListener);
server.listen(8080, 'localhost', () => {
  console.log(`Server is running on http://localhost:8080`);
});
