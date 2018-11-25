import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  min-height: 3vh;
  grid-row: 3;
  grid-column: 2;
  border-radius: 1ch;
  background-color: transparent;
  align-items: center;
  justify-content: center;

  a {
    padding: 1.25ch;
    margin-left: auto;
    margin-top: 0.5ch;
    color: orange;
    text-shadow: '0.08ch 0.08ch red';
    text-decoration: none;

    span {
      font-family: 'Rouge Script', cursive;
      font-size: 3ch;
      margin: 0;
    }
    
    &:hover {
      color: orangered;
      cursor: default;
    }    
  }

  svg {
    margin: 1vh 0 0 2vh;
    height: 5ch;
    width: 5ch;
  }
  
  @media (max-width: 800px) {
    grid-column: span 3;
  }  
`

export default Wrapper
