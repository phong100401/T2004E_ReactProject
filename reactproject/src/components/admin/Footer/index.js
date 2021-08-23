import React from 'react';
import { Link } from 'react-router-dom';

const AdminFooter = () => {
	return (
		<footer className="main-footer">
			<div className="float-right d-none d-sm-block">
				<b>Version</b> 3.1.0
			</div>
			<strong>
				Copyright &copy; 2014-2021 <Link to="#">AdminLTE.io</Link>.
			</strong>{' '}
			All rights reserved.
		</footer>
	);
};

export default AdminFooter;
