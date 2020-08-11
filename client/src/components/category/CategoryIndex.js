import React from 'react'
import { Grid } from 'semantic-ui-react'

import CategoryDetail from './CategoryDetail'

const CategoryIndex = (props) => {

    const genCats = (props) => {

        const cats = props.categories
        let catsRow 
        let cats
        let row 
        let rows = []

        for (let i = 0; i < cats.length; i++ ) {
            if (i % 2 === 0) {
                catsRow = [cats[i], cats[i + 1]]
                cats = catsRow.map(cat => <CategoryDetail cat={cat} />)    
                row = <Grid.Row>{cats}</Grid.Row>
                rows.push(row)
            } 
        }
        return rows  
    }

    return (
        <>
            {genCats()}
        </>
    )

}

export default CategoryIndex