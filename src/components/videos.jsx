//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';

const Videos = React.createClass({
  render () {
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container'>
          <h2 className='title-page'>Videos</h2>
          <Divider />
          <p className='paragraph'>
            Outreach Video is coming soon !!!
          </p>
        </div>
      </div>
    )
  }
})

export default Videos
