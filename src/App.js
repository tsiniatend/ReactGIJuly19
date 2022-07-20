import { Component } from 'react';  
import BasicInfo from './components/BasicInfo';

//call our people 
let people = [
  {
    name: 'Saitima',
    phone: '3450392934',
    age: 20,
    favoriteFood: 'sourdough'
  },
  {
    name: 'Jesus Christ',
    phone: '999999999',
    age: 30,
    favoriteFood: 'racoons'
  },
  {
    name: 'Jane',
    phone: '123456789',
    age: 48,
    favoriteFood: 'dragon meat'
  },
  {
    name: 'BigBoss',
    phone: '4950334453',
    age: 99,
    favoriteFood: 'mudcake'
  },
  {
    name: 'Naruto',
    phone: '123456789',
    age: 16,
    favoriteFood: 'pie'
  }
]

function iteratePeople(arr) {
  return arr.map((person) => {
    return <BasicInfo person={person} />
  }
  )
}

export default class App extends Component {  
  // easy set our properties 
  constructor(props){  
    super(props);  
    this.state = {
        person: {
        }
    }
  }  
  // very easy/ medium render in order to display poeple
    render() {
      return (iteratePeople(people))
  }
}


