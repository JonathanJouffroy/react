import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import Page2 from './views/Page2';
import Contact from './views/Contact';
import Stats from './views/Stats';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';

const Root = () => {
    return(
            <Router>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/page2' component={Page2} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/Stats' component={Stats} />
                </Switch>
            </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
