import { useState } from 'react';
import axios from 'axios';

export default function NewAccountPage() {
    const [clientId, setClientId] = useState('');
    const [soldeInitial, setSoldeInitial] = useState('');
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8080/agent/comptes?clientId=${clientId}&soldeInitial=${soldeInitial}`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Compte bancaire créé.');
        } catch (err) {
            alert('Erreur lors de la création du compte.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Créer un compte bancaire</h2>
            <input placeholder="ID Client" value={clientId} onChange={e => setClientId(e.target.value)} />
            <input placeholder="Solde Initial" type="number" value={soldeInitial} onChange={e => setSoldeInitial(e.target.value)} />
            <button type="submit">Créer</button>
        </form>
    );
}