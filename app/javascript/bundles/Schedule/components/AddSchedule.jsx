import React from 'react'
import {DeleteMorning} from './DeleteMorning'
import {MorningOptions} from './MorningOptions'
import {DeleteAfternoon} from './DeleteAfternoon'
import {AfternoonOptions} from './AfternoonOptions'

export class AddSchedule extends React.Component {
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

    onAddCellMorning(day){
      var parameters = {
        day: day,
        time_of_day: this.props.TimeOfDay
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
            time_of_day: this.props.TimeOfDay
          }}, function(){
            this.props.AddMorningCell(this.state.newCell, this.state.newCell.day)
          });
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      });
    }

    onDeleteMorningCell(id, day){
      this.props.DeleteMorningCell(id, day)
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

    getDates(dayNum){
      var curr = new Date;
      var first = curr.getDate() - curr.getDay();  
      return new Date(curr.setDate(first+dayNum)).toLocaleDateString();
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
      monMorning = this.props.pizzaMorning[this.props.TimeOfDay].Monday.map(Mon => {
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
            DeleteCell={this.onDeleteMorningCell.bind(this)} 
            day={Mon.day}
            cell={Mon.id}/> </td></tr>
        );
      })

      tuesMorning = this.props.pizzaMorning[this.props.TimeOfDay].Tuesday.map(Tues => {
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
            DeleteCell={this.onDeleteMorningCell.bind(this)}
            day={Tues.day} 
            cell={Tues.id}/> </td></tr>
        );
      })  

      wedMorning = this.props.pizzaMorning[this.props.TimeOfDay].Wednesday.map(Wed => {
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
          DeleteCell={this.onDeleteMorningCell.bind(this)} 
          day={Wed.day}
          cell={Wed.id}/> </td></tr>
        );
      })

      thursMorning = this.props.pizzaMorning[this.props.TimeOfDay].Thursday.map(Thurs => {
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
          DeleteCell={this.onDeleteMorningCell.bind(this)} 
          day={Thurs.day}
          cell={Thurs.id}/> </td></tr>
        );
      })

      friMorning = this.props.pizzaMorning[this.props.TimeOfDay].Friday.map(Fri => {
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
            DeleteCell={this.onDeleteMorningCell.bind(this)}
            day={Fri.day} 
            cell={Fri.id}/> </td></tr>
        );
      })

      satMorning = this.props.pizzaMorning[this.props.TimeOfDay].Saturday.map(Sat => {
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
            DeleteCell={this.onDeleteMorningCell.bind(this)}
            day={Sat.day} 
            cell={Sat.id}/> </td></tr>
        );
      })                  
    }

    return (
      <tbody>
          <tr><th colSpan={6}>{this.props.TimeOfDay}</th></tr>
            <tr>
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Monday {this.getDates(1)} </th>
                          </tr>
                      </thead>
                      <tbody>{monMorning}</tbody>
                  </table>
              </td>
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Tuesday {this.getDates(2)}</th>
                          </tr>
                      </thead>
                      <tbody>{tuesMorning}</tbody>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Wednesday {this.getDates(3)}</th>
                          </tr>
                      </thead>
                      <tbody>{wedMorning}</tbody>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Thursday {this.getDates(4)}</th>
                          </tr>
                      </thead>
                      <tbody>{thursMorning}</tbody>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Friday {this.getDates(5)}</th>
                          </tr>
                      </thead>
                      <tbody>{friMorning}</tbody>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Saturday {this.getDates(6)}</th>
                          </tr>
                      </thead>
                      <tbody>{satMorning}</tbody>
                  </table>
              </td>
            </tr>
            <tr> 
              <td><button onClick={this.onAddCellMorning.bind(this, 'Monday')}>Add +</button></td>
              <td><button onClick={this.onAddCellMorning.bind(this, 'Tuesday')}>Add +</button></td>
              <td><button onClick={this.onAddCellMorning.bind(this, 'Wednesday')}>Add +</button></td>
              <td><button onClick={this.onAddCellMorning.bind(this, 'Thursday')}>Add +</button></td>
              <td><button onClick={this.onAddCellMorning.bind(this, 'Friday')}>Add +</button></td>
              <td><button onClick={this.onAddCellMorning.bind(this, 'Saturday')}>Add +</button></td>
            </tr>
        </tbody>
      )

  }

}

