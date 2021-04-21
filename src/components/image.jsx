import React from 'react'
import { Route } from 'react-router'
import {product} from './product'

const Image = () => {
    return (
        <div>

            {product.map((produc) =>produc.goods.map(good =>(
                < >
        
                <img src={good.Image} alt="goods"/>
                <p>{good.call}</p>
                </>
            )))}
        </div>
    )
}

export default Image
