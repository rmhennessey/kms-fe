import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Navbar.Brand>
					<Link to='/'>#VLSKMS</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto' id='navLinks'>
						<Link to='/miniverse'>Miniverse</Link>
						<Link to='/shop'>Shop</Link>
						<Link to='/network'>Network</Link>
						<a
							href='https://twitter.com/kirkmin'
							target='_blank'
							rel='noreferrer'
						>
							<i className='fab fa-twitter'></i>
						</a>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
