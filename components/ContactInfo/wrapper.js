import styled from 'styled-components'

const Wrapper = styled.ul`
  font-size: 4ch;
  list-style: none;

  li {
    margin-bottom: 0.5ch;
  }

  a {
    text-decoration: none;
  }

  .email a {
    color: lightgreen;
    text-shadow: 0.2ch 0.2ch black;
  }
  
  .repo a {
    color: cyan;
    text-shadow: 0.2ch 0.2ch black;    
  }
`

export default Wrapper
