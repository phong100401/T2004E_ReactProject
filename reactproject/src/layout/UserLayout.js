import React from 'react';
import Header from '../components/user/Header';
import Footer from '../components/user/Footer';

const UserLayout = (props) => {
	return (
		<>
			<Header></Header>
			{props.children}
			<Footer></Footer>
		</>
	);
};

export default UserLayout;
