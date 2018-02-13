import React from 'react'

export class AddMorning extends React.Component {

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
          <tr key={Mon.id}><td><div>Name: {Mon.name} <br/>Time: {Mon.time}</div></td></tr>
        );
      })

      tuesMorning = this.props.pizzaMorning.Morning.Tuesday.map(Tues => {
        return (
          <tr key={Tues.id}><td><div>Name: {Tues.name} <br/>Time: {Tues.time}</div></td></tr>
        );
      })  

      wedMorning = this.props.pizzaMorning.Morning.Wednesday.map(Wed => {
        return (
          <tr key={Wed.id}><td><div>Name: {Wed.name} <br/>Time: {Wed.time}</div></td></tr>
        );
      })

      thursMorning = this.props.pizzaMorning.Morning.Thursday.map(Thurs => {
        return (
          <tr key={Thurs.id}><td><div>Name: {Thurs.name} <br/>Time: {Thurs.time}</div></td></tr>
        );
      })

      friMorning = this.props.pizzaMorning.Morning.Friday.map(Fri => {
        return (
          <tr key={Fri.id}><td><div>Name: {Fri.name} <br/>Time: {Fri.time}</div></td></tr>
        );
      })

      satMorning = this.props.pizzaMorning.Morning.Saturday.map(Sat => {
        return (
          <tr key={Sat.id}><td><div>Name: {Sat.name} <br/>Time: {Sat.time}</div></td></tr>
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

