import React from 'react';
// import AdminContent from '../components/admin/Content/index';
import AdminFooter from '../components/admin/Footer';
import AdminSidebar from '../components/admin/Sidebar/index';

const AdminLayout = (props) => {
	return (
		<div className="wrapper">
			<AdminSidebar />
			{props.children}
			{/* <AdminContent /> */}
			<AdminFooter />
		</div>
	);
};

export default AdminLayout;
