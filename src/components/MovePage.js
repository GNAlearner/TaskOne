import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import UsersContext from '../Context/UsersContext';

const MovePage = () => {
    const context = useContext(UsersContext);
    const { fetchData, pageNo, setPageNo } = context;
    const activePage = {
        backgroundColor: 'black',
        color: 'white',
        width: '2vw',
        border: 'none',
        marginRight: '1vw'
    }
    const inactivePage = {
        backgroundColor: 'white',
        color: 'black',
        width: '2vw',
        border: 'none',
        marginRight: '1vw'
    }
    const prevPage = () => {
        setPageNo(1);
        fetchData(pageNo);
    }

    const nextPage = () => {
        setPageNo(2)
        fetchData(pageNo);
    }

    return (
        <div style={{ marginLeft: '2vw', marginBottom: '1vw' }}>
            <span>
                <span>
                    <FontAwesomeIcon style={{ marginRight: '1vw' }} icon={faAngleLeft} />
                    <button style={pageNo === 1 ? activePage : inactivePage}> 1 </button>
                    <button style={pageNo === 2 ? activePage : inactivePage}> 2 </button>
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>
                <span style={{marginLeft: '65vw'}}>
                    <button onClick={prevPage} style={{ marginRight: '1vw', border: 'none' }}>Prev Page</button>
                    <button onClick={nextPage} style={{ border: 'none' }}>Next Page</button>
                </span>
            </span>
        </div>
    )
}

export default MovePage