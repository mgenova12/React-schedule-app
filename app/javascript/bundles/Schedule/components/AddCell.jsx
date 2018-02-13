import React from 'react'

export class AddCell extends React.Component {

  render() {
    let monMorning;
    let monAfternoon 
    let tuesMorning;
    let tuesAfternoon 
    let wedMorning;
    let wedAfternoon 
    let thursMorning;
    let thursAfternoon 
    let friMorning;
    let friAfternoon 
    let satMorning;
    let satAfternoon 

    if(this.props.pizza){
      monMorning = this.props.pizza.Monday.Morning.map(Mon => {
        return (
          <tr key={Mon.id}><td><div>Name: {Mon.name} <br/>Time: {Mon.time}</div></td></tr>
        );
      })

      monAfternoon = this.props.pizza.Monday.Afternoon.map(Mon => {
        return (
          <tr key={Mon.id}><td><div>Name: {Mon.name} <br/>Time: {Mon.time}</div></td></tr>
        );
      })

      tuesMorning = this.props.pizza.Tuesday.Morning.map(Tues => {
        return (
          <tr key={Tues.id}><td><div>Name: {Tues.name} <br/>Time: {Tues.time}</div></td></tr>
        );
      })

      tuesAfternoon = this.props.pizza.Tuesday.Afternoon.map(Tues => {
        return (
          <tr key={Tues.id}><td><div>Name: {Tues.name} <br/>Time: {Tues.time}</div></td></tr>
        );
      })

      wedMorning = this.props.pizza.Wednesday.Morning.map(Wed => {
        return (
          <tr key={Wed.id}><td><div>Name: {Wed.name} <br/>Time: {Wed.time}</div></td></tr>
        );
      })

      wedAfternoon = this.props.pizza.Wednesday.Afternoon.map(Wed => {
        return (
          <tr key={Wed.id}><td><div>Name: {Wed.name} <br/>Time: {Wed.time}</div></td></tr>
        );
      })

      thursMorning = this.props.pizza.Thursday.Morning.map(Thurs => {
        return (
          <tr key={Thurs.id}><td><div>Name: {Thurs.name} <br/>Time: {Thurs.time}</div></td></tr>
        );
      })

      thursAfternoon = this.props.pizza.Thursday.Afternoon.map(Thurs => {
        return (
          <tr key={Thurs.id}><td><div>Name: {Thurs.name} <br/>Time: {Thurs.time}</div></td></tr>
        );
      })

      friMorning = this.props.pizza.Friday.Morning.map(Fri => {
        return (
          <tr key={Fri.id}><td><div>Name: {Fri.name} <br/>Time: {Fri.time}</div></td></tr>
        );
      })

      friAfternoon = this.props.pizza.Friday.Afternoon.map(Fri => {
        return (
          <tr key={Fri.id}><td><div>Name: {Fri.name} <br/>Time: {Fri.time}</div></td></tr>
        );
      })

      satMorning = this.props.pizza.Saturday.Morning.map(Sat => {
        return (
          <tr key={Sat.id}><td><div>Name: {Sat.name} <br/>Time: {Sat.time}</div></td></tr>
        );
      })

      satAfternoon = this.props.pizza.Saturday.Afternoon.map(Sat => {
        return (
          <tr key={Sat.id}><td><div>Name: {Sat.name} <br/>Time: {Sat.time}</div></td></tr>
        );
      })
    }


    return (
      <div>
        <h2>Pizza Schedule</h2>
        <table className="table table-bordered">
             
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
        </table>


      </div>




      )

  }

}