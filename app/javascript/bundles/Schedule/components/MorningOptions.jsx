import React from 'react'

export class MorningOptions extends React.Component {
  
  updateSelectName(id, event){
    let employeeId;

    this.props.nameOptions.map(ele => {
      if(ele.props.value === event.target.value){
        employeeId = ele.key;
      }
    })

    var parameters = {
      id: id,
      employeeId: employeeId
    };

    $.ajax({
      type: 'PATCH',
      url: '/api/v1/pizza/' + id,
      dataType: 'json',
      data: parameters,
      cache: false,
      success: function(data){

      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  updateSelectTime(id, event){

    let hourId;

    this.props.timeOptions.map(ele => {
      if(ele && ele.props.value === event.target.value){
        hourId = ele.key;
      }
    })

    var parameters = {
      id: id,
      hourId: hourId
    };

    $.ajax({
      type: 'PATCH',
      url: '/api/v1/pizza/' + id,
      dataType: 'json',
      data: parameters,
      cache: false,
      success: function(data){

      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });

  }


  render(){  
    return(
      <div> 
        <select defaultValue={this.props.name} onChange={this.updateSelectName.bind(this, this.props.cellId)} >
          <option>--</option> 
          {this.props.nameOptions}
        </select>
        <br/>
        <select defaultValue={this.props.time} onChange={this.updateSelectTime.bind(this, this.props.cellId)} >
          <option>--</option>        
          {this.props.timeOptions}
        </select>
      </div> 

    )

  }
}