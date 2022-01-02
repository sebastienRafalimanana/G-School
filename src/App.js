import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import './style/App.css';
import Dash from './components/Dash';
import Reinscription from './components/Reinscription';

function App() {
    return ( <BrowserRouter  className='main'>
        <div className = "App" >

            <header className = "header" > <Header/> </header>
        </div>
        <div className="content">
          <nav className="nav" > < Nav /> </nav>

          <Route exact path = "/" component={Dash} />
          <Route strict path = "/Reinscription"  component={Reinscription}/>
          <Route strict path = "/Eleves" />
          <Route strict path = "/Ecolages"/>
          <Route strict path = "/Renumeration" />
          <Route strict path = "/Cotisation" />
          <Route strict path = "/Rappel" />
          <Route strict path = "/Logements" />
          <Route strict path = "/Journal" />

        </div>
        </BrowserRouter>


    );
}

export default App;
