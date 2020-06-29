import React,{Component} from 'react'
import ItemDivided from './components/content/Details'
import Login from './components/Login'
import AuthService from './services/authService'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

class App extends Component {

  constructor(){
    super();
    this.state ={
      slideStatus : false,
      currentUserToken : undefined,
      userData : [],
      userName : "",
      visibility : false,
      message : ""
    }
    this.slideNav = this.slideNav.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount(){
    const token = AuthService.getCurrentUserToken()
    if (token){
      this.setState({currentUserToken:token})
    }
  }

  slideNav() {
    this.setState({slideStatus : !(this.state.slideStatus)})
  }

  logOut() {
    AuthService.logout()
    window.location.reload()
  }

  successMessage = () => {
    this.setState({visibility : !this.state.visibility, message : "Data saved/updated successfully!"}, () =>{
      setTimeout(() => this.setState({visibility : !this.state.visibility}),3000)
    })
  }

  errorMessage = () => {
    this.setState({visibility : !this.state.visibility, message : "Error saving data!"}, () =>{
      setTimeout(() => this.setState({visibility : !this.state.visibility}),3000)
    })
  }

  render(){
    const currentUserToken = this.state.currentUserToken

    return (
      <Router>
          <Switch>
            {currentUserToken ? 
              (
		<>
                <Route exact path='/'>
                  <Redirect to="/search" />
                </Route>

		<Route path='/search' component={ItemDivided}/>
		
</>):(
            <Route exact path={['/', '/login']} component={Login} />
            )}
          </Switch>
      </Router>
    )
  }
}

export default App
