import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
  a {
    display: grid;
    border: 1px solid black;
    grid-template-rows: [start row-1] auto [stop end];
    grid-template-columns: [start column-1] auto [column-2] auto [end];
    background-color: slategrey;
    opacity: 0.7;
    
    margin: 0.5ch;
    width: 28ch;
    color: lightgreen;
    
    text-decoration: none;
    border-radius: 1ch;
    
    .cover {
      grid-column: 1;
      grid-row: 1;
      
      svg {
        width: 10ch;
      }
      
    }
    
    .info {
      grid-column: 2;
      grid-row: 1;
      padding-top: 1ch;
    }
    
    :visited {
      color: cyan;
    }
    
    :hover {
      cursor: pointer;
      opacity: 1;
      color: yellow;
    }
  }
`

export default Wrapper
