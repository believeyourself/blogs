import {
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import type { FC } from 'react';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from '@/components/tagSelect';
import type { ListItemDataType } from './data';
import styles from './style.less';

const { Option } = Select;
const formItemLayout = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

export const Libraries: FC<Record<string, any>> = () => {
  const list: any[] = [];

  const itemMenu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tmall.com/"
        >
          3d menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.filterCardList}>
      <Card bordered={false}>
        <Form onValuesChange={(_, values) => {}}>
          <StandardFormRow title="筛选" block style={{ paddingBottom: 11 }}>
            <Form.Item name="category">
              <TagSelect expandable>
                <TagSelect.Option value="react">React</TagSelect.Option>
                <TagSelect.Option value="vue">Vue</TagSelect.Option>
                <TagSelect.Option value="angular">AngularJs</TagSelect.Option>
                <TagSelect.Option value="canvas">Canvas</TagSelect.Option>
                <TagSelect.Option value="css">Css</TagSelect.Option>
                <TagSelect.Option value="jqery">Jquery</TagSelect.Option>
              </TagSelect>
            </Form.Item>
          </StandardFormRow>
        </Form>
      </Card>
      <br />
      <List<ListItemDataType>
        rowKey="id"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={list}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card
              hoverable
              bodyStyle={{ paddingBottom: 20 }}
              actions={[
                <Tooltip key="download" title="下载">
                  <DownloadOutlined />
                </Tooltip>,
                <Tooltip key="edit" title="编辑">
                  <EditOutlined />
                </Tooltip>,
                <Tooltip title="分享" key="share">
                  <ShareAltOutlined />
                </Tooltip>,
                <Dropdown key="ellipsis" overlay={itemMenu}>
                  <EllipsisOutlined />
                </Dropdown>,
              ]}
            >
              <Card.Meta
                avatar={<Avatar size="small" src={item.avatar} />}
                title={item.title}
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Libraries;
