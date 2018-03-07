import React from 'react'
import {DeleteMorning} from './DeleteMorning'
import {MorningOptions} from './MorningOptions'

export class AddMorning extends React.Component {
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
            this.props.AddMorningCell(this.state.newCell, this.state.newCell.day)
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
            this.props.AddMorningCell(this.state.newCell, this.state.newCell.day)
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
            this.props.AddMorningCell(this.state.newCell, this.state.newCell.day)
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
            this.props.AddMorningCell(this.state.newCell, this.state.newCell.day)
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
            this.props.AddMorningCell(this.state.newCell, this.state.newCell.day)
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
            this.props.AddMorningCell(this.state.newCell, this.state.newCell.day)
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
    let monMorning;
    let tuesMorning;
    let wedMorning;    
    let thursMorning;
    let friMorning;
    let satMorning;

    let nameOptions = this.state.names.map(ele => {
      return <option key={ele.id} value={ele.name}> {ele.name}</option>
    }) 

    let timeOptions = this.state.times.map(ele => {
      if (ele.am_pm === 'AM'){
        return <option key={ele.id} value={ele.time}> {ele.time}</option>
      }
    })


    if(this.props.pizzaMorning){
      monMorning = this.props.pizzaMorning.Morning.Monday.map(Mon => {
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
          <tr key={Mon.id}><td><MorningOptions 
            cellId={Mon.id} 
            time={Mon.hour_id ? monTime : ""} 
            timeOptions={timeOptions} 
            nameOptions={nameOptions} 
            name={Mon.employee_id ? monName : ""}/>
          <DeleteMorning 
            DeleteCell={this.onDeleteCellMonday.bind(this)} 
            cell={Mon.id}/> </td></tr>
        );
      })

      tuesMorning = this.props.pizzaMorning.Morning.Tuesday.map(Tues => {
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
          <tr key={Tues.id}><td><MorningOptions 
            cellId={Tues.id} 
            time={Tues.hour_id ? tuesTime : ""} 
            timeOptions={timeOptions} 
            nameOptions={nameOptions} 
            name={Tues.employee_id ? tuesName : ""}/>
          <DeleteMorning 
            DeleteCell={this.onDeleteCellTuesday.bind(this)} 
            cell={Tues.id}/> </td></tr>
        );
      })  

      wedMorning = this.props.pizzaMorning.Morning.Wednesday.map(Wed => {
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
          <tr key={Wed.id}><td><MorningOptions 
          cellId={Wed.id} 
          time={Wed.hour_id ? wedTime : ""} 
          timeOptions={timeOptions} 
          nameOptions={nameOptions} 
          name={Wed.employee_id ? wedName : ""}/>
          <DeleteMorning 
          DeleteCell={this.onDeleteCellWednesday.bind(this)} 
          cell={Wed.id}/> </td></tr>
        );
      })

      thursMorning = this.props.pizzaMorning.Morning.Thursday.map(Thurs => {
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
          <tr key={Thurs.id}><td><MorningOptions 
          cellId={Thurs.id} 
          time={Thurs.hour_id ? thursTime : ""} 
          timeOptions={timeOptions} 
          nameOptions={nameOptions} 
          name={Thurs.employee_id ? thursName : ""}/>
          <DeleteMorning 
          DeleteCell={this.onDeleteCellThursday.bind(this)} 
          cell={Thurs.id}/> </td></tr>
        );
      })

      friMorning = this.props.pizzaMorning.Morning.Friday.map(Fri => {
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
          <tr key={Fri.id}><td>
          <MorningOptions 
            cellId={Fri.id} 
            time={Fri.hour_id ? friTime : ""} 
            timeOptions={timeOptions} 
            nameOptions={nameOptions} 
            name={Fri.employee_id ? friName : ""}/>
          <DeleteMorning 
            DeleteCell={this.onDeleteCellFriday.bind(this)} 
            cell={Fri.id}/> </td></tr>
        );
      })

      satMorning = this.props.pizzaMorning.Morning.Saturday.map(Sat => {
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
          <tr key={Sat.id}><td><MorningOptions 
            cellId={Sat.id} 
            time={Sat.hour_id ? satTime : ""} 
            timeOptions={timeOptions} 
            nameOptions={nameOptions} 
            name={Sat.employee_id ? satName : ""}/>
          <DeleteMorning 
            DeleteCell={this.onDeleteCellSaturday.bind(this)} 
            cell={Sat.id}/> </td></tr>
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

