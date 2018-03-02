import React from 'react'

export class MorningOptions extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      names: [],
      times: []
    };
    
  }  


  updateSelectName(id, event){
    console.log(event.target.value)
    console.log(id)
    // $.ajax({
    //   type: 'PATCH',
    //   url: '/api/v1/',
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data){


    //   }.bind(this),
    //   error: function(xhr, status, err){
    //     console.log(err);
    //   }
    // });
  }

  updateSelectTime(id, event){
    console.log(event.target.value)
    console.log(id)
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