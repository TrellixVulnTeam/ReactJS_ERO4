import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/style.scss';
import App from './components/App'

var temp = <div>
    <App/>
</div>

ReactDOM.render(temp, document.getElementById('root'));