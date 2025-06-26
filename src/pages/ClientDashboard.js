import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ClientDashboard() {
    const [comptes, setComptes] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [selectedRib, setSelectedRib] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('http://localhost:8080/client/dashboard', {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => {
            setComptes(res.data);
            if (res.data.length > 0) setSelectedRib(res.data[0].rib);
        });
    }, []);

    useEffect(() => {
        if (selectedRib) {
            axios.get(`http://localhost:8080/client/transactions?rib=${selectedRib}`, {
                headers: { Authorization: `Bearer ${token}` }
            }).then(res => setTransactions(res.data));
        }
    }, [selectedRib]);

    return (
        <div>
            <h2>Tableau de bord</h2>
            <select onChange={e => setSelectedRib(e.target.value)} value={selectedRib}>
                {comptes.map(c => (
                    <option key={c.rib} value={c.rib}>{c.rib} - {c.solde} DH</option>
                ))}
            </select>
            <h3>Dernières opérations</h3>
            <ul>
                {transactions.map(op => (
                    <li key={op.id}>{op.dateOperation} - {op.intitule} - {op.montant} DH ({op.type})</li>
                ))}
            </ul>
        </div>
    );
}