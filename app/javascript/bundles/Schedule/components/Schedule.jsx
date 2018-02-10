import PropTypes from 'prop-types';
import React from 'react';
import {AddCell} from './AddCell'

export default class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      Pizza: {
              Monday: { 
                Morning: [{ Name: 'Marco', Time: '10:30-3'},],
                Afternoon: [{ Name: 'Marco', Time: '10:30-3'}]
              },               
              Tuesday: { 
                Morning: [{ Name: 'Marco', Time: '10:30-3'}],
                Afternoon: [{ Name: 'Marco', Time: '10:30-3'}]
              },               
              Wednesday: { 
                Morning: [{ Name: 'Marco', Time: '10:30-3'}],
                Afternoon: [{ Name: 'Marco', Time: '10:30-3'}]
              },               
              Thursday: { 
                Morning: [{ Name: 'Marco', Time: '10:30-3'}],
                Afternoon: [{ Name: 'Marco', Time: '10:30-3'}]
              },               
              Friday: { 
                Morning: [{ Name: 'Marco', Time: '10:30-3'}],
                Afternoon: [{ Name: 'Marco', Time: '10:30-3'}]
              },               
              Saturday: { 
                Morning: [{ Name: 'Marco', Time: '10:30-3'}],
                Afternoon: [{ Name: 'Marco', Time: '10:30-3'}]
              }
            }
    };
    this.onAddCellMonday = this.onAddCellMonday.bind(this);
    this.onAddCellTuesday = this.onAddCellTuesday.bind(this);
    this.onAddCellWednesday = this.onAddCellWednesday.bind(this);
    this.onAddCellThursday = this.onAddCellThursday.bind(this);
    this.onAddCellFriday = this.onAddCellFriday.bind(this);
    this.onAddCellSaturday = this.onAddCellSaturday.bind(this);

  }

  onAddCellMonday(){
    let col = Object.assign({}, this.state.Pizza.Monday)
    col.Monday['ColumnNum'] = col.Monday['ColumnNum'] + 1
    this.setState({
      Pizza:col
    })
  }

  onAddCellTuesday(){
    let col = Object.assign({}, this.state.Pizza)
    col.Tuesday['ColumnNum'] = col.Tuesday['ColumnNum'] + 1
    this.setState({
      Pizza:col
    })
  }  

  onAddCellWednesday(){
    let col = Object.assign({}, this.state.Pizza)
    col.Wednesday['ColumnNum'] = col.Wednesday['ColumnNum'] + 1
    this.setState({
      Pizza:col
    })
  }  

  onAddCellThursday(){
    let col = Object.assign({}, this.state.Pizza)
    col.Thursday['ColumnNum'] = col.Thursday['ColumnNum'] + 1
    this.setState({
      Pizza:col
    })
  }  
  onAddCellFriday(){
    let col = Object.assign({}, this.state.Pizza)
    col.Friday['ColumnNum'] = col.Friday['ColumnNum'] + 1
    this.setState({
      Pizza:col
    })
  }  
  onAddCellSaturday(){
    let col = Object.assign({}, this.state.Pizza)
    col.Saturday['ColumnNum'] = col.Saturday['ColumnNum'] + 1
    this.setState({
      Pizza:col
    })
  }


  render(){

    return(
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
                        <AddCell colNum={this.state.Pizza.Monday.Morning.length}/>
                  </table>
              </td>
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Tuesday</th>
                          </tr>
                      </thead>
                      <AddCell colNum={this.state.Pizza.Tuesday.Morning.length}/>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Wednesday</th>
                          </tr>
                      </thead>
                      <AddCell colNum={this.state.Pizza.Wednesday.Morning.length}/>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Thursday</th>
                          </tr>
                      </thead>
                      <AddCell colNum={this.state.Pizza.Thursday.Morning.length}/>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Friday</th>
                          </tr>
                      </thead>
                      <AddCell colNum={this.state.Pizza.Friday.Morning.length}/>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Saturday</th>
                          </tr>
                      </thead>
                      <AddCell colNum={this.state.Pizza.Saturday.Morning.length}/>
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
          </tbody>
        </table>


      </div>
    )
  }
}