import React from "react";
import { Layout, Typography, Space } from "antd";
import { Link, Route, Switch } from "react-router-dom";

import { News } from "./components/News";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./components/HomePage";
import { Exchanges } from "./components/Exchanges";
import { CryptoDetails } from "./components/CryptoDetails";
import { CryptoCurrencies } from "./components/CryptoCurrencies";

import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/exchanges" component={Exchanges} />
              <Route
                exact
                path="/cryptocurrencies"
                component={CryptoCurrencies}
              />
              <Route exact path="/crypto/:coinId" component={CryptoDetails} />
            </Switch>
            <Route exact path="/news" component={News} />
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoVerse Inc.
            <br />
            All Right Reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exhcanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
