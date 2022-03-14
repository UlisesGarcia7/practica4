import React from "react";

export const GifGridItem = ({id, title, url}) => {
    return (
        <div className='card' class="animate__animated animate__bounce animate__faster">
            <img src={ url } alt= {title} />
            <p>{ title }</p> 
        </div>
    )
}