//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';

const Governance = React.createClass({
  render () {
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container'>
          <h2 className='title-page'>Governance</h2>
          <Divider />
          <div className='paragraph'>
            The project governance follows the best practice in the Free and Open Source project management.
            The following roles and governing bodies are identified:

            <ul>
              <li>
                <h4>Core partners</h4>
                <p><strong>SUPSI</strong> (Switzerland) and <strong>UoM</strong> (Sri Lanka) as leading institution of the research.</p>
              </li>
              <li>
                <h4>Testing partners</h4>
                <p><strong>IST</strong> (Pakistan) and <strong>UGM</strong> (Indonesia) as participating in the system testing and dissemination phases only; additional members could be selected during the project execution provided that they can fully cover their live costs.</p>
              </li>
              <li>
                <h4>Project coordinator</h4>
                <p><strong>Massimiliano Cannata</strong> (SUPSI) is the main applicant responsible for the overall implementation of the project as described in the work plan. Contact between the SNSF and the project.</p>
              </li>
              <li>
                <h4>Dissemination and Communication Manager (DCM)</h4>
                <p><strong>Markus Hoffman</strong> (SUPSI) is in charge of managing and maintain the project information (communication of activities, updates of website and news, etc.).</p>
              </li>
              <li>
                <h4>Steering Group (SG)</h4>
                <p>Assertive small group from the core partners to support and assist the decision making and (possible) conflicts resolution. The Steering Group will be the formal governing body of the project, and approve the project’s reports.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})

export default Governance
