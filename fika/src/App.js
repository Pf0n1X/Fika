import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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
  );
}

export default App;
