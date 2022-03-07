import React from 'react'
import { useFetchGifs } from './hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    console.log(loading);
    

    return (
        <>
            <h2 className='animate__animated animate__fadeIn'> { category } </h2>

            { loading && <p className='animate__animated animate__flash'>Loading...</p> }

            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }     
                        />
                        //<li key={ img.id }> { img.title } </li>
                    ))
                }
            </div>
        </>
    )
}
