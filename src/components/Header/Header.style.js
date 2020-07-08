import styled from 'styled-components'

export const HeaderWrapper = styled.nav`
  background: var(--bg);
  transition: 0.2s ease-out;

  /* position: sticky; */
  width: 100%;
  height: 80px;
  left: 0;
  top: 0;
  z-index: 2;

  box-shadow: var(--nav-shadow);
  border-bottom: var(--nav-border);
  border-top: 4px solid ${p => p.theme.primaryColor};

  .nav-container {
    max-width: 750px;
    margin: auto;
    display: grid;
    grid-template-columns: 6fr 3fr;
    align-items: center;
  }

  .logo {
    align-items: center;
    img {
      height: 50px !important;
      width: 50px !important;
    }
  }

  ul {
    display: flex;
    justify-items: end;
    li a {
      padding: 0.5rem 0.75rem;
      margin: 0.5rem 0;
      color: var(--nav-link);

      &:hover {
        color: var(--theme);
      }
    }
  }

  .current-page {
    color: var(--theme);
    border-bottom: 2px solid var(--theme);
  }

  #theme-toggler {
    height: 0;
    width: 0;
    padding: 0 1rem;
  }
`
