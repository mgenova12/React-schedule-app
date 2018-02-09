import PropTypes from 'prop-types';
import React from 'react';
import {AddCell} from './AddCell'

export default class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      Pizza: {Monday: {Name: 'Marco', Time: '10:30-3', ColumnNum: 3}, Tuesday: {Name: 'Marco', Time: '10:30-3', ColumnNum: 2}}
    };
    this.onAddCell = this.onAddCell.bind(this);
  }

  onAddCell(){
    let col = Object.assign({}, this.state.Pizza)
    col.Monday['ColumnNum'] = col.Monday['ColumnNum'] + 1
    this.setState({
      Pizza:col
    })
  }

  render(){

    return(
      <div>
        {this.state.Pizza.Monday['ColumnNum']}
        <h2>Schedule</h2>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Monday</th>
                          </tr>
                      </thead>
                        <AddCell colNum={this.state.Pizza.Monday['ColumnNum']}/>
                  </table>
              </td>
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Tuesday</th>
                          </tr>
                      </thead>
                      <AddCell colNum={this.state.Pizza.Tuesday['ColumnNum']}/>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Wednesday</th>
                          </tr>
                      </thead>
                      <AddCell colNum={this.state.Pizza.Tuesday['ColumnNum']}/>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Thursay</th>
                          </tr>
                      </thead>
                      <AddCell colNum={this.state.Pizza.Tuesday['ColumnNum']}/>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Friday</th>
                          </tr>
                      </thead>
                      <AddCell colNum={this.state.Pizza.Tuesday['ColumnNum']}/>
                  </table>
              </td>              
              <td>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th scope="col">Saturday</th>
                          </tr>
                      </thead>
                      <AddCell colNum={this.state.Pizza.Tuesday['ColumnNum']}/>
                  </table>
              </td>
            </tr>
              <tr> 
                <td> <button onClick={this.onAddCell}>+</button></td>
                <td><div>add</div></td>
                <td><div>add</div></td>
                <td><div>add</div></td>
                <td><div>add</div></td>
                <td><div>add</div></td>
              </tr>
          </tbody>
        </table>



      </div>
    )
  }
}