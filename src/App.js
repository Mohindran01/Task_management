import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Button, Alert, Row, Col} from 'react-bootstrap';
import LeftSide from './components/LeftSide';
import Login from './components/login';
import WelcomeComponent from './components/WelcomeComponent';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={< Login />}></Route>
<Route exact path='/welcome' element={< WelcomeComponent />}></Route>
</Routes>
{/* <Route exact path='/contact' element={< Contact />}></Route> */}

      {/* <Row className="landing"> */}
        {/* <Col ><LeftSide/></Col> */}
        
        {/* <Col ><RightSide /></Col> */}
      {/* </Row> */}
      {/* <WelcomeComponent/> */}
    </div>
  );
}

export default App;
