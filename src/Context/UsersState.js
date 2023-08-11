import React, { useState } from "react";
import UsersContext from "./UsersContext";

const UsersState = (props) => {
    const [pageNo, setPageNo] = useState(1);
    const [userData, setUserData] = useState(null);

    const fetchData = async(pageNo) => {
        const response = await fetch(`https://reqres.in/api/users?page=${pageNo}`);
        const data = await response.json();
        setUserData(data.data.map((ele)=>{
          return (
            {
              id : ele.id,
              name: ele.first_name + ' ' + ele.last_name,
              address: '175, 5th Main Road, Vinayaka Layout, Yelahanka New Stage, Bengaluru',
              attendance: '75%',
              status: 'active'
            }
          )
        }))
    }

    return (
        <UsersContext.Provider value={{ pageNo, setPageNo, userData, setUserData, fetchData }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersState