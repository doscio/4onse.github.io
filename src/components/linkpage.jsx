//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
//bootstrap
import Table from 'react-bootstrap/lib/Table'

const LinkPage = React.createClass({
  handleClick (value, event) {
    window.open(value, '_blank');
  },
  render () {
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container' >
          <h2 className='title-page'>Links</h2>
          <Divider />
          <div className='paragraph'>
            <Table striped bordered condensed hover>
              <tbody>
                <tr onClick={this.handleClick.bind(this, 'https://b2drop.eudat.eu/f/2803196')}>
                  <td><strong>B2DROP</strong></td>
                  <td>It provides access to the project data through a web interface, sync clients or WebDAV while providing a platform to view, sync and share across devices easily</td>
                </tr>
                <tr onClick={this.handleClick.bind(this, 'https://www.google.com/calendar/render?cid=NG9uc2Uuc3Vwc2lAZ21haWwuY29t&invEmailKey=daniele.strigaro@supsi.ch:944000be83fda147298c4754fa2ac1aa9e884b20')}>
                  <td><strong>Calendar</strong></td>
                  <td>When, where and what are the next meetings, actions, etc. </td>
                </tr>
                <tr onClick={this.handleClick.bind(this, 'https://wiki.osgeo.org/wiki/Open_Monitoring_Systems_Working_Group')}>
                  <td><strong>OSGEO</strong></td>
                  <td>The Open Monitoring Systems Working Group is a subsidiary body established by the OSGeo Open Geoscience Committee to advance in the topic of Open monitoring system for in-situ observations</td>
                </tr>
                <tr onClick={this.handleClick.bind(this, 'https://github.com/4onse/')}>
                  <td><strong>Github</strong></td>
                  <td>GitHub is where we build software. GitHub provides an area to discover, fork, and contribute to the whole project's code developed.</td>
                </tr>
                <tr onClick={this.handleClick.bind(this, 'https://twitter.com/SNSF_4onse')}>
                  <td><strong>Twitter</strong></td>
                  <td>It is used to share news and promote the project activites</td>
                </tr>
                <tr onClick={this.handleClick.bind(this, 'https://www.linkedin.com/in/snsf-4onse-366a45130')}>
                  <td><strong>Linkedin</strong></td>
                  <td>It is used to share news and promote the project activites</td>
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
