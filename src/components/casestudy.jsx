//react
import React from 'react'
//bootstrap
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
//material ui
import Divider from 'material-ui/Divider';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
//icons
import OyaBasin from '../data/images/casestudy/OyaBasin.png'

const Casestudy = React.createClass({
  render () {
    return (
      <div id='page-top'>
        <div className='container'>
          <h2 className='title-page'>Case study</h2>
          <Divider />
          <div className='paragraph'>
            <Card>
              <CardHeader
                title={<strong>Deduru Oya basin - Sri Lanka</strong>}
              />
              <CardText>
                <Row>
                  <Col md={4}>
                    <img role='presentation' width='100%' src={OyaBasin} />
                  </Col>
                  <Col md={8}>
                    The project case study, where the 4ONSE system will be deployed and investigated is the Deduru Oya basin. It is the fourth largest river basin in Sri Lanka and is located within the highly vulnerable areas due to climate change according to recent studies (Katupotha, 2009). The Deduru Oya is 115km long and covers 2623km2 of catchment area. 97% of the basin’s area covered by the North Western Province (Kurunegala and Puttalam Districts) and 3% by the Central Province (Kandy and Matale Districts). The basin area falls under two climatic zones, wet and intermediate (Figure 1). The annual average rainfall of the basin area is about 1628mm. The hydrometric network in the basin consists of several meteorological stations and two gauging stations. The major sources of water available in the basin include direct rainfall, stream flow, surface water storage and groundwater storage. These available water resources vary spatially and temporally across the basin, significantly. The Deduru Oya is affected by flash floods in some periods and also suffers from long periods of low flows which occurs in the months of February, March, June, July, August, and September (Samarasinghe, et.al, 2000). More runoffs available at upper basin which is located in the Wet Zone. Middle and tail end parts of the basin locate in the Intermediate Zone, face water shortage problems in dry periods. Sometimes the Drought period endure in the area for nearly 7 to 9 months creating an acute water shortage (Katupotha, 2009).
                  </Col>
                </Row>
              </CardText>
            </Card>
          </div>
        </div>
      </div>
    )
  }
})

export default Casestudy
