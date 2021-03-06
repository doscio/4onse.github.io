// react
import React from 'react'
// react-router
import {hashHistory} from 'react-router'

//bootstrap
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Carousel from 'react-bootstrap/lib/Carousel'

//material ui
import RaisedButton from 'material-ui/RaisedButton';

// icons
import pageTop from '../data/images/background/page-top.jpg'
import aboutUs from '../data/images/background/about-us.jpg'
import objective from '../data/images/background/objective.jpg'
import desired from '../data/images/background/desired.png'
import partners from '../data/images/background/partners.jpg'
import openSoftware from '../data/images/team/open-software.svg'
import openHardware from '../data/images/team/open-hardware.svg'
import openStandard from '../data/images/team/open-standard.svg'
import openData from "../data/images/team/open-data.svg"

//css
import '../css/home.css'

const Home = React.createClass({
  componentDidMount () {
    window.twttr.widgets.load()
  },
  handleButtonClick (value, event) {
    if (value==='partners') {
      hashHistory.push(`/${value}`);
    } else {
      hashHistory.push(`/project/${value}`);
    }
  },
  render () {
    let styleCarouselTitle = {}
    let styleCarouselCaption = {
      textAlign:'left',
      fontSize:'20px'
    }
    let heightCarousel
    let styleCarouselItemImg
    if (this.props.size.width>=992) {
      heightCarousel = ((992/1.77)-((992*20)/100))
      styleCarouselItemImg = {width: '100%', transform: 'translate(0,-20%)'}
    } else if (this.props.size.width>=750) {
      heightCarousel = ((992/1.77)-((992*20)/100))
      styleCarouselItemImg = {width: '100%', transform: 'translate(0,-20%)'}
    } else {
      heightCarousel = (this.props.size.width/1.77)
      styleCarouselCaption.fontSize = '12px'
      styleCarouselTitle.fontSize = '14px'
      styleCarouselItemImg = {width: '100%'}
    }
    let heightRow = (this.props.size.height - (heightCarousel+this.props.appBar.height+160))
    let styleCarouselItem = {height:heightCarousel}
    return (
      <div id="page-top" style={{textAlign:'center'}}>
        <Carousel>
          <Carousel.Item style={styleCarouselItem}>
            <img style={styleCarouselItemImg} alt="900x500" src={pageTop}/>
            <Carousel.Caption style={styleCarouselCaption}>
              <h3 style={styleCarouselTitle}>The 4ONSE project</h3>
              <p>4 times open & non-conventional technology for</p>
              <p style={{animation: 'heartbeat 1s infinite'}}>SENSING THE ENVIRONMENT</p>
              <RaisedButton label="Read more" onClick={this.handleButtonClick.bind(this, 'introduction')}/>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={styleCarouselItem}>
            <img style={styleCarouselItemImg} alt="900x500" src={aboutUs}/>
            <Carousel.Caption style={styleCarouselCaption}>
              <h3 style={styleCarouselTitle}>BACKGROUND</h3>
              <p>Non-conventional monitoring system based on low cost and open technologies may be a great opportunity</p>
              <RaisedButton label="Read more" onClick={this.handleButtonClick.bind(this, 'background')}/>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={styleCarouselItem}>
            <img style={styleCarouselItemImg} alt="900x500" src={objective}/>
            <Carousel.Caption style={styleCarouselCaption}>
              <h3 style={styleCarouselTitle}>OBJECTIVE OF THE PROJECT</h3>
              <p>Integrating and further developing the available technologies to implement a fully open (data, standard, hardware and software) solution</p>
              <RaisedButton label="Read more" onClick={this.handleButtonClick.bind(this, 'objective')}/>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={styleCarouselItem}>
            <img style={styleCarouselItemImg} alt="900x500" src={desired}/>
            <Carousel.Caption style={styleCarouselCaption}>
              <h3 style={styleCarouselTitle}>CHANGES AND IMPACTS</h3>
              <p>The ultimate desired impact is to strengthen the capacity of data production, usage and management in developing countries.</p>
              <RaisedButton label="Read more" onClick={this.handleButtonClick.bind(this, 'impacts')}/>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={styleCarouselItem}>
            <img style={styleCarouselItemImg} alt="900x500" src={partners}/>
            <Carousel.Caption style={styleCarouselCaption}>
              <h3 style={styleCarouselTitle}>PARTNERS & COLLABORATIONS</h3>
              <p></p>
              <RaisedButton label="Read more" onClick={this.handleButtonClick.bind(this, 'partners')}/>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Grid className='grid-home' style={{width:this.props.size.width+'px', height: heightRow, display: 'table',padding:'10px 0px 10px 0px'}}>
          <Row style={{verticalAlign: 'middle', display:'table-cell'}}>
            <Col md={10} style={{padding: '0px'}}>
              <Col md={3} sm={6} xs={12}>
                <figure>
                  <img src={openSoftware} alt="Team Member" />
                  <figcaption>
                    <strong>IstSOS</strong>
                    <br/>
                    Open SOftware
                  </figcaption>
                </figure>
              </Col>
              <Col md={3} sm={6} xs={12}>
                <div>
                  <figure>
                    <img src={openHardware} alt="Team Member" />
                    <figcaption>
                      <strong>Arduino</strong>
                      <br/>
                      Open Hardware
                    </figcaption>
                  </figure>
                </div>
              </Col>
              <div className="clearfix visible-sm"></div>
              <Col md={3} sm={6} xs={12}>
                <div>
                  <figure>
                    <img src={openData} alt="Team Member" />
                    <figcaption>
                      <strong>CKAN</strong>
                      <br/>
                      Open Data
                    </figcaption>
                  </figure>
                </div>
              </Col>
              <Col md={3} sm={6} xs={12}>
                <div>
                  <figure>
                    <img src={openStandard} alt="Team Member" />
                    <figcaption>
                      <strong>OGC SOS</strong>
                      <br/>
                      Open Standard
                    </figcaption>
                  </figure>
                </div>
              </Col>
            </Col>
            <Col md={2} style={{maxHeight: '218px', padding:'0px', overflowY: 'auto'}}>
              <a className="twitter-timeline" href="https://twitter.com/SNSF_4onse"></a>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
})

export default Home
