const express = require('express');

const { exec } = require('child_process');

const app = express();

const routes = [
  { name: 'portfolio', repo: '/var/www/evanmoses.com/html/portfolio', secret: process.env.PORTFOLIO_SECRET },
  { name: 'realtimepre', repo: '/var/www/evanmoses.com/html/realtimepre', secret: process.env.REALTIME_SECRET },
  { name: 'bogglesolutionfinder', repo: '/var/www/evanmoses.com/html/bogglesolutionfinder', secret: process.env.BOGGLE_SECRET },
  { name: 'strategytoolkit', repo: 'var/www/evanmoses.com/html/strategytoolkit', secret: process.env.TOOLKIT_SECRET },
];

app.use(express.json()); // Parse json bodies

app.get('/', (req, res) => {
  res.send('basic route is working');
});

// app.post('/:path', validateSecret, (req, res) => {
//   const { path } = req.params;
//   const redeployRoute = routes.filter((el) => el.name === path);
//   exec(`cd ${redeployRoute.repo} && git pull`, (err, stdout, stderr) => {
//     if (err) {
//       // some err occurred
//       console.error(err);
//       res.status(403).send(err);
//     } else {
//       // the *entire* stdout and stderr (buffered)
//       console.log(`stdout: ${stdout}`);
//       console.log(`stderr: ${stderr}`);
//       res.status(200).send(`Auto deploy completed ${stdout} ${stderr}`);
//     }
//   });
// });
//
// function validateSecret(req, res, next) {
// /**
//  * Passing an argument to next() in middleware
//  * throws an error to the error handler automatically
//  */
//   const { path } = req.params;
//   const redeployRoute = routes.filter((el) => el.name === path);
//
//   const payload = JSON.stringify(req.body);
//   if (!payload) {
//     return next('Request body empty');
//   }
//   const sig = `sha1=${
//     crypto
//       .createHmac('sha1', redeployRoute.secret)
//       .update(payload)
//       .digest('hex')}`;
//   if (req.headers['x-hub-signature'] == sig) {
//     return next();
//   }
//   return next('Signatures did not match');
// }

let port = process.env.PORT;
// port = ''
if (port == null || port === '') {
  port = 8000;
}

app.listen(port, () => {
  console.log('server started successfully');
});
