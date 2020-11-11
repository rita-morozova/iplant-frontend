import React, {Component} from 'react'
import '../App.css'
import {Form} from 'semantic-ui-react'

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
            <Form className='signup-form' onSubmit={(event) => this.handleSubmit(event)}>
                <Form.Input label='Email' type='text' name='email' value={this.state.email} onChange={this.handleChange} width={6}/><br />
               
                <Form.Input label='Name' type='text' name='name' value={this.state.name} onChange={this.handleChange} width={6}/><br />
               
                <Form.Input label='Password' type='password' name='password' value={this.state.password} onChange={this.handleChange} width={6}/><br />
                
                <Form.Input label='Confirm Password' type='password' name='password_confirmation' value={this.state['password_confirmation']} onChange={this.handleChange} width={6}/><br />
                
                <input type='submit' />
            </Form>
        )
    }
}

export default Signup