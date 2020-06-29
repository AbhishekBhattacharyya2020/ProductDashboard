import styled from 'styled-components'
import image from '../images/login-page-image.jpg'


const Loginbox = styled.div`
    width:100vw;
    height:100vh;
    background-image:url(${image});

    > div{
        width:100%;
        height:100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content:center;
        align-items:center;
    }

    p{
        position:absolute;
        color:white;
        width:14.3rem;
        top:-35px;
        text-align:center;
        background-color:red;
        border-radius:0.3rem;
        letter-spacing:1px;
    }

    form{
        position:relative;
        background-color:white;
        height:300px;
        padding: 1rem;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        border-radius:0.3rem;
    }

    form input{
        height:2rem;
        border-radius:0.3rem;
        padding:0.5rem;
    }

    form button{
        background-color:#1a1a1a;
        text-decoration: none;
        border: none;
        padding:0.6rem;
        border-radius:0.3rem;
        outline:none;
        color:white;
    }
 
    form a{
        text-decoration: none;
    }

    .error{
        font-size:0.8rem;
        color:red;
    }

`

export default Loginbox