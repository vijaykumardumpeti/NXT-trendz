import Styled from 'styled-components'

export const HeaderContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 95vh;

    width: 20vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
    color: ${props => (props.isDark ? '#f1f1f1' : '#212121')};



    @media all and (max-width: 767px){
        display: none;
    }
`

export const UnorderedListContainer = Styled.ul`
    list-style-type: none;
    
`

export const ListItem = Styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    min-width: 320px;
    max-width: 320px;

    margin-left: -40px;
    padding: 10px;
    line-height: 1px;
`
export const ContainerForHomeAndPara = Styled.div`
    width: 220px;
   
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Para = Styled.p`

    font-family: "roboto";
    margin-left: 5px;
    width: ${props => props.width};

`
export const ContactInfoContainer = Styled.div`
    padding: 15px;
`

export const SocialIconsContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 110px;
`

export const ImageSocial = Styled.img`
    height: 30px;
`
