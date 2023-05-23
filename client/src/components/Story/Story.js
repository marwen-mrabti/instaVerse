import React, { useState } from 'react';
import moment from 'moment';
import { DeleteStory, LikeStory } from '../../redux/actions/storyActions';

import styles from './Styles';
//antd
import { Card, Image, Tooltip, Typography } from 'antd';
import { HeartTwoTone, EditOutlined, DeleteTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

function Story({ story, setSelectedId }) {
  const { Meta } = Card;
  const { Link, Paragraph, Text } = Typography;
  const [expand, setExpand] = useState(false);
  const dispatch = useDispatch();

  //handlers
  const handleOnEdit = (e) => {
    e.preventDefault();
    setSelectedId(story._id);
  };

  const handleOnDelete = (e) => {
    e.preventDefault();
    dispatch(DeleteStory(story._id));
  };

  const handleOnLike = (e) => {
    e.preventDefault();
    dispatch(LikeStory(story._id));
  };

  return (
    <Card
      style={styles.card}
      cover={<Image src={story.image} />}
      actions={[
        <div style={styles.actions}>
          <Tooltip placement="top" title="like" color="magenta" onClick={handleOnLike}>
            <HeartTwoTone towtonecolor="magenta" />
            &nbsp; {story.likes} &nbsp;
          </Tooltip>
        </div>,

        <Tooltip placement="top" title="edit">
          <EditOutlined onClick={handleOnEdit} />
        </Tooltip>,

        <Tooltip placement="top" title="delete" color="red">
          <DeleteTwoTone towtonecolor="red" onClick={handleOnDelete} />
        </Tooltip>,
      ]}
    >
      <Meta title={story?.username} />
      <Paragraph
        style={{ margin: 0 }}
        ellipsis={{
          rows: 2,
          expandable: true,
          symbol: 'more',
          onExpand: () => {
            setExpand(true);
          },
          onEllipsis: () => {
            setExpand(false);
          },
        }}
      >
        {story.caption}
      </Paragraph>
      <Text type="secondary"> {moment(story.postDate).fromNow()} </Text>
    </Card>
  );
}

export default Story;
