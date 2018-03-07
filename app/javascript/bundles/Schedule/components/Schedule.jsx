import PropTypes from 'prop-types';
import React from 'react';
import {AddAfternoon} from './AddAfternoon'
import {AddMorning} from './AddMorning'

export default class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      Pizza: undefined
    };
  }

  getPizza(){
    $.ajax({
      url: '/api/v1/pizza',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({Pizza: data}, function(){

        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  } 

  componentDidMount(){
    this.getPizza();
  }
//ADD MORNINGS------------------------
  handleAddMorningCell(cell, day){
    let pizza = this.state.Pizza    
    pizza.Morning[day].push(cell)
    this.setState({Pizza:pizza})
  }

//ADD AFTERNOONS------------------------
  handleAddAfternoonCell(cell, day){
    let pizza = this.state.Pizza    
    pizza.Afternoon[day].push(cell)
    this.setState({Pizza:pizza})
  }

//DELETE MORNINGS------------------------
  handleDeleteMorningCell(id, day){
    let pizza = this.state.Pizza;
    let index = pizza.Morning[day].findIndex(x => x.id === id)
    pizza.Morning[day].splice(index,1)
    this.setState({Pizza:pizza})
  }  

  //DELETE AFTERNOONS---------------------
  handleDeleteAfternoonCell(id, day){
    let pizza = this.state.Pizza;
    let index = pizza.Afternoon[day].findIndex(x => x.id === id)
    pizza.Afternoon[day].splice(index,1)
    this.setState({Pizza:pizza})
  }

  render(){
    return(
      <div>
        <h2>Pizza Schedule</h2>
          <table className="table table-bordered">
             
            <AddMorning 
              pizzaMorning={this.state.Pizza} 
              AddMorningCell={this.handleAddMorningCell.bind(this)} 
              DeleteMorningCell={this.handleDeleteMorningCell.bind(this)}
            />
            
            <AddAfternoon 
              pizzaAfternoon={this.state.Pizza} 
              AddAfternoonCell={this.handleAddAfternoonCell.bind(this)}
              DeleteAfternoonCell={this.handleDeleteAfternoonCell.bind(this)}
            />

        </table>
      </div>

    )
  }
}

