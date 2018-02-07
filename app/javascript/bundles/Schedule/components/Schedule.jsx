import PropTypes from 'prop-types';
import React from 'react';


export default class Schedule extends React.Component {

  render(){
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
                <td><div>Name2 Time2 <RemoveButton/> </div></td>
              </tr>

              <tr> 
                <td><div>Name Time remove</div></td>
              </tr>

              <tr> 
                <td><div>add</div></td>
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