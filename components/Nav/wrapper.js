import styled from 'styled-components'

const Wrapper = styled.nav`
  grid-row: span 3;
  grid-column: 1;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  background-color: ${props => props.theme.background};

  .icon {
    display: none;
  }

  a {
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.tagBackground};
    text-align: center;
    display: flex;
    align-items: center;

    padding: 1ch;
    text-decoration: none;
    font-size: 2.5ch;

    border-color: black;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-radius: 1ch 0 0 1ch;

    &.active {
      background-color: ${props => props.theme.active};
      color: ${props => props.theme.activeText};

      &:hover{
        background-color: ${props => props.theme.activeHover};
        color: ${props => props.theme.activeHoverText};
        cursor: not-allowed;
      }
    }

    :hover {
      background-color: ${props => props.theme.hover};
      color: ${props => props.theme.hoverText};
    }
  }

  svg.logo {
    height: 9ch;
    width: 9ch;
    margin: auto 2ch 0 auto;
  }

  @media (max-width: 800px) {
    grid-row: 1;
    grid-column: span 3;
    flex-direction: row;
    border-radius: 1ch;
    align-items: center;

    a {
      border-radius: 0;
      border: none;

      :first-child {
        border-radius: 1ch 0 0 1ch;
      }

      &:not(:first-child) {display: none;}
      &.icon {
        margin-left: auto;
        display: block;
      }
    }

    svg.logo {
      display: none;
    }
    
    &.responsive {
      flex-direction: column;
      position: relative;

      .icon {
        position: absolute;
        right: 0;
        top: 0;
      }      
      
      a {
        display: block;
        
        margin-left: 3.5ch;
        
        :last-child {
          border-radius: 0 1ch 1ch 0;
        }
        
        :not(:last-child) {
          width: 100%;
          text-align: left;
        }
      }
    }
  }
`

export default Wrapper
