import React from 'react'

const UserInfo = ({totaluser}) => {

  console.log(totaluser)
  return (
    <div className='row padding-80 usersave'>
      {
        totaluser && totaluser?.map((e)=> {
          return (
          <div className='col-md-4 set-user-details' key={e.uid}> 
             <img src={e?.storephotoURL}/>
             <h2>UserName : {e?.username}</h2>
             <p>Email : {e?.email}</p>
             <p>Uid : {e?.uid}</p>
          </div>
          )
        })
      }
    </div>
  )
}

export default UserInfo