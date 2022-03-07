import React from 'react'
import { useFetchGifs } from './hooks/useFetchGifs'
//import { GifGridItem } from './GifGridItem';
//import { getGifs } from './helpers/getGifs';

export const GifGrid = ({ category }) => {


    // const [images, setImages] = useState([]);
    const { loading } = useFetchGifs();

    console.log(loading);
    // /**
    //  * Este useEffet permite que esa funcion que esta dentro no se ejecute si no cuando se renderiza el componente la primer vex
    //  */
    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages )
    // }, [ category ]);

    

    return (
        <>
            <h2> { category } </h2>

            { loading ? 'Cargando...' : 'Fin de carga' }
            {/* <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }     
                        />
                        //<li key={ img.id }> { img.title } </li>
                    ))
                }
            </div> */}
        </>
    )
}
