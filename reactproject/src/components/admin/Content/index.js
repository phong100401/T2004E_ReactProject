import React from 'react';
import ContentHeader from './ContentHeader';

const AdminContent = (props) => {
	return (
		<div className="content-wrapper">
			<ContentHeader />
			<section className="content">
				<div className="container-fluid">{props.children}</div>
			</section>
		</div>
	);
};

export default AdminContent;
