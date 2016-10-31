//react
import React from 'react'
// react search filter
import SearchInput, {createFilter} from 'react-search-input'
//material ui
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
//data
import wpData from '../data/data.js'
const KEYS_TO_FILTERS = ['name']

const Workingpackages = React.createClass({
  getInitialState () {
    return { searchTerm: '' }
  },
  searchUpdated (term) {
    this.setState({searchTerm: term})
  },
  render () {
    const filteredWpData = wpData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div id='page-top'>
        <div className='container'>
          <h2 className='title-page'>Working packages (WP)</h2>
          <Divider />
          <p className='paragraph'>
            According to the presented research plan WP leaders are responsible for the coordination of
            their WP’s tasks. Within the WPs participants are responsible of different individual tasks. Work
            packages 2, 3 and 4 envision scientific and technical activities that will require intense and co-
            ordinated work among the partners: for this reason scientific meetings will be organized by WP
            leaders based on individuated needs. The role and collaboration of different disciplines and per-
            sonnel can be generally summarized as follow:
          </p>
          <SearchInput className="search-input" onChange={this.searchUpdated} />
          <List>
          {filteredWpData.map((wp, index) => (
            <ListItem
              key={'wp-key-'+index}
              primaryText={<div style={{paddingRight:'25px'}}>{wp.name} - {wp.title}</div>}
              secondaryText={<div style={{height:'100%'}}>
                <p style={{marginTop:'10px'}}>Duration: <strong>{wp.duration}</strong></p>
                <p>Participants: <strong>{wp.participants}</strong></p>
                <p>Lead partner: <strong>{wp.leadpartner}</strong></p>
              </div>}
              nestedItems={[
                    <ListItem
                      key={'objective-key'}
                      primaryText='Objectives'
                      nestedItems={wp.objectives.map((obj, index2) => (
                        <ListItem key={'objective-key-'+index2} secondaryText={<div style={{height:'100%', whiteSpace:'normal'}}>{(index2+1)+' - '+obj}</div>} />
                      ))}
                    />,
                    <ListItem
                      key={'deliverables-key'}
                      primaryText='Deliverables'
                      nestedItems={wp.deliverables.map((del, index3) => (
                        <ListItem key={'deliverables-key-'+index3} secondaryText={<div style={{height:'100%', whiteSpace:'normal'}}>{`${del.code} - ${del.title} (${del.duration})`}</div>} />
                      ))}
                    />,

                  ]}
            />
          ))}
          </List>
        </div>
      </div>
    )
  }
})

export default Workingpackages
