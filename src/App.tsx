import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Home } from "./components";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
