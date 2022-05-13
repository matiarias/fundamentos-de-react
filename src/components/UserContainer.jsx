import React from 'react'
import UserList from './UserList'

const UserContainer = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Lista de Usuarios</h1>

                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3 ">
                        <h3 className='text-center mb-3'>Lista con los Usuarios</h3>
                        <UserList />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserContainer