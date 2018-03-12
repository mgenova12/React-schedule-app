import React from 'react';

export class SubmitSchedule extends React.Component {

  submitSchedule(pizzaSchedule){
    console.log(pizzaSchedule)
  }

  render(){
    return(
      <div>
        <button onClick={this.submitSchedule.bind(this, this.props.PizzaSchedule)}>Submit!</button>
      </div>

    )
  }
}

