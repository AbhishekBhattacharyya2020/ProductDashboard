import styled from 'styled-components'

const TableWrapper = styled.div`
    margin-top:10px;
    background-color: white;
    border-radius:0.3rem; 
    padding:0.7rem;
    grid-area:mytable;
    overflow-y:scroll;

    Table{
        text-align:center;
        border-collapse:collapse;
    }

    Thead{
        background-color:black;
        color:white;

    }

    Th{
        padding-top:0.8rem;
        padding-bottom:0.8rem;
    }

    Td{
        border-bottom: 1px solid black;
        padding-top:0.8rem;
        padding-bottom:0.8rem;
    }

    button.edit{
        width:2.5rem;
        padding:0.5rem;
        background-color:#686868;
        color:white;
        text-decoration: none;
        border: none;
        outline:none;
        border-radius:0.3rem;
        margin-right:0.5rem;
    }

    button.delete{
        width:2.5rem;
        padding:0.5rem;
        background-color:#980000;
        color:white;
        text-decoration: none;
        border: none;
        outline:none;
        border-radius:0.3rem;
        margin-left:0.5rem;
    }
`

export default TableWrapper