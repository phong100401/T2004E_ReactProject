import React, { createContext, useState } from 'react';

export const AdminSelectedColumnContext = createContext({
	selectedColumn: '',
	setColumn: (selectedColumn) => {},
});

const AdminSelectedColumnProvider = (props) => {
	const [selectedColumn, setSelectedColumn] = useState('Dashboard');

	const getSelectedColumn = (column) => {
		console.log(column);
		setSelectedColumn(column);
	};

	return (
		<AdminSelectedColumnContext.Provider
			value={{
				selectedColumn,
				getSelectedColumn,
			}}
		>
			{props.children}
		</AdminSelectedColumnContext.Provider>
	);
};

export default AdminSelectedColumnProvider;
