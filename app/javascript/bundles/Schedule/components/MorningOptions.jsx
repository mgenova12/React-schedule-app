import React from 'react'

export class MorningOptions extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      names: ['hello','goodbye'],
      times: []
    };
  }  

  getNames(){
    console.log(this.props.pizza)
  }

  componentDidMount(){
    this.getNames();
  }


  render(){
    let nameOptions = this.state.names.map(name => {
      return <option key={name} value={name}> {name}</option>
    })

    return(
      <div> 
        <select ref="name" >
          {nameOptions}
        </select>
      </div> 

    )

  }

}