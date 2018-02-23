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
        <select ref="name" >
          <option>--</option>
          {nameOptions}
        </select>
        <br/>
        <select ref="time" >
          <option>--</option>        
          {timeOptions}
        </select>
      </div> 

    )

  }

}