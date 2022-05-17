import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StoryList from '../StoryList';
import StoryForm from '../StoryForm';
import styles from './Styles';

import { SpinnerInfinity } from 'spinners-react';

import { Layout } from 'antd';
import { GetAllStories } from '../../redux/actions/storyActions';

function Home() {
  const { Sider, Content } = Layout;
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    dispatch(GetAllStories());
  }, [dispatch]);

  const { loading, stories } = useSelector((state) => state.stories);

  return (
    <Layout>
      <Sider style={styles.sider} width={400}>
        <StoryForm selectedId={selectedId} setSelectedId={setSelectedId} />
      </Sider>
      <Content style={styles.content}>
        {loading ? (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SpinnerInfinity
              color="purple"
              secondaryColor="orange"
              size={200}
              thickness={100}
              enabled={loading}
            />
          </div>
        ) : (
          <StoryList stories={stories} setSelectedId={setSelectedId} />
        )}
      </Content>
    </Layout>
  );
}

export default Home;
