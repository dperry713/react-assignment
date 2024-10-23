import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Alex',
            isEditing: false,
            hobbies: ['Reading', 'Cycling', 'Cooking']
        };
        this.changeName = this.changeName.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    changeName() {
        this.setState({ name: 'Charlie' });
    }

    toggleEditMode() {
        this.setState(prevState => ({ isEditing: !prevState.isEditing }));
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                {this.state.isEditing ? (
                    <input 
                        type="text" 
                        value={this.state.name} 
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                ) : (
                    <p>Name: {this.state.name}</p>
                )}
                <button onClick={this.changeName}>Change Name to Charlie</button>
                <button onClick={this.toggleEditMode}>
                    {this.state.isEditing ? 'View Mode' : 'Edit Mode'}
                </button>
                <h2>Hobbies:</h2>
                <ul>
                    {this.state.hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default UserProfile;
