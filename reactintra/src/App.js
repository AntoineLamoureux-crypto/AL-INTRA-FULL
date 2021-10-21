import './App.css';
import UserLogin from './components/UserLogin'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserList from './components/UserList';
import UserSignUp from './components/UserSignUp';

function App() {
  return (
    <Router>
    <div className="App">  
      <Switch> 
        <Route path="/" exact component={UserLogin}/>
        <Route path="/userList" exact component={UserList}/>
        <Route path="/home/:username" exact component={Home}/>
        <Route path="/userSignUp" exact component={UserSignUp}/>
      </Switch>           
    </div>
  </Router>
  );
}

export default App;
