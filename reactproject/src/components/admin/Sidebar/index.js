import React from 'react';
import SidebarMenu from './SidebarMenu';
import SidebarSearch from './SidebarSearch';
import SidebarUser from './SidebarUser';
import SidebarLogo from './SidebarLogo';

const AdminSidebar = () => {
	return (
		<aside className="main-sidebar sidebar-dark-primary elevation-4">
			<SidebarLogo />
			<div className="sidebar">
				<SidebarUser />
				<SidebarSearch />
				<SidebarMenu />
			</div>
		</aside>
	);
};

export default AdminSidebar;
