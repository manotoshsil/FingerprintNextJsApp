// import DataTable from 'react-data-table-component';

// // A super simple expandable component.
// const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

// const columns = [
// 	{
// 		name: 'Title',
// 		selector: row => row.title,
// 	},
// 	{
// 		name: 'Year',
// 		selector: row => row.year,
// 	},
// ];

// const data = [
//   	{
// 		id: 1,
// 		title: 'Beetlejuice',
// 		year: '1988',
// 	},
// 	{
// 		id: 2,
// 		title: 'Ghostbusters',
// 		year: '1984',
// 	},
// ]

// function DataTableCustom() {
// 	return (
// 		<DataTable
// 			columns={columns}
// 			data={data}
// 			expandableRows
// 			expandableRowsComponent={ExpandedComponent}
// 		/>
// 	);
// };

// export default DataTableCustom;


import React from 'react';
import DataTable from 'react-data-table-component';
// import data from '../constants/sampleMovieData';

const customStyles = {
	header: {
		style: {
			minHeight: '56px',
		},
	},
	headRow: {
		style: {
			borderTopStyle: 'solid',
			borderTopWidth: '1px',
		},
	},
	headCells: {
		style: {
			'&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '1px',
			},
		},
	},
	cells: {
		style: {
			'&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '1px',
			},
		},
	},
};

const columns = [
	{
		name: 'Title',
		selector: row => row.title,
		sortable: true,
	},
	{
		name: 'Director',
		selector: row => row.director,
		sortable: true,
	},
	{
		name: 'Year',
		selector: row => row.year,
		sortable: true,
	},
];

let data = [{
    id: 1,
    title: 'Beetlejuice',
    director: 'Tim Burton',
    year: '1988',
}, {
    id: 2,
    title: 'Ghostbusters',
    director: 'Ivan Reitman',
year: '1984'}, {
    id: 3,
    title: 'SHolay',
    director: 'Ramesh Sippy',
    year:'1975'
}];

const DataTableCustom = () => (
	<DataTable
		title="Movie List"
		columns={columns}
		data={data}
		customStyles={customStyles}
		pagination
		selectableRows
		dense
	/>
);


export default DataTableCustom;