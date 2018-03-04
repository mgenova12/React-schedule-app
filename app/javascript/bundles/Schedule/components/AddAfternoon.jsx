import React from 'react'
import {DeleteAfternoon} from './DeleteAfternoon'
import {AfternoonOptions} from './AfternoonOptions'

export class AddAfternoon extends React.Component {
    constructor(){
      super();
      this.state = {
        newCell:{},
        names:[],
        times:[]
      }

      this.onAddCellMonday = this.onAddCellMonday.bind(this);
      this.onAddCellTuesday = this.onAddCellTuesday.bind(this);
      this.onAddCellWednesday = this.onAddCellWednesday.bind(this);
      this.onAddCellThursday = this.onAddCellThursday.bind(this);
      this.onAddCellFriday = this.onAddCellFriday.bind(this);
      this.onAddCellSaturday = this.onAddCellSaturday.bind(this);

      this.getNames = this.getNames.bind(this);
      this.getTimes = this.getTimes.bind(this);
    }

    onAddCellMonday(){
      var parameters = {
        day: "Monday",
        time_of_day: "Afternoon"
      };
      $.ajax({
        type: 'POST',
        url: '/api/v1/pizza',
        dataType: 'json',
        data: parameters,
        cache: false,
        success: function(response){
          this.setState({          
          newCell:{
            id: response.id,
            day: "Monday",
            time_of_day: "Afternoon"
          }}, function(){
            this.props.AddMonCell(this.state.newCell)
          });
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      });
    }

    onAddCellTuesday(){
      var parameters = {
        day: "Tuesday",
        time_of_day: "Afternoon"
      };
      $.ajax({
        type: 'POST',
        url: '/api/v1/pizza',
        dataType: 'json',
        data: parameters,
        cache: false,
        success: function(response){
          this.setState({          
          newCell:{
            id: response.id,
            day: "Tuesday",
            time_of_day: "Afternoon"
          }}, function(){
            this.props.AddTuesCell(this.state.newCell)
          });
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      });
    }

    onAddCellWednesday(){
      var parameters = {
        day: "Wednesday",
        time_of_day: "Afternoon"
      };
      $.ajax({
        type: 'POST',
        url: '/api/v1/pizza',
        dataType: 'json',
        data: parameters,
        cache: false,
        success: function(response){
          this.setState({          
          newCell:{
            id: response.id,
            day: "Wednesday",
            time_of_day: "Afternoon"
          }}, function(){
            this.props.AddWedCell(this.state.newCell)
          });
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      });
    }

    onAddCellThursday(){
      var parameters = {
        day: "Thursday",
        time_of_day: "Afternoon"
      };
      $.ajax({
        type: 'POST',
        url: '/api/v1/pizza',
        dataType: 'json',
        data: parameters,
        cache: false,
        success: function(response){
          this.setState({          
          newCell:{
            id: response.id,
            day: "Thursday",
            time_of_day: "Afternoon"
          }}, function(){
            this.props.AddThursCell(this.state.newCell)
          });
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      });
    }

    onAddCellFriday(){
      var parameters = {
        day: "Friday",
        time_of_day: "Afternoon"
      };
      $.ajax({
        type: 'POST',
        url: '/api/v1/pizza',
        dataType: 'json',
        data: parameters,
        cache: false,
        success: function(response){
          this.setState({          
          newCell:{
            id: response.id,
            day: "Friday",
            time_of_day: "Afternoon"
          }}, function(){
            this.props.AddFriCell(this.state.newCell)
          });
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      });
    }

    onAddCellSaturday(){
      var parameters = {
        day: "Saturday",
        time_of_day: "Afternoon"
      };
      $.ajax({
        type: 'POST',
        url: '/api/v1/pizza',
        dataType: 'json',
        data: parameters,
        cache: false,
        success: function(response){
          this.setState({          
          newCell:{
            id: response.id,
            day: "Saturday",
            time_of_day: "Afternoon"
          }}, function(){
            this.props.AddSatCell(this.state.newCell)
          });
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      });
    }

    onDeleteCellMonday(id){
      this.props.DeleteMonCell(id)
    }    
    onDeleteCellTuesday(id){
      this.props.DeleteTuesCell(id)
    }
    onDeleteCellWednesday(id){
      this.props.DeleteWedCell(id)
    }
    onDeleteCellThursday(id){
      this.props.DeleteThursCell(id)
    }
    onDeleteCellFriday(id){
      this.props.DeleteFriCell(id)
    }
    onDeleteCellSaturday(id){
      this.props.DeleteSatCell(id)
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

  render() {
    let monAfternoon;
    let tuesAfternoon;
    let wedAfternoon;    
    let thursAfternoon;
    let friAfternoon;
    let satAfternoon;

    let nameOptions = this.state.names.map(ele => {
      return <option key={ele.id} value={ele.name}> {ele.name}</option>
    }) 

    let timeOptions = this.state.times.map(ele => {
      return <option key={ele.id} value={ele.time}> {ele.time}</option>
    })

    if(this.props.pizzaAfternoon){
      monAfternoon = this.props.pizzaAfternoon.Afternoon.Monday.map(Mon => {
        return (
          <tr key={Mon.id}><td><AfternoonOptions cellId={Mon.id} time={Mon.hour_id ? this.state.times[Mon.hour_id-1].time : ""} timeOptions={timeOptions} nameOptions={nameOptions} name={Mon.employee_id ? this.state.names[Mon.employee_id-1].name : ""}/><DeleteAfternoon DeleteCell={this.onDeleteCellMonday.bind(this)} cell={Mon.id}/> </td></tr>
        );
      })

      tuesAfternoon = this.props.pizzaAfternoon.Afternoon.Tuesday.map(Tues => {
        return (
          <tr key={Tues.id}><td><AfternoonOptions cellId={Tues.id} time={Tues.hour_id ? this.state.times[Tues.hour_id-1].time : ""} timeOptions={timeOptions} nameOptions={nameOptions} name={Tues.employee_id ? this.state.names[Tues.employee_id-1].name : ""}/><DeleteAfternoon DeleteCell={this.onDeleteCellTuesday.bind(this)} cell={Tues.id}/> </td></tr>
        );
      })  

      wedAfternoon = this.props.pizzaAfternoon.Afternoon.Wednesday.map(Wed => {
        return (
          <tr key={Wed.id}><td><AfternoonOptions cellId={Wed.id} time={Wed.hour_id ? this.state.times[Wed.hour_id-1].time : ""} timeOptions={timeOptions} nameOptions={nameOptions} name={Wed.employee_id ? this.state.names[Wed.employee_id-1].name : ""}/><DeleteAfternoon DeleteCell={this.onDeleteCellWednesday.bind(this)} cell={Wed.id}/> </td></tr>
        );
      })

      thursAfternoon = this.props.pizzaAfternoon.Afternoon.Thursday.map(Thurs => {
        return (
          <tr key={Thurs.id}><td><AfternoonOptions cellId={Thurs.id} time={Thurs.hour_id ? this.state.times[Thurs.hour_id-1].time : ""} timeOptions={timeOptions} nameOptions={nameOptions} name={Thurs.employee_id ? this.state.names[Thurs.employee_id-1].name : ""}/><DeleteAfternoon DeleteCell={this.onDeleteCellThursday.bind(this)} cell={Thurs.id}/></td></tr>
        );
      })

      friAfternoon = this.props.pizzaAfternoon.Afternoon.Friday.map(Fri => {
        return (
          <tr key={Fri.id}><td><AfternoonOptions cellId={Fri.id} time={Fri.hour_id ? this.state.times[Fri.hour_id-1].time : ""} timeOptions={timeOptions} nameOptions={nameOptions} name={Fri.employee_id ? this.state.names[Fri.employee_id-1].name : ""}/><DeleteAfternoon DeleteCell={this.onDeleteCellFriday.bind(this)} cell={Fri.id}/> </td></tr>
        );
      })

      satAfternoon = this.props.pizzaAfternoon.Afternoon.Saturday.map(Sat => {
        return (
          <tr key={Sat.id}><td><AfternoonOptions cellId={Sat.id} time={Sat.hour_id ? this.state.times[Sat.hour_id-1].time : ""} timeOptions={timeOptions} nameOptions={nameOptions} name={Sat.employee_id ? this.state.names[Sat.employee_id-1].name : ""}/><DeleteAfternoon DeleteCell={this.onDeleteCellSaturday.bind(this)} cell={Sat.id}/> </td></tr>
        );
      })                  

    }

    return (
      <tbody>
          <tr><th colSpan={6}>Afternoon</th></tr>
            <tr>
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Monday</th>
                          </tr>
                      </thead>
                      <tbody>{monAfternoon}</tbody>
                  </table>
              </td>
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Tuesday</th>
                          </tr>
                      </thead>
                      <tbody>{tuesAfternoon}</tbody>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Wednesday</th>
                          </tr>
                      </thead>
                      <tbody>{wedAfternoon}</tbody>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Thursday</th>
                          </tr>
                      </thead>
                      <tbody>{thursAfternoon}</tbody>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Friday</th>
                          </tr>
                      </thead>
                      <tbody>{friAfternoon}</tbody>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Saturday</th>
                          </tr>
                      </thead>
                      <tbody>{satAfternoon}</tbody>
                  </table>
              </td>
            </tr>
            <tr> 
              <td><button onClick={this.onAddCellMonday}>Add +</button></td>
              <td><button onClick={this.onAddCellTuesday}>Add +</button></td>
              <td><button onClick={this.onAddCellWednesday}>Add +</button></td>
              <td><button onClick={this.onAddCellThursday}>Add +</button></td>
              <td><button onClick={this.onAddCellFriday}>Add +</button></td>
              <td><button onClick={this.onAddCellSaturday}>Add +</button></td>
            </tr>
        </tbody>
      )
  }

}