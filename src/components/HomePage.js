import React from 'react';
// import { Link } from 'react-router-dom';
import { Layout } from 'element-react';
import CardPanel from './CardPanel'

const HomePage = () => {
  return (
    <div>
      <Layout.Row gutter="20">
        <Layout.Col span="16">
          <div className="grid-content bg-purple">
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
          <div className="sidebar-widget widget-friends">
            <h6>Friends</h6>
            <ul>
              <li className="status-online">
                <figure className="profile-picture">
                  <img src="assets/images/!sample-user.jpg" alt="Joseph Doe" className="img-circle" />
                </figure>
                <div className="profile-info">
                  <span className="name">Joseph Doe Junior</span>
                  <span className="title">Hey, how are you?</span>
                </div>
              </li>
              <li className="status-online">
                <figure className="profile-picture">
                  <img src="assets/images/!sample-user.jpg" alt="Joseph Doe" className="img-circle" />
                </figure>
                <div className="profile-info">
                  <span className="name">Joseph Doe Junior</span>
                  <span className="title">Hey, how are you?</span>
                </div>
              </li>
              <li className="status-offline">
                <figure className="profile-picture">
                  <img src="assets/images/!sample-user.jpg" alt="Joseph Doe" className="img-circle" />
                </figure>
                <div className="profile-info">
                  <span className="name">Joseph Doe Junior</span>
                  <span className="title">Hey, how are you?</span>
                </div>
              </li>
              <li className="status-offline">
                <figure className="profile-picture">
                  <img src="assets/images/!sample-user.jpg" alt="Joseph Doe" className="img-circle" />
                </figure>
                <div className="profile-info">
                  <span className="name">Joseph Doe Junior</span>
                  <span className="title">Hey, how are you?</span>
                </div>
              </li>
            </ul>
          </div>

        </div></Layout.Col>
        <Layout.Col span="4"><div className="grid-content bg-purple"></div></Layout.Col>
      </Layout.Row>
    </div>
  );
};

export default HomePage;
