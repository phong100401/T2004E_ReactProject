import React from 'react';
import { Link } from 'react-router-dom';

const fakeColumns = [
	{ id: 0, name: 'Dashboard', icon: 'fas fa-th nav-icon', link: 'admin-dashboard' },
	{
		id: 1,
		name: 'Manage Campaigns',
		icon: 'far fa-circle nav-icon',
		link: 'manage-campaigns',
	},
	{
		id: 2,
		name: 'Manage Events',
		icon: 'nav-icon fas fa-chart-pie',
		link: 'manage-events',
	},
	{
		id: 3,
		name: 'Manage Recipes',
		icon: 'nav-icon fas fa-chart-pie',
		link: 'manage-recipes',
	},
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
						<Link to={column.link} className="nav-link">
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
