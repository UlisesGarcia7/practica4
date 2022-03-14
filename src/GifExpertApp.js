import React, { useState } from 'react'
import AddCategoria from './Components/AddCategoria';
import GifGrid from './Components/GifGrid'

export const GifExpertApp = ()=>{
    
    const [categorias,setCategorias] = useState(['Milan']);

    //const handleAdd = ()=>{
     //   setCategorias([...categorias,'Kimetsu no yaiba']);
    //}

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategoria setCategorias={setCategorias}/>
            <hr/>

            <ol>
                {
                    categorias.map(categoria =>{
                        return <GifGrid
                            key={categoria}
                            categoria={categoria}
                        />
                    })
                }
            </ol>
        </>
    )
}