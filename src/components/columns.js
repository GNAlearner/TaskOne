import Actions from './Actions';

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Officer Name',
        accessor: 'name'
    },
    {
        Header: 'Address',
        accessor: 'address'
    },
    {
        Header: 'Attendance',
        accessor: 'attendance'
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Action',
        accessor: 'action',
        Cell: ({row}) => (
            <Actions row={row}/>
        )
    }
]