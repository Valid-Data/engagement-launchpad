
import { Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import Landing from "@/pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/calendar" element={<Index />} />
    </Routes>
  );
}

export default App;
