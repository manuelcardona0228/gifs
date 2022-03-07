import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     // setCategories( ['HunterXHunter', ...categories] ); //Opción 1
    //     // setCategories( [...categories, 'HunterXHunter'] ); //Opción 2
    //     setCategories( cats => [ ...cats, 'HunterXHunter' ] ); //Opcion 3, con callback
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        /> //<li key={category}>{category}</li>
                    ))
                }
            </ol>
        </>
    )
}
