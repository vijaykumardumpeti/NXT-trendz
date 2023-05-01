import Styled from 'styled-components'

export const HomeContainer = Styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

   
     
`

export const DisplayContainer = Styled.div`
  
     width: 100vw;

    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

`

export const PremiumContainer = Styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;

  width: 80vw;

  min-height: 250px;
  max-height: 250px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start; 

`
export const ImagePremium = Styled.img`
    height: 40px;

    @media all and (max-width: 767px){
        height: 20px;
    }
`
export const Para = Styled.p`
    font-size: 22px;

    @media all and (max-width: 767px){
        font-size: 12px;
        width: 140px;
        font-size: 13px;
        font-weight: 450;
    }
   
 
`
export const ButtonGetIt = Styled.button`
  border: 2px solid #00306e;
  color: #1e293b;
  height: 35px;
  width: 100px;
  border-radius: 4px;
  background-color: white;
  font-weight: bold;
    margin-top: 20px;

    @media all and (max-width: 767px){
        height: 30px;
        width: 90px;
        font-size: 10px;
    }
`

export const ResultContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start; 

  padding: 20px;
  min-height: 50vh;
  width: 85vw;
  margin-left:-10px;

  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};

    @media all and (max-width: 767px){
     margin-top: -80px;
      width: 95vw;
  }

`

export const InputContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 

  color: ${props => (props.isDark ? '#ffffff' : '#181818')};

  
  @media all and (max-width: 767px){
      width: 310px;
      margin-left: -15px;
  }
`
export const InputElement = Styled.input`
    height: 30px;
    width: 370px;
    outline: none;
    color: ${props => (props.isDark ? '#ffffff' : '#181818')};
    background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
    border-color: ${props => (props.isDark ? '#ffffff' : '#181818')};
    
`

export const IconContainer = Styled.div`

    background-color:  #cccccc;
    border: 1px solid #475569;
    height: 30px;
    width: 55px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;  
    border-left: 0px none transparent;

    color: ${props => (props.isDark ? '#ffffff' : '#181818')};
    background-color: ${props => (props.isDark ? '#231f20' : '#606060')};
    border-color: ${props => (props.isDark ? '#ffffff' : '#181818')};

`

export const NormalContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  
  height: 60vh;
  width: 70vw;

`
