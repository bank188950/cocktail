import React,{Component} from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss'
import Home from './home';
import Search from './search';
import Detail from './detail';
import Favorite from './favorite';

class App extends Component {

  state = {
    fave: []
  }

  handleSwitchFave = (event,obj) => {
    
    event.preventDefault();

    const faveId = this.state.fave.map(f => f.idDrink);
    const id = obj.idDrink;
    
    let fave = [...this.state.fave];
    let faveIndex = faveId.indexOf(id);
    
    if(faveIndex < 0) {
      fave.push(obj);
    } else {
      fave.splice(faveIndex, 1);
    }

    this.setState({fave});
    localStorage.setItem('fave', JSON.stringify(fave));

  }

  componentDidMount = () => {

    var getobj = localStorage.getItem('fave');
    if(getobj === null) {
      getobj = [];
    } else {
      getobj = JSON.parse(getobj);
      this.setState({fave:[...getobj]});
    }

    //localStorage.clear();
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={(routeProps)=> (<Home {...routeProps} fave={this.state.fave} switchFave={this.handleSwitchFave} />)} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/favorite" render={(routeProps)=> (<Favorite {...routeProps} fave={this.state.fave} switchFave={this.handleSwitchFave} />)} />
        <Route exact path="/search/:type/:keyword" render={(routeProps)=> (<Search {...routeProps} fave={this.state.fave} switchFave={this.handleSwitchFave} />)} />
        <Redirect to="/" />
      </BrowserRouter>
    );
  }

}

export default App;

