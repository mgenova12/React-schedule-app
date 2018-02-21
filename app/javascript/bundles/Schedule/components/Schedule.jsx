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

  handleAddMonMorningCell(cell){
    console.log(cell);
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


  handleDeleteMorningCell(id){
    let pizza = this.state.Pizza;
    let index = pizza.Morning.Monday.findIndex(x => x.id === id)
    pizza.Morning.Monday.splice(index,1)
    this.setState({Pizza:pizza})
  }

  render(){
    return(
      <div>
        <h2>Pizza Schedule</h2>
          <table className="table table-bordered">
             
            <AddMorning pizzaMorning={this.state.Pizza} DeleteCell={this.handleDeleteMorningCell.bind(this)} AddMonCell={this.handleAddMonMorningCell.bind(this)} AddTuesCell={this.handleAddTuesMorningCell.bind(this)} AddWedCell={this.handleAddWedMorningCell.bind(this)} AddThursCell={this.handleAddThursMorningCell.bind(this)} AddFriCell={this.handleAddFriMorningCell.bind(this)} AddSatCell={this.handleAddSatMorningCell.bind(this)} />
            
            <AddAfternoon pizzaAfternoon={this.state.Pizza} />

        </table>
      </div>

    )
  }
}

