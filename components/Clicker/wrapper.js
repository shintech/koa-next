import styled from 'styled-components'

const Wrapper = styled.div`
  .counter {
    color: ${props => props.theme.text};
    font-size: 6ch;
    margin: 0.75ch;
    white-space: nowrap;
    text-align: center;

    span {
      color: ${props => props.theme.number};
    }
  }

  button {
    border-radius: 2ch;
    height: 10ch;
    width: 23ch;
    font-size: 2.5ch;
    margin: 0.25ch;
    border: ${props => props.theme.button.border};

    &.decrement {
      background-color: ${props => props.theme.decrement};
    }

    &.increment {
      background-color: ${props => props.theme.increment};
    }

    &:hover {
      cursor: pointer;
      background-color: ${props => props.theme.button.hover};
      color:  ${props => props.theme.button.hoverText};
      border: ${props => props.theme.button.activeBorder};
    }

    &:active {
      background-color:  ${props => props.theme.button.active};
      color:  ${props => props.theme.button.activeText};
    }
  }
`

export default Wrapper
