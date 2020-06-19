import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import styled from 'styled-components'
import PizzaForm from './PizzaForm'
import Order from './Order'
import * as Yup from 'yup'
import schema from './schema'


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
  box-sizing: border-box;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  padding: 2rem 0;

  a {
    border: 1px solid black;
    margin-bottom: 5%;
  }
`

const initialFormValues = {
  name: '',
  size: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    extraCheese: false,
    pineapple: false
  },
  specialInstructions: ''
}
const initialOrderList = []
const initialErrorList = {
  name: '',
  size: '',
  specialInstructions: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [orderList, setOrderList] = useState(initialOrderList)
  const [errorList, setErrorList] = useState(initialErrorList)
  const [disabled, setDisabled] = useState(true)

  const onTextChange = evt => {
    const { name, value } = evt.target

    Yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrorList({
          ...errorList,
          [name]: ''
        })
      })
      .catch(err => {
        setErrorList({
          ...errorList,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onChecked = evt => {
    const { name, checked } = evt.target
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    setOrderList([
      ...orderList,
      formValues
    ])
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

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
              <Link to="/pizza" name="pizzaButton">Pizza</Link>
              <Link to="/orders" name="ordersButton">Orders</Link>
            </RightNav>
          </StyledNav>

          <Switch>
          <Route path="/orders" render={() => (
            <BodyDiv>
              {
                orderList.map(order => (
                  <Order order={order} />
                ))
              }
            </BodyDiv>
          )} />
          <Route path="/pizza" render={() => (
            <BodyDiv>
              <PizzaForm values={formValues} handlers={[onTextChange, onChecked, onSubmit]} errors={errorList} disabled={disabled} />
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
