import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import styled from 'styled-components'
import PizzaForm from './PizzaForm'


const GeneralStylesDiv = styled.div`
  a {
    text-decoration: none;
    color: black;
    padding: .6rem 1.6rem;
    background: lightgoldenrodyellow;
    border-radius: 10px;
  }
`
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20vh;
  background: tan;
`
const RightNav = styled.div`
  flex-basis: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const BodyDiv = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    border: 1px solid black;
    margin-bottom: 5%;
  }
`

const App = () => {
  return (
    <Router>
      <GeneralStylesDiv>
        <header>
          <StyledNav>
            <div>
              <h1>Lambda Eats</h1>
              <p>Come for the pizza. Stay for the code!</p>
            </div>
            <RightNav>
              <Link to="/">Home</Link>
              <Link to="/pizza">Pizza</Link>
            </RightNav>
          </StyledNav>

          <Switch>
          <Route path="/pizza" render={() => (
            <BodyDiv>
              <PizzaForm />
            </BodyDiv>
          )} />
          <Route path="/" render={() => (
            <BodyDiv>
              <p>Come enjoy some pizza with us!</p>
              <Link to="/pizza">Pizza!</Link>
            </BodyDiv>
          )} />
          </Switch>


        </header>
      </GeneralStylesDiv>
    </Router>
  );
};
export default App;
