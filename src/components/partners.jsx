// react
import React from 'react'
// material ui
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
//bootstrap
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
//icons
import logoSupsi from '../data/images/partners/supsi_logo.png'
import logoUgm from '../data/images/partners/ugm_logo.png'
import logoUoM from '../data/images/partners/uom_logo.png'
import logoIst from '../data/images/partners/ist_logo.png'
import logoIWMI from '../data/images/partners/iwmi_logo.png'
import logoIrri from '../data/images/partners/irri_logo.png'
import logoGFDRR from '../data/images/partners/gfdrr_logo.png'
//images
import partners from '../data/images/background/partners.jpg'
//css
import '../css/partners.css';

const Partners = React.createClass({
  handleClickHref (value, event) {
    window.open(value, '_blank');
  },
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
      backgroundImage: 'url('+partners+')',
      backgroundPosition:'center',
      height:((heightCarousel*3)/4)+'px'
    }
    const tilesData = [
      {
        img: logoSupsi,
        title: 'INSTITUTE OF EARTH SCIENCES',
        subtitle: 'SWITZERLAND',
        role: '(COORDINATOR)',
        url: 'http://www.supsi.ch/ist_en/'
      },
      {
        img: logoUoM,
        title: 'UNIVERSITY OF MORATUWA',
        subtitle: 'SRI LANKA',
        role: '(PARTNER)',
        url: 'https://www.mrt.ac.lk/web/'
      },
      {
        img: logoIst,
        title: 'INSTITUTE OF SPACE TECHNOLOGY',
        subtitle: 'PAKISTAN',
        role: '(PARTNER)',
        url: 'http://www.ist.edu.pk/'
      },
      {
        img: logoUgm,
        title: 'UNIVERSITY OF GADJAH MADA',
        subtitle: 'INDONESIA',
        role: '(PARTNER)',
        url: 'http://ugm.ac.id/en/'
      },
      {
        img: logoIWMI,
        title: 'INTERNATIONAL WATER MANAGEMENT INSTITUTE',
        subtitle: 'SRI LANKA',
        role: '(COLLABORATION)',
        url: 'http://ugm.ac.id/en/'
      },
      {
        img: logoIrri,
        title: 'IRRIGATION DEPARTMENT OF ANURADHAPURAS',
        subtitle: 'SRI LANKA',
        role: '(COLLABORATION)',
        url: 'http://ugm.ac.id/en/'
      },
      {
        img: logoGFDRR,
        title: 'WORLD BANK GFDRR',
        subtitle: 'USA',
        role: '(COLLABORATION)',
        url: 'http://ugm.ac.id/en/'
      },
    ];
    return (
      <div id='page-top'>
        <div style={styleCarouselItem}></div>
        <div className='container' style={{paddingBottom: '10px'}}>
          <h2 className='title-page'>Partners</h2>
          <Divider />
          <div className='team-container'>
            <Row>
              {tilesData.map((tile, index) => (
                <Col md={3} sm={6}>
                  <div className='team-member'>
                    <img role='presentation' src={tile.img} width='100%' />
                    <figcaption>
                      <p className='member-name' style={{fontSize:'12px'}}>{tile.title}</p>
                      <p className='designation' style={{margin:'0px'}}>{tile.subtitle}</p>
                      <p style={{fontSize:'9px',margin:'0px'}}>{tile.role}</p>
                    </figcaption>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    )
  }
})

export default Partners
