import React from 'react'
import "./UsersList.css"

const UserItem = ({item}) => {
  return (
    <>
    
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
              <img src={item.avatar_url} alt={item.login} />
              <div className="username"><strong>{item.login}</strong></div>
            </div>
            <div className='card-back'>
            <a className="link" href={item.html_url} target="_blank">
              <ul>
                <li>
                  <strong>Name:</strong> {item.name}
                </li>
              <li>
                  <strong>Nickname:</strong> {item.login}
                </li>
                <li>
                  <strong>Public repositories:</strong> {item.public_repos}
                </li>
              </ul>
              </a>
            </div>
          </div>
        </div>
     
    </>
  )
}

export default UserItem