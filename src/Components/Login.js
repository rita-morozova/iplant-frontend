import React, {Component} from 'react'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state, '/sessions')
    }

    render(){
        return(
           <form onSubmit={(event) => this.handleSubmit(event)}>
                <label htmlFor='email'>Email: </label>
                <input type='text' name='email' value={this.state.email} onChange={this.handleChange}/><br />
                <label htmlFor='password'>Password: </label>
                <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br />
                <input type='submit' /> 
            </form>
           
        )
    }
}

export default Login
