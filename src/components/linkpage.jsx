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
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan="2"></td>
                  <td></td>
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
