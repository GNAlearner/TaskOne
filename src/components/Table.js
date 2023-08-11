import React, {useContext} from 'react'
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import UsersContext from '../Context/UsersContext';

const Table = () => {
    const context = useContext(UsersContext);
    const { userData } = context;
    
    const tableInstance = useTable({
        columns: COLUMNS,
        data: userData
    })
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    return (
        <div style={{
            marginTop: "4vh",
            marginLeft: "2vw",
            marginBottom: "4vh"
        }}>
            <h5>User List</h5>
            <table style={{
                border: "0.5px solid #eaeaea",
                borderRadius: "5px",
                marginRight: "2vw"
            }}
                {...getTableProps()}>
                <thead style={{ borderBottom: "0.5px solid #eaeaea" }}>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th style={{
                                            borderRight: "0.5px solid #eaeaea",
                                            padding: '8px',
                                            textAlign: 'center'
                                        }}
                                            {...column.getHeaderProps()}>
                                            {column.render('Header')}</th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return (
                                                <td style={{
                                                    borderRight: "0.5px solid #eaeaea",
                                                    padding: '8px',
                                                    textAlign: 'center'
                                                }}
                                                    {...cell.getCellProps()}>
                                                    {cell.render('Cell')}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table