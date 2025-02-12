import React from "react";
import { Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ChatPage from "./pages/ChatPage";
import TeamPage from "./pages/TeamPage";
import { Sidebar } from "lucide-react";
const App = () => {
  return (
    <div className="flex h-screen bg-white overflow-hidden border-2">
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </div>
  );
};

export default App;
