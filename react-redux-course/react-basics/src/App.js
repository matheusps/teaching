import React, { Component } from 'react';
import List from './components/List';
import AddForm from './components/AddForm';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.addToList = this.addToList.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.state = {
      itens: []
    }
  }

  componentDidMount() {
    alert("Hey fellas, welcome to react basics!")
  }

  addToList (name) {
    this.setState({
      itens: [...this.state.itens, name]
    });
  }

  removeItem (item) {
    this.setState({
      itens: this.state.itens.filter(el => el !== item)
    })
  }

  render() {
    return (
      <div className="App">
        <AddForm addToList={ this.addToList } />
        <List removeItem={ this.removeItem } itens={ this.state.itens }/>
      </div>
    );
  }
}

export default App;
