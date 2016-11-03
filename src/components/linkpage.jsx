//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
//bootstrap
import Table from 'react-bootstrap/lib/Table'

const LinkPage = React.createClass({
  render () {
    /*let data = [
      {
        title: 'B2DROP',
        description: 'B2DROP is based on ownCloud. ownCloud provides a safe, secure, and compliant file synchronization and sharing solution on servers that you control.',
        icon: 'someicon',
      },
    ]*/
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container' >
          <h2 className='title-page'>Links</h2>
          <Divider />
          <div className='paragraph'>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>BDROP</strong></td>
                  <td>It provides access to the project data through a web interface, sync clients or WebDAV while providing a platform to view, sync and share across devices easily</td>
                  <td><a target='_blank' href='https://b2drop.eudat.eu/f/2803196'>Click here!</a></td>
                </tr>
                <tr>
                  <td><strong>Calendar</strong></td>
                  <td>When, where and what are the next meetings, actions, etc. </td>
                  <td><a target='_blank' href='https://www.google.com/calendar/render?cid=NG9uc2Uuc3Vwc2lAZ21haWwuY29t&invEmailKey=daniele.strigaro@supsi.ch:944000be83fda147298c4754fa2ac1aa9e884b20'>Click here!</a></td>
                </tr>
                <tr>
                  <td><strong>OSGEO</strong></td>
                  <td>The Open Monitoring Systems Working Group is a subsidiary body established by the OSGeo Open Geoscience Committee to advance in the topic of Open monitoring system for in-situ observations</td>
                  <td><a target='_blank' href='https://wiki.osgeo.org/wiki/Open_Monitoring_Systems_Working_Group'>Click here!</a></td>
                </tr>
                <tr>
                  <td><strong>Github</strong></td>
                  <td>GitHub is where we build software. GitHub provides an area to discover, fork, and contribute to the whole project's code developed.</td>
                  <td><a target='_blank' href='https://github.com/4onse/'>Click here!</a></td>
                </tr>
                <tr>
                  <td><strong>Twitter</strong></td>
                  <td>It is used to share news and promote the project activites</td>
                  <td><a target='_blank' href='https://twitter.com/SNSF_4onse'>Click here!</a></td>
                </tr>
                <tr>
                  <td><strong>Linkedin</strong></td>
                  <td>It is used to share news and promote the project activites</td>
                  <td><a target='_blank' href='https://www.linkedin.com/in/snsf-4onse-366a45130'>Click here!</a></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    )
  }
})

export default LinkPage
