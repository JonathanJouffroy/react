import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import Page2 from './views/Page2';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const Root = () => {
    return(
            <Router>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/page2' component={Page2} />
                </Switch>
            </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
