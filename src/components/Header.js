import React from 'react';
import styled from 'styled-components';



export const Header = (props) => {
  
  return (
    <HeaderDiv>
      {props.children}
    </HeaderDiv>
  )
}


const HeaderDiv = styled.div`
  grid-area: header;
  background: #000000;


`

