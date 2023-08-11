import React, { useState, useContext, useMemo, useRef } from 'react'
import UsersContext from '../Context/UsersContext';

let editId = null;

const Actions = (props) => {
    const { row } = props;
    const refClose = useRef();
    const [editData, setEditData] = useState({name: "", address: "", status: ""});
    const context = useContext(UsersContext);
    const { userData, setUserData, fetchData, pageNo } = context;

    const editUserData = (row) => {
        editId= row.id;
        setEditData({name: row.name, address: row.address, status: row.status})
    }

    const onChange = (e) => {
        setEditData({...editData, [e.target.name]: e.target.value})
    }

    const updateData = () => {
        const updatedData = userData.map((ele)=>{
            if(ele.id === editId){
                return (
                    {
                        ...ele,
                        name : editData.name,
                        address : editData.address,
                        status: editData.status
                    }
                )
            }else{
                return ele;
            }
        })
        setUserData(updatedData);
        refClose.current.click();
    }

    const deleteUserData = (row) => {
        const updatedData = userData.filter((item) => item.id !== row.id);
        setUserData(updatedData);
    }

    const refreshUserData = () => {
        fetchData(pageNo);
    }

    return (
        <span>
            <div className="modal fade" id="editData" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit User Details</h1>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Officer Name</label>
                                    <input type="text" value={editData.name} className="form-control" name="name" id="name" onChange={onChange} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" value={editData.address} className="form-control" name="address" id="address" onChange={onChange} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <input type="text" value={editData.status} className="form-control" name="status" id="status" onChange={onChange} required/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={editData.name.length < 3 || editData.address.length < 5 || editData.status.length < 2}type="submit" className="btn btn-primary" onClick={updateData}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <button style={{
                fontSize: '1rem',
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                marginRight: '1vw'
            }}>
                View More</button>
            <button style={{
                fontSize: '1rem',
                backgroundColor: 'rgb(216, 36, 162)',
                color: 'white',
                border: 'none',
                marginRight: '1vw'
            }}>
                Watch Live</button>
            <span className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    More
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <span className="dropdown-item" data-bs-toggle="modal" data-bs-target="#editData" onClick={() => {editUserData(row.original)}}>Edit</span>
                    <span className="dropdown-item" onClick={() => { deleteUserData(row.original) }}>Delete</span>
                    <span className="dropdown-item" onClick={refreshUserData}>Refresh</span>
                </div>
            </span>
        </span>
    )
}

export default Actions