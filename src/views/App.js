import React from 'react';
import logo from '../logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

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
        <Link to="/Dashboard">Learn React</Link>
      </header>
    </div>
  );
}
}
export default App;
