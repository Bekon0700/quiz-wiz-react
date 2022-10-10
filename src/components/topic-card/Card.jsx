import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ info }) => {
    return (
        <div>
            <Link to={`/topic/${info.name}/${info.id}`}>
                <div className='card-zoom'>
                    <div className="card-zoom-image flex justify-center items-center"
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${info.logo})` }}
                    >
                        <p className='card-zoom-text '>{info.name}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card