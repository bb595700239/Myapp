import sub from './sub';
// require('./index.css');
import './main.scss';

import './plugin.js';

var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
document.body.appendChild(app);

$('body').append('<p>this is jquery setDom 2</p>')
$('p').greenify();
