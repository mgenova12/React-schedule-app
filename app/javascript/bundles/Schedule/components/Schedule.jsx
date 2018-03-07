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
  handleDeleteMonMorningCell(id){
    let pizza = this.state.Pizza;
    let index = pizza.Morning.Monday.findIndex(x => x.id === id)
    pizza.Morning.Monday.splice(index,1)
    this.setState({Pizza:pizza})
  }  
  handleDeleteTuesMorningCell(id){
    let pizza = this.state.Pizza;
    let index = pizza.Morning.Tuesday.findIndex(x => x.id === id)
    pizza.Morning.Tuesday.splice(index,1)
    this.setState({Pizza:pizza})
  }
  handleDeleteWedMorningCell(id){
    let pizza = this.state.Pizza;
    let index = pizza.Morning.Wednesday.findIndex(x => x.id === id)
    pizza.Morning.Wednesday.splice(index,1)
    this.setState({Pizza:pizza})
  }
  handleDeleteThursMorningCell(id){
    let pizza = this.state.Pizza;
    let index = pizza.Morning.Thursday.findIndex(x => x.id === id)
    pizza.Morning.Thursday.splice(index,1)
    this.setState({Pizza:pizza})
  }
  handleDeleteFriMorningCell(id){
    let pizza = this.state.Pizza;
    let index = pizza.Morning.Friday.findIndex(x => x.id === id)
    pizza.Morning.Friday.splice(index,1)
    this.setState({Pizza:pizza})
  }
  handleDeleteSatMorningCell(id){
    let pizza = this.state.Pizza;
    let index = pizza.Morning.Saturday.findIndex(x => x.id === id)
    pizza.Morning.Saturday.splice(index,1)
    this.setState({Pizza:pizza})
  }

  //DELETE AFTERNOONS------------------------
  handleDeleteMonAfternoonCell(id){
    let pizza = this.state.Pizza;
    let index = pizza.Afternoon.Monday.findIndex(x => x.id === id)
    pizza.Afternoon.Monday.splice(index,1)
    this.setState({Pizza:pizza})
  }  
  handleDeleteTuesAfternoonCell(id){
    let pizza = this.state.Pizza;
    let index = pizza.Afternoon.Tuesday.findIndex(x => x.id === id)
    pizza.Afternoon.Tuesday.splice(index,1)
    this.setState({Pizza:pizza})
  }
  handleDeleteWedAfternoonCell(id){
    let pizza = this.state.Pizza;
    let index = pizza.Afternoon.Wednesday.findIndex(x => x.id === id)
    pizza.Afternoon.Wednesday.splice(index,1)
    this.setState({Pizza:pizza})
  }
  handleDeleteThursAfternoonCell(id){
    let pizza = this.state.Pizza;
    let index = pizza.Afternoon.Thursday.findIndex(x => x.id === id)
    pizza.Afternoon.Thursday.splice(index,1)
    this.setState({Pizza:pizza})
  }
  handleDeleteFriAfternoonCell(id){
    let pizza = this.state.Pizza;
    let index = pizza.Afternoon.Friday.findIndex(x => x.id === id)
    pizza.Afternoon.Friday.splice(index,1)
    this.setState({Pizza:pizza})
  }
  handleDeleteSatAfternoonCell(id){
    let pizza = this.state.Pizza;
    let index = pizza.Afternoon.Saturday.findIndex(x => x.id === id)
    pizza.Afternoon.Saturday.splice(index,1)
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
              
              DeleteMonCell={this.handleDeleteMonMorningCell.bind(this)} 
              DeleteTuesCell={this.handleDeleteTuesMorningCell.bind(this)} 
              DeleteWedCell={this.handleDeleteWedMorningCell.bind(this)} 
              DeleteThursCell={this.handleDeleteThursMorningCell.bind(this)} 
              DeleteFriCell={this.handleDeleteFriMorningCell.bind(this)} 
              DeleteSatCell={this.handleDeleteSatMorningCell.bind(this)} 
            />
            
            <AddAfternoon 
              pizzaAfternoon={this.state.Pizza} 
              AddAfternoonCell={this.handleAddAfternoonCell.bind(this)}

              DeleteMonCell={this.handleDeleteMonAfternoonCell.bind(this)} 
              DeleteTuesCell={this.handleDeleteTuesAfternoonCell.bind(this)} 
              DeleteWedCell={this.handleDeleteWedAfternoonCell.bind(this)} 
              DeleteThursCell={this.handleDeleteThursAfternoonCell.bind(this)} 
              DeleteFriCell={this.handleDeleteFriAfternoonCell.bind(this)} 
              DeleteSatCell={this.handleDeleteSatAfternoonCell.bind(this)} 
            />

        </table>
      </div>

    )
  }
}

