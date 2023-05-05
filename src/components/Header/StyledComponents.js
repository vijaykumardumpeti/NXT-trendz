import Styled from 'styled-components'

export const PopupContainer = Styled.div`



  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;

  padding: 30px;

  

  min-height: 80vh;
  max-height: 100vh;
  width: 400px;

  margin-right: 170px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

`
export const PopupContainerLogout = Styled.div`

  border-radius: 10px;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};

    height: 220px;
    width: 360px;
    padding: 10px;

  margin-right: 1400px;
  margin-top: 310px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media all and (max-width: 767px){


    margin-right: 320px;
    margin-top: 200px;
  }

`

export const Button = Styled.button`
     color: ${props => (props.isDark ? '#ffffff' : '#181818')};   
`

export const UnorderedListContainer = Styled.ul`
list-style-type: none;

margin-right: 50px;
margin-top: 100px;

width:310px;

`
export const Para = Styled.p`
    font-family: "roboto";
    margin-left: 5px;
    width: ${props => props.width};
    `

export const ListItem = Styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    max-width: 320px;

    margin-left: -40px;
    padding: 10px;
    line-height: 1px;
`
export const ButtonsContainerPop = Styled.div`

  
  
    color: ${props => (props.isDark ? '#ffffff' : '#231f20')};

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 230px;
`
