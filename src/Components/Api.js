import React, { Component } from 'react';

import Axios from 'axios';

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }
  }

  componentDidMount = () => {
    Axios.get('https://developers.zomato.com/api/v2.1/categories', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'user-key': '5571f7b5886756df5e0b7df84b32a535'
      }
    })
      .then(res => {
        const persons = res.data.categories;
        console.log(persons);
        this.setState({ persons });
      }).catch(err => {
        console.log('error found')
      })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.persons.map(person => <li key={person.categories.id}>{person.categories.name}</li>)}
        </ul>
      </div>

    )
  }
}

export default Api;