import React from ' react';
import SidebarSearh from './SidebarSearch';
import SidebarUser from './SidebarUser';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<SidebarUser />
			<SidebarSearh />
		</div>
	);
};

export default Sidebar;
