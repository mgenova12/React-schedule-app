import PropTypes from 'prop-types';
import React from 'react';
import {AddCell} from './AddCell'

export default class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      Monday: ['hi']
    };
    this.onAddCell = this.onAddCell.bind(this);
  }

  onAddCell(){
    this.setState({
      Monday: this.state.Monday.concat('hello')
    });
  }

  render(){
    
    let Cell = this.state.Monday.map(category => {
      return   <tr> 
                <td><div>Name Time remove</div></td>
              </tr>
    })

    return(
      <div> 
        <div>

        <h2>Schedule</h2>
        
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wednesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
                <th scope="col">Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><div>Name Time remove</div></td>
              </tr>
              <tr> 
                <td><div>Name Time remove</div></td>
              </tr>
              
              {Cell}

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

      </div>
    )
  }
}