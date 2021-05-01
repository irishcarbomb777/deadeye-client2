import React from 'react';
import styled from 'styled-components';



export const MQTTTestContainer = (props) => {

  return(
    <>
      <MQTTTestContainerDiv>
        {props.children}
      </MQTTTestContainerDiv>
    </>
  )
}


const MQTTTestContainerDiv = styled.div`
  background: #222222;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`