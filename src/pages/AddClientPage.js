import { useState } from 'react';
import axios from 'axios';

export default function AddClientPage() {
    const [form, setForm] = useState({ nom: '', prenom: '', numeroIdentite: '', dateAnniversaire: '', email: '', adressePostale: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:8080/agent/clients', form, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Client ajouté avec succès.');
        } catch (err) {
            alert('Erreur lors de l’ajout du client.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter un client</h2>
            {['nom', 'prenom', 'numeroIdentite', 'dateAnniversaire', 'email', 'adressePostale'].map(field => (
                <input key={field} name={field} placeholder={field} onChange={handleChange} />
            ))}
            <button type="submit">Créer</button>
        </form>
    );
}
