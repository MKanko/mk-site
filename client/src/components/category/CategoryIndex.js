// import React from 'react'
// import { Grid } from 'semantic-ui-react'

// import CategoryDetail from './CategoryDetail'

// const CategoryIndex = (props) => {

//     const genCats = () => {
//         const cats = props.categories   
//         let catsRay
//         let row 
//         let rows = []

//         for (let i = 0; i < cats.length; i++ ) {
//             if (i % 2 === 0) {
//                 let catsRow = []
//                 catsRow.push(cats[i])
//                 if (cats[i + 1]) {
//                     catsRow.push(cats[i + 1])
//                 }
//                 catsRay = catsRow.map(cat => <CategoryDetail key={cat.id} category={cat} />)    
//                 row = <Grid.Row>{catsRay}</Grid.Row>
//                 rows.push(row)
//             } 
//         }
//         return rows  
//     }

//     return (
//         <>
//             {genCats()}
//         </>
//     )

// }

// export default CategoryIndex