import React from 'react'
import {DeleteMorning} from './DeleteMorning'
import {MorningOptions} from './MorningOptions'

export class AddMorning extends React.Component {
    constructor(){
      super();
      this.state = {
        newCell:{}
      }
      this.onAddCellMonday = this.onAddCellMonday.bind(this);
      this.onAddCellTuesday = this.onAddCellTuesday.bind(this);
      this.onAddCellWednesday = this.onAddCellWednesday.bind(this);
      this.onAddCellThursday = this.onAddCellThursday.bind(this);
      this.onAddCellFriday = this.onAddCellFriday.bind(this);
      this.onAddCellSaturday = this.onAddCellSaturday.bind(this);
    }

    onAddCellMonday(){
      var parameters = {
        day: "Monday",
        time_of_day: "Morning"
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
            time_of_day: "Morning"
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
        time_of_day: "Morning"
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
            time_of_day: "Morning"
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
        time_of_day: "Morning"
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
            time_of_day: "Morning"
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
        time_of_day: "Morning"
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
            time_of_day: "Morning"
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
        time_of_day: "Morning"
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
            time_of_day: "Morning"
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
        time_of_day: "Morning"
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
            time_of_day: "Morning"
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

  render() {
    let monMorning;
    let tuesMorning;
    let wedMorning;    
    let thursMorning;
    let friMorning;
    let satMorning;

    if(this.props.pizzaMorning){
      monMorning = this.props.pizzaMorning.Morning.Monday.map(Mon => {
        return (
          <tr key={Mon.id}><td><MorningOptions cellId={Mon.id}/><DeleteMorning DeleteCell={this.onDeleteCellMonday.bind(this)} cell={Mon.id}/> </td></tr>
        );
      })

      tuesMorning = this.props.pizzaMorning.Morning.Tuesday.map(Tues => {
        return (
          <tr key={Tues.id}><td><MorningOptions cellId={Tues.id}/><DeleteMorning DeleteCell={this.onDeleteCellTuesday.bind(this)} cell={Tues.id}/> </td></tr>
        );
      })  

      wedMorning = this.props.pizzaMorning.Morning.Wednesday.map(Wed => {
        return (
          <tr key={Wed.id}><td><MorningOptions cellId={Wed.id}/><DeleteMorning DeleteCell={this.onDeleteCellWednesday.bind(this)} cell={Wed.id}/> </td></tr>
        );
      })

      thursMorning = this.props.pizzaMorning.Morning.Thursday.map(Thurs => {
        return (
          <tr key={Thurs.id}><td><MorningOptions cellId={Thurs.id}/><DeleteMorning DeleteCell={this.onDeleteCellThursday.bind(this)} cell={Thurs.id}/></td></tr>
        );
      })

      friMorning = this.props.pizzaMorning.Morning.Friday.map(Fri => {
        return (
          <tr key={Fri.id}><td><MorningOptions cellId={Fri.id}/><DeleteMorning DeleteCell={this.onDeleteCellFriday.bind(this)} cell={Fri.id}/> </td></tr>
        );
      })

      satMorning = this.props.pizzaMorning.Morning.Saturday.map(Sat => {
        return (
          <tr key={Sat.id}><td><MorningOptions cellId={Sat.id}/><DeleteMorning DeleteCell={this.onDeleteCellSaturday.bind(this)} cell={Sat.id}/> </td></tr>
        );
      })                  

    }

    return (
      <tbody>
          <tr><th colSpan={6}>Morning</th></tr>
            <tr>
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Monday</th>
                          </tr>
                      </thead>
                      <tbody>{monMorning}</tbody>
                  </table>
              </td>
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Tuesday</th>
                          </tr>
                      </thead>
                      <tbody>{tuesMorning}</tbody>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Wednesday</th>
                          </tr>
                      </thead>
                      <tbody>{wedMorning}</tbody>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Thursday</th>
                          </tr>
                      </thead>
                      <tbody>{thursMorning}</tbody>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Friday</th>
                          </tr>
                      </thead>
                      <tbody>{friMorning}</tbody>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Saturday</th>
                          </tr>
                      </thead>
                      <tbody>{satMorning}</tbody>
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

