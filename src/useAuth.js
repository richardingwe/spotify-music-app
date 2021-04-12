import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = (code) => {
	const [accessToken, setAcessToken] = useState();
	const [refreshToken, setRefreshToken] = useState();
	const [expiresIn, setExpiresIn] = useState();

	useEffect(() => {
		axios
			.post('http://localhost:3001/login', {
				code,
			})
			.then((res) => {
				setAcessToken(res.data.accessToken);
				setRefreshToken(res.data.refreshToken);
				setExpiresIn(res.data.expiresIn);
				window.history.pushState({}, null, '/');
			})
			.catch(() => {
				window.location = '/';
			});
	}, [code]);

	return accessToken;
};

export default useAuth;
