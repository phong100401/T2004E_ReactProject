import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

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
