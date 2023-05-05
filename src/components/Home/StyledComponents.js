import Styled from 'styled-components'

export const HomeContainer = Styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;


    background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};    
`
export const DisplayContainer = Styled.div`
  
     width: 80vw;

    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

`

export const PremiumContainer = Styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;

  width: 90vw;

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

  margin-bottom: 20px;
  

  color: ${props => (props.isDark ? '#ffffff' : '#181818')};

  
  @media all and (max-width: 767px){
      width: 320px;
    
      margin-right: 150px;
     
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

export const Container = Styled.div`


    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start; 
  



`

export const TrendingContainer = Styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; 


    
    
`
export const TrendingNav = Styled.nav`
    width: 80vw;
    padding: 20px;
   

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center; 


    background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
    color: ${props => (props.isDark ? '#ffffff' : '#181818')};


    @media all and (max-width: 767px){
        width: 100vw;
    }

`
export const Heading = Styled.h1`
    color: ${props => (props.isDark ? '#ffffff' : '#181818')};
    font-family: 'roboto';
`
export const ImageContainer = Styled.div`

    

    height: 65px;
    width: 65px;
    border-radius: 35px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    margin-right: 15px;
    font-size: 26px;
    color: red;

    background-color: ${props => (props.isDark ? '#0f0f0f' : '#cbd5e1')};
    


`
export const VideosContainer = Styled.ul`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start; 
    padding: 20px;
    flex-wrap: wrap;

    background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
    color: ${props => (props.isDark ? '#ffffff' : '#181818')};
    width: 80vw;
    margin-top: -10px;
    margin-left: 20px;

    height: 60vh;
    overflow: auto;

    padding-left: 30px;

    


    @media all and (max-width: 767px){
        width: 100vw;
        margin-left: 10px;
        height: 60vh;
        overflow: auto;

      
    }
    


`

export const VideoItemContainer = Styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; 
    margin-bottom: 20px;

    
  
    margin-left: -35px;
    margin-right: 30px;

    

    
`

export const VideoDescriptionContainer = Styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        max-width: 370px;

   

        @media all and (max-width: 767px){
            margin-top: 0px;
            margin-left: -10px;
          
        }

`
export const VideoHeading = Styled.h1`
        font-size: 16px;
        text-align: left;
        font-weight: 500;
        margin-bottom: -10px;
        
        
        @media all and (max-width: 767px){
           font-size: 16px;
        }
`
export const VideoPara = Styled.p`
        font-size: 16px;

        @media all and (max-width: 767px){
           font-size: 14px;
        }

`

export const ReactPlayerContainer = Styled.div`

        

        background-size: cover;
        height: 200px;
        width: 325px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`

export const Img = Styled.img`
        height: 200px;
        width: 325px;
`
