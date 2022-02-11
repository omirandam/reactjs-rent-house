import React from 'react';
import DataTable from 'react-data-table-component';



const data = []

  const columns = [
    {
        name: 'Id',
        selector: 'id', 
        sortable: true,
        right: true
    }, {
        name: 'Name',
        selector: 'name',
        sortable: true,
        grow: 4
    }, {
        name: 'Color',
        selector: 'color',
        sortable: true
    }, 
]


class TableHouse extends React.Component{

    handlerLoadTableData(){
        fetch('http://localhost:9999/api/house')
            .then(  
			   response => {
			     response.json()
			   }
			)
            .then(json => console.log(json))
    }

    render(){
        return (
            <div className="table-responsive">
              {this.handlerLoadTableData()}
              <DataTable
                columns={columns}
                data={data}
                title="List House"
                pagination
                fixedHeader
                fixedHeaderScrollHeight="300px"
              />
            </div>
          );
    }
}

export default TableHouse;
