import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, '/client')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/client', 'index.html'));
})

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), function() {
  console.log('listening on port 8000 or another environment.')
});
