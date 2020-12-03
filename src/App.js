import Login from './views/Login'
import Form from './views/Form'
import Formingredients from './views/Formingredients'
import Result from './views/Result'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router >
      <div className="App">
        <Route path='/' exact component={Login}></Route>
        <Route path='/form' component={Form}></Route>
        <Route path='/formingredients' component={Formingredients}></Route>
        <Route path='/result' component={Result}></Route>
      </div>
    </Router>
  );
}

export default App;
