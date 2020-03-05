import React from 'react';
import logo from '../logo.svg';
import './App.css'; 
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as fromActions from '../actions';

// Import Component
import User from '../component/user.component'



class App extends React.Component {


constructor(props) {
  super(props)
  this.state={
  coronavirus:['Abdel','Jérome']
   }
}

handleChange = (e) => {
  let name = e.target.name
  this.setState({
    [name]: e.target.value
  })
}

addInfected = (e) =>{
  this.setState({
    coronavirus: [...this.state.coronavirus, this.state.infected]
  })
}

componentDidMount = async () =>{
  console.log('component did mount')
  await this.props.getUsers()
}

  render() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {this.state.coronavirus.map((e,i) => (<p key={i}>{e}</p>))}
        <input type='text' name='infected' onChange={(e) => this.handleChange(e)}/>
        <button onClick={() => this.addInfected()}>Ajouter</button>
        <Link to="/Home">Tableau de bord</Link>
        <p>{this.props.values}</p>
        <button onClick={() => this.props.addOne()}>Add One</button>
        <input type='text' name='numero' />
        { this.props.users.map((e,i) => <User text={e.name}></User>) }
      </header>
    </div>
  );
}
}

const mapStateToProps = (state) => ({
     values : state.valuesReducer.value,
     users: state.usersReducer.users
})

const mapDispatchToProps = dispatch => ({
     addOne: () => dispatch(fromActions.addOne()),
     addX: (x) => dispatch(fromActions.addX(x)),
     getUsers: () => dispatch(fromActions.getUsersSaga())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
