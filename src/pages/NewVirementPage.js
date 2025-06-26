// File: src/pages/NewVirementPage.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function NewVirementPage() {
    const [sourceRib, setSourceRib] = useState('');
    const [destinationRib, setDestinationRib] = useState('');
    const [montant, setMontant] = useState(0);
    const [intitule, setIntitule] = useState('');
    const [ribList, setRibList] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('http://localhost:8080/client/dashboard', {
            headers: {Authorization: `Bearer ${token}`}
        }).then(res => {
            setRibList(res.data);
            if (res.data.length > 0) setSourceRib(res.data[0].rib);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/client/virement', {
                sourceRib, destinationRib, montant, intitule
            }, {
                headers: {Authorization: `Bearer ${token}`}
            });
            alert('Virement effectué');
        } catch (err) {
            alert('Erreur lors du virement');
        }
    }
}