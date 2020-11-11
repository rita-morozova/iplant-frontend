import React, {Component} from 'react'

class Signup extends Component {
    state = {
        email: '',
        name: '',
        password: '',
        ['password_confirmation']: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state, '/users')
    }

    render(){
        return(
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label htmlFor='email'>Email: </label>
                <input type='text' name='email' value={this.state.email} onChange={this.handleChange}/><br />
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/><br />
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br />
                <label htmlFor='password_confirmation'>Confirm Password: </label>
                <input type='password' name='password_confirmation' value={this.state['password_confirmation']} onChange={this.handleChange}/><br />
                <input type='submit' />
            </form>
        )
    }
}

export default Signup