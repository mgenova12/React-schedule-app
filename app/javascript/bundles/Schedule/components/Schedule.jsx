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
  handleAddMonMorningCell(cell){
    let pizza = this.state.Pizza    
    pizza.Morning.Monday.push(cell)
    this.setState({Pizza:pizza})
  }
  handleAddTuesMorningCell(cell){
    let pizza = this.state.Pizza    
    pizza.Morning.Tuesday.push(cell)
    this.setState({Pizza:pizza})
  }
  handleAddWedMorningCell(cell){
    let pizza = this.state.Pizza    
    pizza.Morning.Wednesday.push(cell)
    this.setState({Pizza:pizza})
  }
  handleAddThursMorningCell(cell){
    let pizza = this.state.Pizza    
    pizza.Morning.Thursday.push(cell)
    this.setState({Pizza:pizza})
  }
  handleAddFriMorningCell(cell){
    let pizza = this.state.Pizza    
    pizza.Morning.Friday.push(cell)
    this.setState({Pizza:pizza})
  }
  handleAddSatMorningCell(cell){
    let pizza = this.state.Pizza    
    pizza.Morning.Saturday.push(cell)
    this.setState({Pizza:pizza})
  }
//ADD AFTERNOONS------------------------
  handleAddMonAfternoonCell(cell){
    let pizza = this.state.Pizza    
    pizza.Afternoon.Monday.push(cell)
    this.setState({Pizza:pizza})
  }
  handleAddTuesAfternoonCell(cell){
    let pizza = this.state.Pizza    
    pizza.Afternoon.Tuesday.push(cell)
    this.setState({Pizza:pizza})
  }
  handleAddWedAfternoonCell(cell){
    let pizza = this.state.Pizza    
    pizza.Afternoon.Wednesday.push(cell)
    this.setState({Pizza:pizza})
  }
  handleAddThursAfternoonCell(cell){
    let pizza = this.state.Pizza    
    pizza.Afternoon.Thursday.push(cell)
    this.setState({Pizza:pizza})
  }
  handleAddFriAfternoonCell(cell){
    let pizza = this.state.Pizza    
    pizza.Afternoon.Friday.push(cell)
    this.setState({Pizza:pizza})
  }
  handleAddSatAfternoonCell(cell){
    let pizza = this.state.Pizza    
    pizza.Afternoon.Saturday.push(cell)
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
              AddMonCell={this.handleAddMonMorningCell.bind(this)} 
              AddTuesCell={this.handleAddTuesMorningCell.bind(this)} 
              AddWedCell={this.handleAddWedMorningCell.bind(this)} 
              AddThursCell={this.handleAddThursMorningCell.bind(this)} 
              AddFriCell={this.handleAddFriMorningCell.bind(this)} 
              AddSatCell={this.handleAddSatMorningCell.bind(this)} 
              
              DeleteMonCell={this.handleDeleteMonMorningCell.bind(this)} 
              DeleteTuesCell={this.handleDeleteTuesMorningCell.bind(this)} 
              DeleteWedCell={this.handleDeleteWedMorningCell.bind(this)} 
              DeleteThursCell={this.handleDeleteThursMorningCell.bind(this)} 
              DeleteFriCell={this.handleDeleteFriMorningCell.bind(this)} 
              DeleteSatCell={this.handleDeleteSatMorningCell.bind(this)} 
            />
            
            <AddAfternoon pizzaAfternoon={this.state.Pizza} 
              AddMonCell={this.handleAddMonAfternoonCell.bind(this)} 
              AddTuesCell={this.handleAddTuesAfternoonCell.bind(this)} 
              AddWedCell={this.handleAddWedAfternoonCell.bind(this)} 
              AddThursCell={this.handleAddThursAfternoonCell.bind(this)} 
              AddFriCell={this.handleAddFriAfternoonCell.bind(this)} 
              AddSatCell={this.handleAddSatAfternoonCell.bind(this)} 

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

