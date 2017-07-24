import React from 'react';
import ReactDom from 'react-dom';

class Projects extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <p>Title: {this.props.title}</p>
      <p>Description: {this.props.description}</p>
      <p>Deployed on: {this.props.deployDate}</p>
      <p>Link to deployed site: {this.props.deployedLink}</p>
      <p>Link to repository on GitHub: {this.props.repoLink}</p>
    )
  }
}

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
