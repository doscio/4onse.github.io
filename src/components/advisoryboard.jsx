//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';

const Advisoryboard = React.createClass({
  render () {
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container'>
          <h2 className='title-page'>Advisory board</h2>
          <Divider />
          <p className='paragraph'>
            Advisory board is coming soon !!!
          </p>
        </div>
      </div>
    )
  }
})

export default Advisoryboard
