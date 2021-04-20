import React from 'react';
import useAuth from './useAuth';

const Dashboard = ({ code }) => {
	// acess token
	const accessToken = useAuth(code);
	return <div>{code}</div>;
};

export default Dashboard;
