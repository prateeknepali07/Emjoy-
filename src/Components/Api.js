import React, { Component } from 'react';
import Axios from 'axios';

class Api extends Component {
  componentDidMount() {
    Axios.get('https://developers.zomato.com/api/v2.1/categories', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'user-key': '5571f7b5886756df5e0b7df84b32a535'
      }
    })
      .then(res => {
        const persons = res.data;
        console.log(persons)
      }).catch(err => {
        console.log('error found')
      })
  }
  render() {
    return (
      <div>
      </div>

    )
  }
}

export default Api;