import React from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import AToF from '../components/AToF'
import GToL from '../components/GToL'
import MToS from '../components/MToS'
import TToZ from '../components/TToZ'

const World = () => {
	return (
		<Container style={{ marginTop: '30px' }}>
			<div style={{ marginBottom: '30px' }}>
				<h1>The Minverse World</h1>
				<p>
					Meet the cast of Minifans, Mincels, Parody Accounts, Enemies, and more
					from the KMS Miniverse.
				</p>
			</div>
			<Tabs
				defaultActiveKey='a'
				id='uncontrolled-tab-example'
				style={{ justifyContent: 'center' }}
			>
				<Tab eventKey='a' title='A-F'>
					<AToF />
				</Tab>
				<Tab eventKey='g' title='G-L'>
					<GToL />
				</Tab>
				<Tab eventKey='m' title='M-S'>
					<MToS />
				</Tab>
				<Tab eventKey='t' title='T-Z'>
					<TToZ />
				</Tab>
			</Tabs>
		</Container>
	)
}

export default World
