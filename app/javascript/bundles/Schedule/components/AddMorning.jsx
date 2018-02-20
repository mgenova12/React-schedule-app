import React from 'react'

export class AddMorning extends React.Component {
    constructor(){
      super();
      this.state = {
        newCell:{}

      }
      this.onAddCellMonday = this.onAddCellMonday.bind(this);
      this.onAddCellTuesday = this.onAddCellTuesday.bind(this);
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
          console.log(response)
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


    onDeleteCellMonday(id){
      this.props.DeleteCell(id)

      $.ajax({
        type: 'DELETE',
        url: '/api/v1/pizza/' + id,
        dataType: 'json',
        cache: false,
        success: function(data){
          // console.log(data)
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      });
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
          <tr key={Mon.id}><td><div>Name: {Mon.name} <br/>Time: {Mon.time}</div><button onClick={this.onDeleteCellMonday.bind(this, Mon.id)}>Delete</button></td></tr>
        );
      })

      tuesMorning = this.props.pizzaMorning.Morning.Tuesday.map(Tues => {
        return (
          <tr key={Tues.id}><td><div>Name: {Tues.name} <br/>Time: {Tues.time}</div><button>Delete</button></td></tr>
        );
      })  

      wedMorning = this.props.pizzaMorning.Morning.Wednesday.map(Wed => {
        return (
          <tr key={Wed.id}><td><div>Name: {Wed.name} <br/>Time: {Wed.time}</div><button>Delete</button></td></tr>
        );
      })

      thursMorning = this.props.pizzaMorning.Morning.Thursday.map(Thurs => {
        return (
          <tr key={Thurs.id}><td><div>Name: {Thurs.name} <br/>Time: {Thurs.time}</div><button>Delete</button></td></tr>
        );
      })

      friMorning = this.props.pizzaMorning.Morning.Friday.map(Fri => {
        return (
          <tr key={Fri.id}><td><div>Name: {Fri.name} <br/>Time: {Fri.time}</div><button>Delete</button></td></tr>
        );
      })

      satMorning = this.props.pizzaMorning.Morning.Saturday.map(Sat => {
        return (
          <tr key={Sat.id}><td><div>Name: {Sat.name} <br/>Time: {Sat.time}</div><button>Delete</button></td></tr>
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

