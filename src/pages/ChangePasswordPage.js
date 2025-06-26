import { useState } from 'react';
import axios from 'axios';

export default function ChangePasswordPage() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!oldPassword || !newPassword) return alert("Veuillez remplir tous les champs.");
        if (newPassword.length < 6) return alert("Le mot de passe doit contenir au moins 6 caractères.");

        try {
            await axios.post('http://localhost:8080/auth/change-password', {
                oldPassword,
                newPassword
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Mot de passe changé avec succès.');
        } catch (err) {
            alert("Échec du changement de mot de passe");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Changer le mot de passe</h2>
            <form onSubmit={handleSubmit} className="card p-4">
                <div className="mb-3">
                    <label>Ancien mot de passe</label>
                    <input type="password" className="form-control" value={oldPassword} onChange={e => setOldPassword(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label>Nouveau mot de passe</label>
                    <input type="password" className="form-control" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        </div>
    );
}