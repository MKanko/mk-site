import React from 'react'
import { Grid } from 'semantic-ui-react'

const ResourceIndex = (props) => {

    const genRows = () => {
        const resources = props.resourceList    
        let rows = []
        let dataList = null

        for (let i = 0; i < resources.length + props.rowSize; i++ ) {
            if (dataList) {
                if (i % props.rowSize === 0) {
                    let row = generateRow(dataList)
                    rows.push(row)
                    dataList = []
                }
            } else {
                dataList = []
            }
            dataList.push(resources[i])       
        }
        return rows   
    }

    const generateRow = dataList => {
        let columns = dataList.map(data => generateResource(data))
        return <Grid.Row>{columns}</Grid.Row>
    }

    const generateResource = (data) => {
        let column = null
        if (data){
            column = React.cloneElement(props.children, {[props.resourceName]: data})
        }
        return column
    }

    // cloneElement is to clone a react element which in this case is a react component

    return (
        <>
            {genRows()}
        </>
    )

}

export default ResourceIndex

