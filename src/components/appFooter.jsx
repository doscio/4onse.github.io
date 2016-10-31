// react
import React from 'react'

//bootstrap
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';

// import logo
import snfLogo from '../data/images/snf-logo.png'
import rd4Logo from '../data/images/r4d-logo.jpg'
import sdcLogo from '../data/images/sdc-logo.jpg'
import Linkedin from '../data/icons/linkedin-logo_white.svg'
import Twitter from '../data/icons/twitter-logo_white.svg'
import GitHub from '../data/icons/github-logo_white.svg'

// css
import '../css/footer.css'

const AppFooter = React.createClass({
  render () {
    let size = this.props.size
    let style = {
      padding: '15px',
      margin: '0',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
    let styleSNSF = {
      paddingBottom: '15px',
      margin: '0',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }

    let styleSocial = {
      maxHeight: '40px',
      maxWidth: '40px',
      padding: '5px'
    }
    let styleGrid = {
      width:this.props.size.width+'px',

    }
    if (size.width<750) {
      styleGrid = {
        width:this.props.size.width+'px',
      }
    }
    return (
    <div>
      <Grid style={styleGrid} >
        <Row style={{backgroundColor: '#333'}} >
          <Col md={12}>
            <a href='https://twitter.com/SNSF_4onse' target='_blank'>
              <img role="presentation" style={styleSocial} src={Twitter} />
            </a>
            <a href='https://www.linkedin.com/in/snsf-4onse-366a45130' target='_blank'>
              <img role="presentation" style={styleSocial} src={Linkedin} />
            </a>
            <a href='https://github.com/4onse/' target='_blank'>
              <img role="presentation" style={styleSocial} src={GitHub} />
            </a>
          </Col>
        </Row>
      </Grid>
      <footer id='footer-section' style={{padding: '20px', overflow: 'hidden'}}>
        <Col md={4} sm={6} style={{textAlign: 'center',height:'80px'}} >
          <a href="http://www.snf.ch" target='_BLANK'>
            <Image
              src={snfLogo}
              style={styleSNSF}
              responsive
            />
          </a>
        </Col>
        <Col md={4} sm={6} style={{textAlign: 'center',height:'80px'}} >
          <a href="http://www.r4d.ch" target='_BLANK'>
          <Image
            src={rd4Logo}
            style={style}
            responsive
          />
          </a>
        </Col>
        <Col md={4} sm={12} style={{textAlign: 'center',height:'80px'}} >
          <a href="https://www.eda.admin.ch/sdc" target='_BLANK'>
            <Image
              src={sdcLogo}
              style={style}
              responsive
            />
          </a>
        </Col>
      </footer>
    </div>
    )
  }
})

export default AppFooter
