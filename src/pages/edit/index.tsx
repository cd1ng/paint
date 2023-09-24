import React, { FC } from 'react'
import { Button, Layout } from 'antd'

import LeftAside from './LeftAside'
import RightAside from './RightAside'
import Painter from './Painter'

import Styled from './Styled'

const { Header, Content, Footer, Sider } = Layout

const Edit: FC = () => {
  return (
    <Styled>
      <Layout style={{ width: '100%', height: '100%' }}>
        <Header></Header>
        <Layout hasSider>
          <Sider style={{ backgroundColor: '#fff' }}>
            <LeftAside />
          </Sider>
          <Content>
            <Painter />
          </Content>
          <Sider style={{ backgroundColor: '#fff' }}>
            <RightAside />
          </Sider>
        </Layout>
        <Footer></Footer>
      </Layout>
    </Styled>
  )
}

export default Edit
