import React from 'react'

export class DeleteMorning extends React.Component {
    
    onDeleteCell(id, day){
      this.props.DeleteCell(id, day)
      $.ajax({
        type: 'DELETE',
        url: '/api/v1/pizza/' + id,
        dataType: 'json',
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
      <button onClick={this.onDeleteCell.bind(this, this.props.cell, this.props.day)}>Delete</button>
    )
  }

}

