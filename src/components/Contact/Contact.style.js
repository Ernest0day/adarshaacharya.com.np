import styled from 'styled-components'

export const ContactWrapper = styled.div`
  form {
    min-height: 400px;
    padding: 3rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
    border-top: 4px solid var(--theme);
    border-radius: 12px;
    background: var(--card-color);
    margin: 3rem 0;

    label {
      color: var(--primary-color);
    }
  }

  .row {
    display: grid;
    grid-gap: 1rem;
    grid-template-areas:
      'name email'
      'message message'
      '.btn';
  }

  .name {
    grid-area: name;
  }

  .email {
    grid-area: email;
  }

  .message {
    grid-area: message;
  }

  .btn {
    grid-area: btn;
  }

  .form-control {
    width: 100%;
    padding: 10px 15px;
    border-radius: 3px;
    background-color: #eaeaea;
    border: none;
    margin: 5px 0;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  textarea {
    width: 100%;
    padding: 10px 15px;
    font-size: 1rem;
    font: 400 13.3333px Arial;
  }

  .btn {
    padding: 1rem 2.5rem;
    background: var(--theme);
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    border-radius: 6px;
    margin: 0 0 0.5rem 0;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    line-height: 1;
  }
`

export const SocialWrapper = styled.section`

  }
`
