import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import Chat from "./pages/Chat";
import ProtectedRoute from "./components/ProtectedRoute";




function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />

                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;