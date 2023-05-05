import Styled from 'styled-components'

export const NormalContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  
  height: 100vh;
  width: 100vw;

  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};

  padding: 30px;


@media all and (max-width: 767px){
    width: 100vw;
}

`
export const dd = Styled.p``
