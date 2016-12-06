// react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
//icons
import picture from '../data/icons/timeline/cd-icon-picture.svg';
import movie from '../data/icons/timeline/cd-icon-movie.svg';
import location from '../data/icons/timeline/cd-icon-location.svg';
//css
import '../css/timeline/style.css';
// json data
import eventsData from '../data/events.json';


const Events = React.createClass({
    imageLoader (value) {
        if(value === 'location')
            return location
        else if (value === 'movie')
            return movie
        else {
            return picture
        }
    },
  render () {

    return (

    <div className='container'>
        <h2 className='title-page'>Events</h2>
        <Divider />
        <div className='cd-container-bg'>
            <div id='cd-timeline' className='cd-container'>

            {eventsData.map((item, index) => (
                <div key={item.id} className='cd-timeline-block'>
                    <div className={'cd-timeline-img cd-' + item.type}>
                        <img src={this.imageLoader(item.type)} alt=""></img>
                    </div>
                    <div className='cd-timeline-content'>
                        <h2 className='cd-timeline-title'>{item.title}</h2>
                        <p>{item.text}</p>
                        <span className='cd-date'>{item.date}</span>
                    </div>
                </div>
                ))
            }
        </div>

        </div>
      </div>

    )
  }
})

export default Events
