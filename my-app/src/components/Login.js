import React,{Component} from 'react';
import AuthService from '../services/authService';
import Loginbox from './../css/Loginbox';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName : '',
            password : '',
            errorMessage : '',
            userNameError : '',
            passwordError : ''
            
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    onInputChange(e){
        e.preventDefault()
        const { name, value } = e.target
        this.setState({[name]:value})
    }

    validateLoginForm = () =>{
        let isError = false

        const errors = {
            userNameError:"",
            passwordError:""
        }

        if (this.state.userName.length < 5) {
            isError = true
            errors.userNameError =  "Username should be more than 5 characters"
        }

        if (this.state.password.length < 8) {
            isError = true
            errors.passwordError = "Password should be more than 8 characters"
        }

        if (isError) {
            this.setState({...this.state, ...errors})
        }

        return isError
    }

    handleLogin(e){
        e.preventDefault()
        const err = this.validateLoginForm()
        if (err) {
            this.setState({errorMessage:"Error!"})
        }
        else{
            this.setState({userNameError:"",passwordError:"",errorMessage:""})
            if(AuthService.login(this.state.userName, this.state.password))
            {
                    this.props.history.push('/')
		    window.location.reload()
                }
            else{
                this.setState({errorMessage : "Wrong username/password!"})
            }
        }

    }

    render(){
        return(
           <Loginbox>
                <div>
                    <form onSubmit={this.handleLogin}>
                        <p>{this.state.errorMessage}</p>
                        <h3>Login To Enter</h3>
                        <input type='text' name='userName' onChange={this.onInputChange} placeholder='Enter username'></input>
                        {this.state.userName.length >= 0 && <span className='error'>{this.state.userNameError}</span>}
                        <input type='password' name='password' onChange={this.onInputChange}  placeholder='Enter password'></input>
                        {this.state.password.length >= 0 && <span className='error'>{this.state.passwordError}</span>}
                        <button type='submit' onClick={this.checkState}>Submit</button>
                            <a href='www.google.com'>Forgot Password?</a>
                    </form>
                </div>
            </Loginbox>
        )
    }
}

export default Login