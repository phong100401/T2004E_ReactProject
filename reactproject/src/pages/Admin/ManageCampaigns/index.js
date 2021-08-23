import React, { useEffect, useState } from 'react';
import AdminContent from '../../../components/admin/Content/index';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

// Main FUNCTION
const ManageCampains = (props) => {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [listFakeData, setListFakeData] = useState([]);

	const classes = useStyles();

	useEffect(() => {
		//set Data
		// set params dang form data
		const params = {
			keyword: '',
			pageNumber: 1,
			pageSize: 25,
		};
		const options = {
			headers: {
				Ticket: localStorage.getItem('ticket'),
			},
		};
		const fethData = async () => {
			await axios
				.post(
					'http://180.93.15.29:8000/HoiDongTuyenSinh/get-paged-hoi-dong-tuyen-sinh',
					params,
					options
				)
				.then((respond) => {
					console.log(respond);
					setListFakeData(respond.data.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		fethData();
	}, [listFakeData]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<AdminContent>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Dessert (100g serving)</StyledTableCell>
							<StyledTableCell align="right">Calories</StyledTableCell>
							<StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
							<StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
							<StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{(rowsPerPage > 0
							? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							: rows
						).map((row, index) => (
							<StyledTableRow key={index * Math.random()}>
								<StyledTableCell component="th" scope="row">
									{row.name}
								</StyledTableCell>
								<StyledTableCell align="right">{row.calories}</StyledTableCell>
								<StyledTableCell align="right">{row.fat}</StyledTableCell>
								<StyledTableCell align="right">{row.carbs}</StyledTableCell>
								<StyledTableCell align="right">{row.protein}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
			<Typography variant="h5">
				<Link>Hello Dog :DD</Link>
			</Typography>
		</AdminContent>
	);
};

export default ManageCampains;
