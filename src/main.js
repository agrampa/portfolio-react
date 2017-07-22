import React from 'react';
import Reactdom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <header>
        <h1>Allie Grampa Portfolio</h1>
      </header>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
