import React from 'react'

export class AddCell extends React.Component {

  render() {
    var columns = [];
    for (var i=0; i< this.props.colNum; i++){
      columns.push(<tr key={i}><td><div>Name: <br/>Time:</div></td></tr>)
    }

    return (
        <tbody>
          {columns}
        </tbody>
      )

  }

}