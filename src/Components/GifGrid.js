import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../Help/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export default function GifGrid({categoria}) {
    const {data:imagenes,loading} = useFetchGifs(categoria);
    
  return (
      <>
        <h3 className='animate__animated animate__fadeIn'>{categoria}</h3>
        {loading && <p className='animate__animated animate__flash'>Cargando...</p>}
        <div className='card-drig'>
                {
                    imagenes.map((img)=>(
                        <GifGridItem key={img.id}{...img}/>
                    ))
                }
        </div>
    </>
  )
}
