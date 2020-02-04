import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/App/App';
import Layout from "./layout"
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('root'));
||||||| merged common ancestors
ReactDOM.render(<App />, document.getElementById('root'));

=======
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Layout />, document.getElementById('root'));

>>>>>>> 6228be1c0e22300b4a722c78afa03d98a25dd7f6
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
