import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Button = ({label, className, onClick}) => {

  return(
    <>
      <ButtonBtn
        className={className} 
        onClick={onClick}
        whileHover={{ scale: 0.98 }}
        whileTap={{ scale: 0.8 }}>
          {label}
      </ButtonBtn>
    </>
  )
}

const ButtonBtn = styled(motion.button)`
  background: #FFFFFF;
  border-radius: 6px;
  border: 1px solid #FFFFFF;
  outline: none;
  width: 100%;
  height: 50px;
  color: #000000;
  box-shadow : 0px 3px 10px rgba(119, 119, 119, 0.2);
  font-family: prompt, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 28px;
  margin: 5px 5px 5px 5px;
  &:hover{
    background: var(--bankroll-gold);
    border: 1px solid var(--bankroll-gold);
  }
`;