import React from 'react';
// import { Link } from 'react-router-dom';
import { Layout, Collapse } from 'element-react';
import CardPanel from './CardPanel'
import '../styles/home-page.scss';

const HomePage = () => {
  const activeName = "1";
  return (
    <div>
      <Layout.Row gutter="20">
        <Layout.Col span="16">
          <div className="grid-content bg-purple header">
            <CardPanel />
          </div></Layout.Col>
        <Layout.Col span="8"><div className="grid-content bg-purple"><CardPanel /></div></Layout.Col>
      </Layout.Row>
      <Layout.Row gutter="20">
        <Layout.Col span="8"><div className="grid-content bg-purple">cc</div></Layout.Col>
        <Layout.Col span="8"><div className="grid-content bg-purple">dd</div></Layout.Col>
        <Layout.Col span="4"><div className="grid-content bg-purple">ee</div></Layout.Col>
        <Layout.Col span="4"><div className="grid-content bg-purple">ff</div></Layout.Col>
      </Layout.Row>
      <Layout.Row gutter="20">
        <Layout.Col span="4"><div className="grid-content bg-purple"></div></Layout.Col>
        <Layout.Col span="16"><div className="grid-content bg-purple">
          <Collapse value={activeName}>
            <Collapse.Item title="Consistency" name="1">
              <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
              <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
            </Collapse.Item>
          </Collapse>
        </div>
        </Layout.Col>
        <Layout.Col span="4"><div className="grid-content bg-purple"></div></Layout.Col>
      </Layout.Row>
    </div>
  );
};

export default HomePage;
