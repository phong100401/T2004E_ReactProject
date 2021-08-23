import React from 'react';
import Sidebar from '../components/admin/Sidebar';

const AdminLayout = (props) => {
	return (
		<div className="hold-transition sidebar-mini layout-fixed">
			<div className="wrapper">
				<Sidebar />
				{props.children}
			</div>
		</div>
	);
};

export default AdminLayout;
