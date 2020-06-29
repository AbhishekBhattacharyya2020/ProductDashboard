import styled from 'styled-components'

const MainContainer = styled.div`
  position:relative;
  max-height:100vh;
  background-color: #EEEEEE;  
  grid-area:content;
  padding:0.8rem 1.2rem 0.8rem 1.2rem;
  display:grid;
  grid-template-columns: auto;
  grid-row-gap: 0.5rem;
  grid-template-rows: 5vh 91vh;
  grid-template-areas: 
  "title"
  // "myform"
  "mytable";

  .dashboard-title{
    grid-name:title
  }
  
  .title{
      font-size:1.5rem;
  }

  h3{
    letter-spacing:2px;
    margin-bottom:10px;
  }

  .Modal{
    position:absolute;
    width:100%;
    height:100vh;
    border:1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: rgba(238, 238, 238, 0.9);
  }

  .error{
    font-size:0.8rem;
    color:red;
}

@media (max-width: 768px){
  .error{
    display:block;
  }
}

`
export default MainContainer