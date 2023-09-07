import logo from './logo.svg';
import './App.css';
import Ciel from './Images/logo-fonce'
import {Container,Col, Row} from "react-bootstrap";
import TaxeQC from "./Components/TaxeQC";


function App() {
  return (
    <div className="App-header">
      <Container>
        <Row>
          <Col><Ciel/></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col><h1>Calcul des taxes</h1></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col><TaxeQC/></Col>
          <Col></Col>
        </Row>
      </Container>

      <p>© Cégep Limoilou - {new Date().getFullYear()}</p>
    </div>
  );
}

export default App;
