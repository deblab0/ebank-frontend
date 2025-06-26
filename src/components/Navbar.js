import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const [role, setRole] = useState(null);

    useEffect(() => {
        if (user?.token) {
            const payload = JSON.parse(atob(user.token.split('.')[1]));
            setRole(payload?.authorities?.[0] || payload?.role);
        }
    }, [user]);

    if (!user) return null;

    return (
        <nav>
            <span>Bienvenue, {role}</span>
            {role === 'AGENT_GUICHET' && (
                <>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/add-client">Ajouter Client</Link>
                    <Link to="/new-account">Nouveau Compte</Link>
                </>
            )}
            {role === 'CLIENT' && (
                <>
                    <Link to="/client-dashboard">Tableau de bord</Link>
                    <Link to="/new-virement">Nouveau Virement</Link>
                </>
            )}
            <button onClick={logout}>Déconnexion</button>
        </nav>
    );
}