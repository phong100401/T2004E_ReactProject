import React from 'react';
import { Link } from 'react-router-dom';
import AdminContent from '../../../components/admin/Content/index';

const AdminDashboard = (props) => {
	return (
		<AdminContent>
			{/* <!-- Small boxes (Stat box) --> */}
			<div className="row">
				<div className="col-lg-3 col-6">
					{/* <!-- small box --> */}
					<div className="small-box bg-info">
						<div className="inner">
							<h3>150</h3>

							<p>New Orders</p>
						</div>
						<div className="icon">
							<i className="ion ion-bag"></i>
						</div>
						<Link to="#" className="small-box-footer">
							More info <i className="fas fa-arrow-circle-right"></i>
						</Link>
					</div>
				</div>
				{/* <!-- ./col --> */}
				<div className="col-lg-3 col-6">
					{/* <!-- small box --> */}
					<div className="small-box bg-success">
						<div className="inner">
							<h3>
								53<sup style={{ fontSize: '20px' }}>%</sup>
							</h3>

							<p>Bounce Rate</p>
						</div>
						<div className="icon">
							<i className="ion ion-stats-bars"></i>
						</div>
						<Link to="#" className="small-box-footer">
							More info <i className="fas fa-arrow-circle-right"></i>
						</Link>
					</div>
				</div>
				{/* <!-- ./col --> */}
				<div className="col-lg-3 col-6">
					{/* <!-- small box --> */}
					<div className="small-box bg-warning">
						<div className="inner">
							<h3>44</h3>

							<p>User Registrations</p>
						</div>
						<div className="icon">
							<i className="ion ion-person-add"></i>
						</div>
						<Link to="#" className="small-box-footer">
							More info <i className="fas fa-arrow-circle-right"></i>
						</Link>
					</div>
				</div>
				{/* <!-- ./col --> */}
				<div className="col-lg-3 col-6">
					{/* <!-- small box --> */}
					<div className="small-box bg-danger">
						<div className="inner">
							<h3>65</h3>

							<p>Unique Visitors</p>
						</div>
						<div className="icon">
							<i className="ion ion-pie-graph"></i>
						</div>
						<Link to="#" className="small-box-footer">
							More info <i className="fas fa-arrow-circle-right"></i>
						</Link>
					</div>
				</div>
				{/* <!-- ./col --> */}
			</div>
		</AdminContent>
	);
};

export default AdminDashboard;
