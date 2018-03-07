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

      this.getNames = this.getNames.bind(this);
      this.getTimes = this.getTimes.bind(this);
    }

    onAddCellAfternoon(day){
      var parameters = {
        day: day,
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
            day: day,
            time_of_day: "Afternoon"
          }}, function(){
            this.props.AddAfternoonCell(this.state.newCell, this.state.newCell.day)
          });
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      });
    }

    onDeleteAfternoonCell(id, day){
      this.props.DeleteAfternoonCell(id, day)
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
      if (ele.am_pm === 'PM'){
        return <option key={ele.id} value={ele.time}> {ele.time}</option>
      }
    })

    if(this.props.pizzaAfternoon){
      monAfternoon = this.props.pizzaAfternoon.Afternoon.Monday.map(Mon => {
        let monName
        let monTime

        for(var i=0; i<this.state.names.length; i++){
          if (this.state.names[i].id === Mon.employee_id){
            monName = this.state.names[i].name
          }
        }
        for(var i=0; i<this.state.times.length; i++){
          if (this.state.times[i].id === Mon.hour_id){
            monTime = this.state.times[i].time
          }
        }  
        return (
          <tr key={Mon.id}><td><AfternoonOptions 
            cellId={Mon.id} 
            time={Mon.hour_id ? monTime : ""} 
            timeOptions={timeOptions} 
            nameOptions={nameOptions} 
            name={Mon.employee_id ? monName : ""}/>
          <DeleteAfternoon 
            DeleteCell={this.onDeleteAfternoonCell.bind(this)} 
            day={Mon.day}
            cell={Mon.id}/> </td></tr>
        );
      })

      tuesAfternoon = this.props.pizzaAfternoon.Afternoon.Tuesday.map(Tues => {
        let tuesTime
        let tuesName

        for(var i=0; i<this.state.names.length; i++){
          if (this.state.names[i].id === Tues.employee_id){
            tuesName = this.state.names[i].name
          }
        }
        for(var i=0; i<this.state.times.length; i++){
          if (this.state.times[i].id === Tues.hour_id){
            tuesTime = this.state.times[i].time
          }
        }        
        return (
          <tr key={Tues.id}><td><AfternoonOptions 
            cellId={Tues.id} 
            time={Tues.hour_id ? tuesTime : ""} 
            timeOptions={timeOptions} 
            nameOptions={nameOptions} 
            name={Tues.employee_id ? tuesName : ""}/>
          <DeleteAfternoon 
            DeleteCell={this.onDeleteAfternoonCell.bind(this)} 
            day={Tues.day}
            cell={Tues.id}/> </td></tr>
        );
      })  

      wedAfternoon = this.props.pizzaAfternoon.Afternoon.Wednesday.map(Wed => {
        let wedTime
        let wedName

        for(var i=0; i<this.state.names.length; i++){
          if (this.state.names[i].id === Wed.employee_id){
            wedName = this.state.names[i].name
          }
        }
        for(var i=0; i<this.state.times.length; i++){
          if (this.state.times[i].id === Wed.hour_id){
            wedTime = this.state.times[i].time
          }
        }        
        return (
          <tr key={Wed.id}><td><AfternoonOptions 
            cellId={Wed.id} 
            time={Wed.hour_id ? wedTime : ""} 
            timeOptions={timeOptions} 
            nameOptions={nameOptions} 
            name={Wed.employee_id ? wedName : ""}/>
          <DeleteAfternoon 
            DeleteCell={this.onDeleteAfternoonCell.bind(this)} 
            day={Wed.day}
            cell={Wed.id}/> </td></tr>
        );
      })

      thursAfternoon = this.props.pizzaAfternoon.Afternoon.Thursday.map(Thurs => {
        let thursTime
        let thursName

        for(var i=0; i<this.state.names.length; i++){
          if (this.state.names[i].id === Thurs.employee_id){
            thursName = this.state.names[i].name
          }
        }
        for(var i=0; i<this.state.times.length; i++){
          if (this.state.times[i].id === Thurs.hour_id){
            thursTime = this.state.times[i].time
          }
        }         
        return (
          <tr key={Thurs.id}><td><AfternoonOptions 
            cellId={Thurs.id} 
            time={Thurs.hour_id ? thursTime : ""} 
            timeOptions={timeOptions} 
            nameOptions={nameOptions} 
            name={Thurs.employee_id ? thursName : ""}/>
          <DeleteAfternoon 
            DeleteCell={this.onDeleteAfternoonCell.bind(this)} 
            day={Thurs.day}
            cell={Thurs.id}/></td></tr>
        );
      })

      friAfternoon = this.props.pizzaAfternoon.Afternoon.Friday.map(Fri => {
        let friTime
        let friName

        for(var i=0; i<this.state.names.length; i++){
          if (this.state.names[i].id === Fri.employee_id){
            friName = this.state.names[i].name
          }
        }
        for(var i=0; i<this.state.times.length; i++){
          if (this.state.times[i].id === Fri.hour_id){
            friTime = this.state.times[i].time
          }
        }       
        return (
          <tr key={Fri.id}><td><AfternoonOptions 
            cellId={Fri.id} 
            time={Fri.hour_id ? friTime : ""} 
            timeOptions={timeOptions} 
            nameOptions={nameOptions} 
            name={Fri.employee_id ? friName : ""}/>
          <DeleteAfternoon 
            DeleteCell={this.onDeleteAfternoonCell.bind(this)} 
            day={Fri.day}
            cell={Fri.id}/> </td></tr>
        );
      })

      satAfternoon = this.props.pizzaAfternoon.Afternoon.Saturday.map(Sat => {
        let satTime
        let satName

        for(var i=0; i<this.state.names.length; i++){
          if (this.state.names[i].id === Sat.employee_id){
            satName = this.state.names[i].name
          }
        }
        for(var i=0; i<this.state.times.length; i++){
          if (this.state.times[i].id === Sat.hour_id){
            satTime = this.state.times[i].time
          }
        }       
        return (
          <tr key={Sat.id}><td><AfternoonOptions 
            cellId={Sat.id} 
            time={Sat.hour_id ? satTime : ""} 
            timeOptions={timeOptions} 
            nameOptions={nameOptions} 
            name={Sat.employee_id ? satName : ""}/>
          <DeleteAfternoon 
            DeleteCell={this.onDeleteAfternoonCell.bind(this)} 
            day={Sat.day}
            cell={Sat.id}/> </td></tr>
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
              <td><button onClick={this.onAddCellAfternoon.bind(this, 'Monday')}>Add +</button></td>
              <td><button onClick={this.onAddCellAfternoon.bind(this, 'Tuesday')}>Add +</button></td>
              <td><button onClick={this.onAddCellAfternoon.bind(this, 'Wednesday')}>Add +</button></td>
              <td><button onClick={this.onAddCellAfternoon.bind(this, 'Thursday')}>Add +</button></td>
              <td><button onClick={this.onAddCellAfternoon.bind(this, 'Friday')}>Add +</button></td>
              <td><button onClick={this.onAddCellAfternoon.bind(this, 'Saturday')}>Add +</button></td>
            </tr>
        </tbody>
      )
  }

}