import React from 'react'

const Image = ({src, alt, className, onClick}) => {
    return (
        <div>
            <img onClick={() => onClick()} src={src} alt={alt} className={className}/>
        </div>
    )
}

export default Image
