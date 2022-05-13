import React from 'react'

const UserItem = (props) => {

    const {item} = props
    
    return (
        <div>

            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.avatar} className="img-fluid rounded-start" alt={item.first_name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.first_name} {item.last_name} </h5>
                            <p className="card-text">{item.email}</p>
                            <p className="card-text"><span className="badge bg-warning text-dark">{item.skill}</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserItem