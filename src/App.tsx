import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Home, NavBar, Product } from "./components";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <NavBar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
