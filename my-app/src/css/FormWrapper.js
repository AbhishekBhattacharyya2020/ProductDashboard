import styled from 'styled-components'

const FormWrapper = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    display:${(props) => props.modalBoolean ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    background-color: rgba(238, 238, 238, 0.9);
    border-radius:0.3rem; 
    padding:0.7rem;
    grid-area:myform;

form{
    width:20rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: white;
    padding: 2rem 0 2rem 0;
    border-radius:0.3rem;
    box-sizing:none;
}

form h3{
    margin-bottom:2rem;
}

form div{
    width:18rem;
}

form select{
    width:100%;
    height: 1.8rem;
    border-radius:0.3rem;
    background-color:white;
}

form input{
    width:100%;
    height: 1.8rem;
    border-radius:0.3rem;
    margin-top:0.2rem;
    padding:0.5rem;
}

DatePicker{
    position:relative;
}

.modal-buttonbox{
    width:15rem;
    display:flex;
    justify-content:space-between;
}

button.submit-button{
    width:8rem;
    border-radius:0.3rem;
    background-color:#1a1a1a;
    color:white;
    text-decoration: none;
    border: none;
    outline:none;
    padding:0.6rem;
}

button.modal-button{
    width:5rem;
    border-radius:0.3rem;
    background-color:#1a1a1a;
    color:white;
    text-decoration: none;
    border: none;
    outline:none;
    padding:0.6rem;
}

`

export default FormWrapper