import React from 'react';
import styled from 'styled-components';


export const MainContent = (props) => {

  return(
    <MainContentDiv>
      {props.children}
    </MainContentDiv>
  )

}

const MainContentDiv = styled.div`
  grid-area: content;
  border-top: 1px solid var(--bankroll-lightgray);


`





