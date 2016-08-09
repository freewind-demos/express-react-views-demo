import express from 'express';
import {createEngine as reactEngine} from 'express-react-views';

const app = express();

app.set('views', __dirname + '/views');
app.engine('jsx', reactEngine());

app.get('/', function(req, res) {
  res.render('hello.jsx');
});

app.listen(3000, function() {
  console.log('Listening on 3000');
});
