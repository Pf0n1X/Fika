import logo from './logo.svg';
import img_logo from './img/fika_logo.png';
import './App.css';
import Home from './routes/Home';
import Chat from './routes/Chat';
import Article from './routes/Article';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './styles/App.css';
import Login1 from './components/Login1';
import Login2 from './components/Login2';
import Login3 from './components/Login3';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <div class="bg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          <img className="logo" src={img_logo} />
        </div>
        <div class="container">
          <div className="routes">
            <Router>
              <Switch>
                <Route path="/log1">
                  <Login1 />
                </Route>
                <Route path="/log2">
                  <Login2 />
                </Route>
                <Route path="/log3">
                  <Login3 />
                </Route>
                <Route path="/chat">
                  <Chat />
                </Route>
                <Route path="/article">
                  <Article />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
