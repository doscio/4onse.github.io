//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';

const Results = React.createClass({
  render () {
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container'>
          <h2 className='title-page'>Results</h2>
          <Divider />
          <p className='paragraph'>
            Results are coming soon !!!
          </p>
        </div>
      </div>
    )
  }
})

export default Results
