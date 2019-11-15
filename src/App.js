import React from 'react';
import './App.css';

//Routes
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';



//Pages
import MainPage from './pages/Accueil';
import NotFoundPage from './pages/NotFound';
import ActualitesPage from './pages/Actualites';
import ConcertsPage from './pages/Concerts';
import Discographie from './pages/Discographie';
// import Disco2 from './pages/Disco2';
import Apropos from './pages/Apropos';


//Routes
// import routes from './routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/accueil' render={(props) => <MainPage {...props} toPage='accueil' />}  />
        <Route exact path='/discographie' render={(props) => <Discographie {...props} toPage='discographie'/>} />
        {/* <Route exact path='/disco2' render={(props) => <Disco2 {...props} toPage='discographie'/>} /> */}
        <Route exact path='/concerts' render={(props) => <ConcertsPage {...props} toPage='concerts'/>}/>
        <Route exact path='/actualites' render={(props) => <ActualitesPage {...props} toPage='actualites'/>}/>
        <Route exact path='/apropos' render={(props) => <Apropos {...props} toPage='apropos'/>}/>
        <Route exact path='/' render={(props) => (<MainPage {...props} toPage='accueil'/>)}/>
        <Route exact path='/404' render={(props) => <NotFoundPage {...props} />}/>
        <Redirect to='/404'/>
      </Switch>
    </Router>
  );
}

export default App;
