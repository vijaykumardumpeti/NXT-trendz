import Styled from 'styled-components'

export const Container = Styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start; 

    height: 100vh;
    overflow-y: auto;

    background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};

    @media all and (max-width: 767px){
        height: 100vh;
        overflow-y: auto;  
    }
  
`

export const TrendingContainer = Styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; 
    

    height: 95vh;
    overflow-y: auto;

    @media all and (max-width: 767px){
        height: 100vh;
        overflow-y: auto;  
    }
    
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
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start; 
    padding: 20px;

    background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
    color: ${props => (props.isDark ? '#ffffff' : '#181818')};
    width: 80vw;
    margin-top: -10px;

    @media all and (max-width: 767px){
        width: 100vw;

    }

`

export const VideoItemContainer = Styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    margin-bottom: 20px;

    

    @media all and (max-width: 767px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    
`

export const VideoDescriptionContainer = Styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        max-width: 370px;
        margin-top: -120px;
       

        @media all and (max-width: 767px){
            margin-top: 0px;
            margin-left: -40px;
        
        }

`
export const VideoHeading = Styled.h1`
        font-size: 20px;
        max-width: 600px;
        
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
    
        background-image: url(${props => props.thumbnailUrl});
        background-size: cover;
        height: 30vh;
        width: 30vw;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      @media all and (max-width: 767px){
            height: 85vh;
            width: 85vw;
        }
`

export const NormalContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  
  height: 80vh;
  width: 80vw;

  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};

  padding: 30px;


@media all and (max-width: 767px){
    width: 100vw;
}

`
