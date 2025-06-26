import { Link } from 'react-router-dom';

export default function AgentDashboard() {
    return (
        <div>
            <h2>Agent Dashboard</h2>
            <Link to="/add-client"><button>Ajouter un nouveau client</button></Link>
            <Link to="/new-account"><button>Créer un nouveau compte bancaire</button></Link>
        </div>
    );
}