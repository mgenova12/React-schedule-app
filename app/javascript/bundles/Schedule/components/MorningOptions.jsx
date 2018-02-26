import React from 'react'

export class MorningOptions extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      names: [],
      times: []
    };
  }  

  getNames(){
    $.ajax({
      url: '/api/v1/employees',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({names: data}, function(){

        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getTimes(){
    $.ajax({
      url: '/api/v1/hours',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({times: data}, function(){

        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  updateSelectName(id, event){
    console.log(event.target.value)
    console.log(id)
  }

  updateSelectTime(id, event){
    console.log(event.target.value)
    console.log(id)
  }


  componentDidMount(){
    this.getNames();
    this.getTimes();
  }


  render(){
    let nameOptions = this.state.names.map(ele => {
      return <option key={ele.name} value={ele.name}> {ele.name}</option>
    })    
    let timeOptions = this.state.times.map(ele => {
      return <option key={ele.time} value={ele.time}> {ele.time}</option>
    })

    return(
      <div> 
        <select onChange={this.updateSelectName.bind(this, this.props.cellId)} ref="name" >
          <option>--</option>
          {nameOptions}
        </select>
        <br/>
        <select onChange={this.updateSelectTime.bind(this, this.props.cellId)} ref="time" >
          <option>--</option>        
          {timeOptions}
        </select>
      </div> 

    )

  }

}