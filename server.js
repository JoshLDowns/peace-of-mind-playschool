require('dotenv').config();
const express = require('express')
const path = require('path')
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

__dirname = path.resolve(path.dirname(''));

app.use(express.static(path.join(__dirname, '/client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/newContact', getMessage);

async function getMessage(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'inspireme1980@yahoo.com',
    from: email,
    subject: 'New Contact from Peace of Mind Playschool Mail',
    text: `${message}\nFrom: ${name}`
  };
  sgMail.send(msg);
  console.log('Sent!')
  res.type('application/json').send(JSON.stringify({status: 'thank-you'}))
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(port, () => { console.log(`Listening on port: ${port}`) })