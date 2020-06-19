import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  /* overflow-y: scroll; */
  box-sizing: border-box;
  background: lightblue;
  padding: 3%;
  border-radius: 20px;
  width: 70%;
  height: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const SubmitButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
  flex-basis: 100%;
`
const SubmitButton = styled.input`
  padding: 1rem 2rem;
  border-radius: 20px;
`

const PizzaForm = (props) => {

  return (
    <StyledForm>
      <label>Name:&nbsp;&nbsp;<input type="text" name="name" value="" placeholder="Please enter your name..."/ ></label>

      <label>Size:&nbsp;&nbsp;
        <select name="pizzaSize">
          <option value="">Please select a size</option>
          <option value="smallest">Smallest!</option>
          <option value="small">Small</option>
          <option value="regular">Regular</option>
          <option value="large">Large</option>
          <option value="largest">Largest!</option>
        </select>
      </label>

      <label>Toppings:<br />
        <label><input name="pepperoni" type="checkbox" />Pepperoni</label><br />
        <label><input name="sausage" type="checkbox" />Sausage</label><br />
        <label><input name="extra-cheese" type="checkbox" />Extra Cheese</label><br />
        <label><input name="pineapple" type="checkbox" />Pineapple</label>
      </label>

      <SubmitButtonContainer>
        <SubmitButton type="submit"/>
      </SubmitButtonContainer>
    </StyledForm>
  )
}

export default PizzaForm