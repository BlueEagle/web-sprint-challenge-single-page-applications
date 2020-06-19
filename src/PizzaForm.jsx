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
    </StyledForm>
  )
}

export default PizzaForm