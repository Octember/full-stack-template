import React from 'react';
import { DemoComponent } from './components/DemoComponent';

import { Layout, Space, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" items={[{ key: 'foo', label: 'bar' }]} />{' '}
      </Header>
      <Content style={{ padding: '1rem', minHeight: '500px' }}>
        <Space size="large">
          <DemoComponent />
          <DemoComponent />
        </Space>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
