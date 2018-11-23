import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: [start row-1] auto [row-2] auto [row-3] 6ch [stop end];
  grid-template-columns: [start column-1] 30vh [column-2] auto;

  main {
    min-height: 87.5vh;
    grid-row: 2;
    grid-column: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  svg.main-icon {
    grid-row: 1;
    grid-column: 2;
    margin-left: auto;
    margin-right: 2ch;
    height: 8ch;
    width: 10ch;
    fill: orange;

    :hover {
      fill: orangered;
    }
  }

  @media (max-width: 800px) {
    main {
      grid-column: span 3;
      min-height: 91vh;
    }
    
    svg.main-icon {
      display: none;
    }
  }
`

export default Wrapper
