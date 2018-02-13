import React from 'react'

export class AddAfternoon extends React.Component {

  render() {
    let monAfternoon 
    let tuesAfternoon 
    let wedAfternoon 
    let thursAfternoon 
    let friAfternoon 
    let satAfternoon 

    if(this.props.pizzaAfternoon){

      monAfternoon = this.props.pizzaAfternoon.Afternoon.Monday.map(Mon => {
        return (
          <tr key={Mon.id}><td><div>Name: {Mon.name} <br/>Time: {Mon.time}</div></td></tr>
        );
      })

      tuesAfternoon = this.props.pizzaAfternoon.Afternoon.Tuesday.map(Tues => {
        return (
          <tr key={Tues.id}><td><div>Name: {Tues.name} <br/>Time: {Tues.time}</div></td></tr>
        );
      })

      wedAfternoon = this.props.pizzaAfternoon.Afternoon.Wednesday.map(Wed => {
        return (
          <tr key={Wed.id}><td><div>Name: {Wed.name} <br/>Time: {Wed.time}</div></td></tr>
        );
      })

      thursAfternoon = this.props.pizzaAfternoon.Afternoon.Thursday.map(Thurs => {
        return (
          <tr key={Thurs.id}><td><div>Name: {Thurs.name} <br/>Time: {Thurs.time}</div></td></tr>
        );
      })

      friAfternoon = this.props.pizzaAfternoon.Afternoon.Friday.map(Fri => {
        return (
          <tr key={Fri.id}><td><div>Name: {Fri.name} <br/>Time: {Fri.time}</div></td></tr>
        );
      })

      satAfternoon = this.props.pizzaAfternoon.Afternoon.Saturday.map(Sat => {
        return (
          <tr key={Sat.id}><td><div>Name: {Sat.name} <br/>Time: {Sat.time}</div></td></tr>
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