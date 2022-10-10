import React from 'react'

const Card = ({ info }) => {
    console.log(info)
    return (
        <div className='card-zoom'>
            <div className="card-zoom-image flex justify-center items-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${info.logo})` }}
            >
                <p className='card-zoom-text '>{info.name}</p>
                {/* text-2xl lg:text-4xl italic font-bold text-white text-center */}
            </div>
        </div>
    )
}

export default Card