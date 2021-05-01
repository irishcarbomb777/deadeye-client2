import React from 'react';
import styled from 'styled-components';

export const FormInputField = ({id, placeholder, type, handleChange}) => {

  return (
    <InputFieldDiv>
      <InputField 
        id={id}
        placeholder={placeholder} 
        type={type}
        onChange={handleChange}/>
    </InputFieldDiv>
  )
}

const InputFieldDiv = styled.div`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #FFFFFF;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: row;
`;

const InputField = styled.input`
  width: 100%;
  font-size: 24px;
  border: none;
  background: #333333;
`;