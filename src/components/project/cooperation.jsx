//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
//images
import part from '../../data/images/background/partecipate.jpg'

const Cooperation = React.createClass({
  render () {
    let heightCarousel
    if (this.props.size.width>=992) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else if (this.props.size.width>=750) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else {
      heightCarousel = (this.props.size.width/1.77)
    }
    let styleCarouselItem = {
      backgroundImage: 'url('+part+')',
      backgroundPosition:'center',
      height:((heightCarousel*3)/4)+'px'
    }
    return (
      <div id='partecipate'>
        <div style={styleCarouselItem}></div>
        <div className='container'>
          <h2 className='title-page'>Cooperation</h2>
          <Divider />
          <p className='paragraph'>
            After reading the <a href="4onseInformationSheet.pdf"> Infromation Sheet </a> fill the Form below to became a testing partner. </p>
            
          <p className='paragraph'>
            A testing partner agree to:
            <ul>
                <li>participate at its own cost to the experiment</li>
                <li>deploy the 4ONSE station system following the project outcomes (manuals, instructions, components, etc.)</li>
                <li>monitor the system, share the data and provide feedbacks</li>
            </ul>
                Of course it is based on voluntary work and no mandatory action is requested. 
          </p>  
          <p className='paragraph'>  
            As a result, testing partners will have access to project outcomes, materials and will acquire competence also trough public acknowledgement and recognition of its scientific contribution.
          </p>
          <iframe src="https://docs.google.com/forms/d/1l0Wey8-580JLLwOotQvfXOvwIdaCjFsRJPwe7VEWHRU/viewform?embedded=true"
					  width="100%"
					  height="1400"
					  frameBorder="0"
					  marginHeight="0"
					  marginWidth="0">
            Caricamento in corso...
				  </iframe>
        </div>
      </div>
    )
  }
})

export default Cooperation
