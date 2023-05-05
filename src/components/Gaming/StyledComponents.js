import Styled from 'styled-components'

export const Container = Styled.div`


    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start; 

       background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  



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
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start; 
    padding: 20px;
    margin-top: -5px;
    background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
    color: ${props => (props.isDark ? '#ffffff' : '#181818')};
    width: 80vw;
   
    width: 50vw;
    flex-wrap: wrap;


    @media all and (max-width: 767px){
        width: 440px;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start; 
    }
    


`

export const VideoItemContainer = Styled.div`

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 30px;

        

        height: 380px;
        width: 200px;
        

        @media all and (max-width: 767px){
          height: 260px;          
        }

    
`

export const ReactPlayerContainer = Styled.div`
    
        background-image: url(${props => props.thumbnailUrl});
        background-size: cover;
        min-height: 300px;
        max-height: 400px;
        width: 200px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        @media all and (max-width: 767px){
            min-height: 190px;
            width: 140px;           
        }

`

export const VideoDescriptionContainer = Styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        max-width: 370px;
        
       

        @media all and (max-width: 767px){
            margin-top: 0px;
         
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
        font-size: 14px;

       

        @media all and (max-width: 767px){
           font-size: 10px;
        }

`
export const VideosBgContainer = Styled.div`

        width: 80vw;
        background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
        color: ${props => (props.isDark ? '#ffffff' : '#181818')};

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
