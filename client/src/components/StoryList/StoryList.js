import React from 'react';
import { Row, Col } from 'antd';

//components
import Story from '../Story';

function StoryList({ stories, setSelectedId }) {
  return (
    <React.Fragment>
      {!stories.length ? (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(5,5,5,0.8)',
          }}
        >
          <h1 style={{ color: 'wheat' }}>No stories </h1>
        </div>
      ) : (
        <Row gutter={[48, 32]}>
          {stories.map((story, index) => (
            <Col key={index} lg={24} xl={12} xxl={8}>
              <Story story={story} setSelectedId={setSelectedId} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
}

export default StoryList;
