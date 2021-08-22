import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginCallBack = () => {
	const history = useHistory();
	const ticket = window.location.href.split('=')[1];
	localStorage.setItem('ticket', ticket);
	history.push('/');

	return (
		<>
			<div>Redirect back to Home Page</div>
		</>
	);
};

export default LoginCallBack;
