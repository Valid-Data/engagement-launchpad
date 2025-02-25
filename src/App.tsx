
import { Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import Landing from "@/pages/Landing";

function App() {
  // WordPress typically uses path-based routing rather than hash-based
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/calendar" element={<Index />} />
      {/* Add additional WordPress-specific routes as needed */}
      <Route path="/page/:slug" element={<Landing />} />
      <Route path="/post/:slug" element={<Landing />} />
    </Routes>
  );
}

export default App;
