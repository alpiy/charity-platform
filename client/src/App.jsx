import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";
import Login from "./pages/Login.jsx";

function App()  {
  return  (
    <Router>
      <div className="min-h-screen  bg-gray-50  text-gray-900">
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route  path="/"  element={<h1  className="text-3xl font-bold text-center">Selamat Datang di Charity Program</h1>}  />
            <Route  path="/login"  element={<Login  />}  />
            <Route  path="/register"  element={<h2>Halaman Register (Segera Hadir)</h2>}  />
            <Route  path="/campaigns"  element={<h2>Daftar Kampanye (Segera Hadir)</h2>}  />
          </Routes>
        </main>
        </div>
      </Router>
  );
}

export default App;
