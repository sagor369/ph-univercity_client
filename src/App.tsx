import { useState } from "react";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProtectedRoute>
        <MainLayout></MainLayout>
      </ProtectedRoute>
    </>
  );
}

export default App;
