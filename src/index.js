import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import Contact from './views/Contact';
import Dashboard from './views/Dashboard';
import Stats from './views/Stats';
import Home from './views/Home';
import store, { history} from './store/configureStore';
import { Provider } from 'react-redux';
import { saveState } from './store/localStorage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Products from './views/Products';

store.subscribe(() =>{
    saveState(store.getState())
})


const Root = () => {
    return(
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/Dashboard' component={Dashboard} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/Stats' component={Stats} />
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/Products' component={Products}/>
                </Switch>
            </Router>
        </Provider>
    )
}

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
