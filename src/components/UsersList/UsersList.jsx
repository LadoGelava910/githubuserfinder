import React from 'react'
import "./UsersList.css"
import UserItem from "./UserItem";
const UsersList = ({finalData}) => {

  return (
    <div className="users_list_wrapper">
       {finalData && finalData.length > 0 && finalData[0] && finalData[0].items && finalData[0].items.map(item=>{return (
           <UserItem key={item.id} item={item}/>
       )})}
    </div>
  )
}

export default UsersList