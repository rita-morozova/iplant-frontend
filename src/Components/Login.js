import React, {Component} from 'react'
import {Form} from 'semantic-ui-react'
import '../App.css'

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
           <Form className='login-form' onSubmit={(event) => this.handleSubmit(event)}>
                <Form.Input label='Email' type='text' name='email' value={this.state.email} onChange={this.handleChange} width={6}/><br />

                <Form.Input label='Password' type='password' name='password' value={this.state.password} onChange={this.handleChange} width={6}/><br />

                <input type='submit' /> 
            </Form>
           
        )
    }
}

export default Login
