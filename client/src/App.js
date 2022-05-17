import React from 'react';

//components
import Home from './components/Home';

//logo
import logo from './images/Instaverse.png';

import styles from './Styles';
//ant design
import { Layout, Image, Typography } from 'antd';
const { Title } = Typography;
const { Header, Footer } = Layout;

function App() {
  return (
    <Layout style={styles.layout}>
      <Header style={styles.header}>
        <Image style={styles.image} width="45" preview={false} src={logo} />
        &nbsp;
        <Title style={styles.title}>InstaVerse</Title>
      </Header>
      <Home />
      <Footer style={styles.footer}>{new Date().getFullYear()}&copy;marwen</Footer>
    </Layout>
  );
}

export default App;
