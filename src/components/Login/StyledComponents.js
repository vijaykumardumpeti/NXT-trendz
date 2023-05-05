import Styled from 'styled-components'

export const Container = Styled.div`
    height: 100vh;

    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;

    font-family: "roboto";
    background-color: ${props => (props.isDark ? '#212121' : '#f1f1f1')};
    
`

export const FormContainer = Styled.form`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    height: 280px;
    align-items:flex-start;



    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 20px;
    border-radius: 10px;
    background-color: ${props => (props.isDark ? '#1e293b' : '#f1f1f1')};
   
    
`

export const InputAndLabelContainer = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:flex-start;

    height: 55px;
    margin-bottom: 5px;
`
export const Label = Styled.label`
    font-weight: bold;
    font-size: 12px;
     color: ${props => (props.isDark ? '#f1f1f1' : '#475569')};
`

export const InputElement = Styled.input`
    width: 300px;
    height: 35px;
    outline: none;
    border-radius: 5px;
    border: 0.5px solid #64748b;
    padding: 3px;
    color: ${props => (props.isDark ? '#f1f1f1' : '#475569')};
    background-color: ${props => (props.isDark ? '#1e293b' : '#f1f1f1')};
`
export const CheckBoxAndLabelContainer = Styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center; 
`
export const CheckboxInput = Styled.input`
    height: 15px;
    width: 15px;

`
export const LoginButton = Styled.button`

    background-color: #3b82f6;
    border: 0px none transparent;
    padding: 3px;
    border-radius: 6px;
    color: white;

    width: 300px;
    height: 35px;

`

export const LoginImage = Styled.img`
    height: 30px;
    margin-left: 90px;
    margin-bottom: 10px;
`
