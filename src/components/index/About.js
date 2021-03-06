import React, { Fragment } from "react"
import styled from "styled-components"
import { Container, Row } from "reactstrap"
import { Element } from "react-scroll"
import Link from "gatsby-link"

import { COLOR, FONT_SIZE, MARGIN, FLEX } from "../bases/constant"
import { Fluid, Col } from "../bases/Layout"
import Button from "../bases/Button"

const SectionImage = styled.img`
  width: 100%;
`

const WhatHeader = styled.h1`
  border-bottom: 2.4px solid ${COLOR.headerBorder};
  font-weight: bold;

  font-size: ${FONT_SIZE.hero};
  margin-bottom: ${MARGIN.normal};
  @media (max-width: 1024px){
    font-size: ${FONT_SIZE.header};
    margin-bottom: ${MARGIN.small};
  }
`

const WhatCol = styled(Col)`
  background-color: ${COLOR.secondary};
  @media (max-width: 1024px){
    padding: 2.5em 2em !important;
  }
`
WhatCol.defaultProps = {
  className: `px-5 ${FLEX.center}`
}

const What = () => (
  <Fluid>
    <Container>
      <Element className='row py-5' name='whatis'>
        <Col className='text-center'>
          <WhatHeader>What is Brown Bag?</WhatHeader>
        </Col>
        <Col lg='6'>
          <SectionImage src='/static/images/brownbag-last.gif' />
        </Col>
        <WhatCol lg='6'>
          <p>
              ครั้งนี้เราขอเดินหน้าขึ้นอีกก้าว เชิญชวน เพื่อนๆ พี่ๆ น้องๆ ญาติสนิทมิตรสหายของเด็กๆ ไอทีบางมด
              ไม่ว่าคุณจะอยู่ภาคไหน ไม่ว่าคุณจะรู้จักไอทีหรือไม่ มาร่วมแบ่งขนม ผสมความรู้กันใน Brown Bag 4.0
          </p>
          <p>
              มีวัตถุประสงค์เพื่อให้นักศึกษารู้จักการแบ่งปันด้วยการถ่ายทอดความรู้ ประสบการณ์ในด้านที่สนใจให้แก่ผู้อื่น
              เพื่อเป็นการส่งเสริมให้นักศึกษามีการแลกเปลี่ยนความรู้ ทำความรู้จักกันระหว่างภาควิชา และกลุ่มนักศึกษาที่สนใจในด้านเดียวกัน
              เพื่อสร้างเสริมทัศคติที่ดีต่อเทคโนโลยีสารสนเทศให้กับนักศึกษาภายในมหาวิทยาลัย และผู้สนใจ
          </p>
        </WhatCol>
      </Element>
    </Container>
  </Fluid>
)

const About = () => (
  <Fluid bgcolor={COLOR.secondary}>
    <Container>
      <Element className='row py-5' name='about'>
        <Col md={6} className={FLEX.center}>
          <h1>Brown Bag มาจากไหน?</h1>
          <p>
          Brown Bag มาจากปกติแล้วคนอเมริกาชอบใช้เจ้า ถุงน้ำตาล นี่แหละ เป็นพวกใส่อาหารสำเร็จรูป ที่หาได้จาก Supermarket หรือ
          โรงอาหารต่างๆ จะเอามาไว้ใส่อาหารเพื่อมานั่งกิน และพูดคุยสนทนากัน เอาง่ายๆ เหมือนคนไทยเราอะครับ คนต่างจังหวัดเวลาเรา
          ทำไร่ทำนาหรือทำสวนก็จะห่อข้าวไปกินแล้วมานั่งคุยกัน ทางเราก็ได้นำชื่อเจ้าถุงกระดาษสีน้ำตาลนี่แหละ มาเป็นชื่อสำหรับการนั่งคุยกัน
          สนทนากันแบบเป็นกันเอง ไม่เครียด อยากคุยอะไรก็คุย แบบไม่เป็นทางการ
          </p>
        </Col>
        <Col md={6}>
          <SectionImage src='/static/images/whatisbrownbag-last.gif' />
        </Col>
      </Element>
    </Container>
  </Fluid>
)

const images = [
  "/static/images/IMG_3952.JPG",
  "/static/images/IMG_3918.JPG",
  "/static/images/IMG_3935.JPG",
  "/static/images/IMG_3967.JPG"
]

const ImageList = ({ images }) => (
  <Fragment>
    {
      images.map(image => (
        <Col key={image} xs={6} md={3} className='p-0 m-0'>
          <SectionImage src={image} />
        </Col>
      ))
    }
  </Fragment>
)

ImageList.defaultProps = {
  images
}

const Style = () => (
  <Fluid
    bgcolor={COLOR.primary}
    color={COLOR.fontPrimary}
    className='p-0'
  >
    <Container>
      <Element className='row py-5' name='joinwithus'>
        <Col>
          <h1>รูปแบบงานเป็นอย่างไร?</h1>
          <p>
          เป็นการพูดคุยและแบ่งปันประสบการณ์อย่างเป็นกันเอง โดยจะมีการนำเสนอหัวข้อที่สนใจ จากผู้ที่ต้องการมาแบ่งปันประสบการณ์
          ภายในงาน ผู้เข้าร่วมงานทุกๆคนจะช่วยกันเลือกเรื่องที่สนใจ เรื่องที่ถูกเลือกนั้นจะได้รับการแบ่งปันภายในงาน ผู้เข้าร่วมงานทุกๆ คน
          จะต้องเตรียมขนมกันมาคนละ 1 ชิ้น เพื่อนำมาแลกเปลี่ยนกันภายในงานเหมือนดั่งเช่น ความคิดเห็นและประสบการณ์ที่เรานำมาแลกเปลี่ยนกันภายในงาน
          </p>
        </Col>
      </Element>
    </Container>
    <Container fluid>
      <Row>
        <ImageList />
      </Row>
    </Container>
  </Fluid>
)

const JoinContent = styled.p`
  text-indent: 0px;
`

const Join = () => (
  <Fluid>
    <Container>
      <Element className='row py-5' name='joinwithus'>
        <Col className='text-center'>
          <h1>อยากแชร์ประสบการณ์ภายในงานต้องทำอย่างไร?</h1>
          <JoinContent>
            <span>กรอกแบบฟอร์มมาได้เลยครับ</span> <br />
            <Link to='/submit'>
              <Button>Submit Topic</Button>
            </Link> <br />
            <span>หมายเหตุ : รายละเอียดและข้อกำหนด ดูภายในฟอร์ม</span>
          </JoinContent>
        </Col>
      </Element>
    </Container>
  </Fluid>
)

const Information = () => (
  <Fragment>
    <What />
    <About />
    <Style />
    <Join />
  </Fragment>
)

export default Information
