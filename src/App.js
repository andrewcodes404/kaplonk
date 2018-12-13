import React, { Component } from 'react';
import { db } from './firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { users: null }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    db.ref('user').once('value')
      .then((snapshot) => {
        const snap = snapshot.val()
        let arrayOfUsers = []
        Object.keys(snap).map((key) => {
          const name = snap[key].name
          arrayOfUsers.push(name)
          return arrayOfUsers
        })

        this.setState({
          users: arrayOfUsers
        })
      });
  }

  render() {
    if (!this.state.users) return null
    return (
      <div className="App">
        <h1>kaplunk...</h1>
        <div>
          <h1>yes users</h1>
          {this.state.users.map((el, index) => (<p key={index}>{el}</p>))}
        </div>
      </div>
    );
  }
}

export default App;
