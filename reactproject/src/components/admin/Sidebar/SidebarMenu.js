import React from 'react';
import { Link } from 'react-router-dom';

const fakeColumns = [
	{ id: 0, name: 'Dashboard', icon: 'fas fa-th nav-icon' },
	{ id: 1, name: 'Dashboard 2', icon: 'far fa-circle nav-icon' },
	{ id: 2, name: 'Dashboard 3', icon: 'nav-icon fas fa-chart-pie' },
];

const SidebarMenu = () => {
	return (
		// SidebarSearch Form
		<nav className="mt-2">
			<ul
				className="nav nav-pills nav-sidebar flex-column"
				data-widget="treeview"
				role="menu"
				data-accordion="false"
			>
				{fakeColumns.map((column) => (
					<li className="nav-item" key={column.id}>
						<Link to="#" className="nav-link">
							<i className={column.icon}></i>
							<p>
								{column.name}
								{/* <span className="right badge badge-danger">New</span> */}
							</p>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SidebarMenu;
