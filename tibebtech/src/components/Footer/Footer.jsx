import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center py-3 mt-auto">
      <Container>
        <small className="text-muted">
          &copy; {new Date().getFullYear()} TibebTech. All rights reserved.
        </small>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
