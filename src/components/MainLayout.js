import React from 'react';
import styled from 'styled-components';

export const MainLayout = (props) => {

  return(
    <MainLayoutDiv>
      {props.children}
    </MainLayoutDiv>
  )
}

const MainLayoutDiv = styled.div`
  display: grid;
  grid-template-areas:
    "header  header"
    "content content";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 85px 1fr;
  min-height: 100vh;
  width: 100%;
`;