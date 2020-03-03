import React from 'react';
import logo from '../logo.svg';
import './App.css'; 
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as fromActions from '../actions'


class App extends React.Component {


constructor(props) {
  super(props)
  this.state={
  coronavirus:['Adbdel','Jérome']
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

componentDidMount = () =>{
  console.log('component did mount')
}

  render() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          {this.state.coronavirus.map((e,i) => (<p key={i}>{e}</p>))}
        <input type='text' name='infected' onChange={(e) => this.handleChange(e)}/>
        <button onClick={() => this.addInfected()}>Ajouter</button>
        <Link to="/Dashboard">Tableau de bord</Link>
        <p>{this.props.values.value}</p>
        <button onClick={() => this.props.addOne()}>Add One</button>
        <input type='text' name='numero' />
      </header>
    </div>
  );
}
}

const mapStateToProps = (state) => ({
     values : state.values
})

const mapDispatchToProps = dispatch => ({
     addOne: () => dispatch(fromActions.addOne()),
     addX: (x) => dispatch(fromActions.addX(x))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
