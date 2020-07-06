import React from 'react'

import styles from './style.module.scss'
export default function Footer() {
  return (
    <footer>
      <hr />© {new Date().getFullYear()}, Built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>{' '}
    </footer>
  )
}
