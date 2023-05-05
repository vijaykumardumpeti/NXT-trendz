import Styled from 'styled-components'

export const BgContainer = Styled.div`


  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  background-size: cover;

  min-height: 120vh;

  width: 100vw;



background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
color: ${props => (props.isDark ? '#ffffff' : '#181818')};


`

export const Button = Styled.div`

    
    color: ${props => (props.isDark ? '#ffffff' : '#181818')};

`

export const Para = Styled.p``

export const NormalContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  
  height: 60vh;
  width: 70vw;

`
