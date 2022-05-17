import React, { useEffect } from 'react';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Styles';
import { Card, Form, Input, Button, Typography } from 'antd';

import { CreateStory, EditStory } from '../../redux/actions/storyActions';
const { Title } = Typography;

function StoryForm({ selectedId, setSelectedId }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { stories } = useSelector((state) => state.stories);
  const selectedStory = selectedId && stories.find((story) => story._id === selectedId);

  useEffect(() => {
    if (selectedStory) {
      form.setFieldsValue(selectedStory);
    }
  }, [selectedStory, form]);

  //handlers
  const handleOnfinish = (formValues) => {
    selectedId
      ? dispatch(EditStory(selectedId, formValues))
      : dispatch(CreateStory(formValues));

    handleOnReset();
  };

  const handleOnReset = () => {
    form.resetFields();
    setSelectedId(null);
  };

  return (
    <Card
      style={styles.formCard}
      title={
        <Title level={4} style={styles.formTitle}>
          {selectedId ? 'edit story' : 'share something'}
        </Title>
      }
    >
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        size="middle"
        onFinish={handleOnfinish}
      >
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <Input allowClear />
        </Form.Item>
        <Form.Item name="caption" label="Caption" rules={[{ required: true }]}>
          <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>
        <Form.Item name="tags" label="Tags">
          <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>
        <Form.Item name="image" label="image" rules={[{ required: true }]}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={(e) => {
              form.setFieldsValue({
                image: e.base64,
              });
            }}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 6 }}>
          <Button type="primary" block htmlType="submit">
            share
          </Button>
        </Form.Item>
        {selectedId && (
          <Form.Item wrapperCol={{ span: 16, offset: 6 }}>
            <Button type="danger" block htmlType="submit" onClick={handleOnReset}>
              discard
            </Button>
          </Form.Item>
        )}
      </Form>
    </Card>
  );
}

export default StoryForm;
