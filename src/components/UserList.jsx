import React from 'react'
import UserItem from './UserItem'

import { usuarios } from '../datos/usuarios'
import '../css/tarjetas.css'


const UserList = () => {
    console.log(usuarios);

    return (
        <div>

            {
                usuarios.map((item) => (

                    <UserItem key={item.id} item={item} />
                ))
            }

        </div>
    )
}

export default UserList