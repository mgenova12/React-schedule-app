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

  render(){
    return(
      <div>
        <h2>Pizza Schedule</h2>
          <table className="table table-bordered">
             
            <AddMorning pizzaMorning={this.state.Pizza} />
            <AddAfternoon pizzaAfternoon={this.state.Pizza} />

        </table>
      </div>

    )
  }
}

