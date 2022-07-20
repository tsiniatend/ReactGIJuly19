import { Component } from 'react';  

// grabbing component from react package
export default class BasicInfo extends Component {
    constructor(props) {
        super(props);
        // lay out past props
        this.state = {
            person: {
                name: this.props.person.name,
                phone: this.props.person.phone,
                age: this.props.person.age,
                favoriteFood: this.props.person.favoriteFood
            }
        }
    }

    // return in our html
    render() {
        return (
            <div>
                <p>Name: {this.state.person.name}</p>
                <p>Phone: {this.state.person.phone}</p>
                <p>Age: {this.state.person.age}</p>
                <p>Favorite Food: {this.state.person.favoriteFood}</p>
            </div>
        )
    }
}
