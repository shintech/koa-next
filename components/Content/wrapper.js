import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 1ch;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: 'Farsan', cursive;
    font-size: 4ch;
    color: greenyellow;
    text-shadow: 0.18ch 0.18ch darkred;
    margin: 0;
  }

  svg {
    margin-bottom: 3ch;
    margin-top: 1.5ch;
    opacity: 0.7;
    
    :hover {
      opacity: 1;
    }
  }
`

export default Wrapper
