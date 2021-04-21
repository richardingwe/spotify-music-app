import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import useAuth from './useAuth';

const Dashboard = ({ code }) => {
	// acess token
	const accessToken = useAuth(code);
	const [search, setSearch] = useState('');
	return (
		<Container
			className='d-flex flex-column py-2'
			style={{
				height: '100vh',
			}}
		>
			<Form.Control
				type='search'
				placeholder='Search Songs/Artists'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<div
				className='flex-grow-1 my-2'
				style={{
					overflowY: 'auto',
				}}
			>
				Songs
			</div>
			<div>Bottom</div>
		</Container>
	);
};

export default Dashboard;
