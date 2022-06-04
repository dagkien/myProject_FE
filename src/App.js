import { Layout } from "antd";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./auth/login/Login";
import Recovery from "./auth/recovery/Recovery";
import Chat from "./views/client/chat/Chat";
import Home from "./views/client/home/Home";
import NotFound from "./views/notFound/NotFound";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/recovery-password" element={<Recovery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
