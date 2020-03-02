import React from 'react';
import {Link} from 'react-router-dom';


class Page2 extends React.Component {


constructor(props) {
  super(props)
}


  render() {

  return (
    <div>
        <Link to='/'>Accueil</Link>
    </div>
  );
}
}
export default Page2;
