import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import AgentDashboard from './pages/AgentDashboard';
import ClientDashboard from './pages/ClientDashboard';
import AddClientPage from './pages/AddClientPage';
import NewVirementPage from './pages/NewVirementPage';
import NewAccountPage from './pages/NewAccountPage';
import Navbar from './components/Navbar';

function PrivateRoute({ children, role }) {
    const { user } = useContext(AuthContext);
    const [decodedRole, setDecodedRole] = useState(null);

    useEffect(() => {
        if (user?.token) {
            const payload = JSON.parse(atob(user.token.split('.')[1]));
            setDecodedRole(payload?.authorities?.[0] || payload?.role);
        }
    }, [user]);

    if (!user) return <Navigate to="/" />;
    if (role && decodedRole !== role) return <Navigate to="/unauthorized" />;

    return children;
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dashboard" element={<PrivateRoute role="AGENT_GUICHET"><AgentDashboard /></PrivateRoute>} />
                    <Route path="/client-dashboard" element={<PrivateRoute role="CLIENT"><ClientDashboard /></PrivateRoute>} />
                    <Route path="/add-client" element={<PrivateRoute role="AGENT_GUICHET"><AddClientPage /></PrivateRoute>} />
                    <Route path="/new-account" element={<PrivateRoute role="AGENT_GUICHET"><NewAccountPage /></PrivateRoute>} />
                    <Route path="/new-virement" element={<PrivateRoute role="CLIENT"><NewVirementPage /></PrivateRoute>} />
                    <Route path="/unauthorized" element={<div>Vous n’avez pas le droit d’accéder à cette fonctionnalité. Veuillez contacter votre administrateur.</div>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;