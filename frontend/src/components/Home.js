import React, { useState } from 'react';
import '../styles/home.css';
import { calculerRTT } from '../services/calculService';

function HomePage() {
    const [formData, setFormData] = useState({
        annee: 2020,
        joursTravailles: 218,
        congesPayes: 25,
    });

    const [resultat, setResultat] = useState(null);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const resultatAPI = await calculerRTT(formData);
            console.log('====================================');
            console.log(resultatAPI);
            console.log('====================================');
            setResultat(resultatAPI.joursRTT);
        } catch (error) {
            console.error("Erreur lors de l'appel à l'API calculerRTT :", error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="annee">Année</label>
                    <input
                        type="number"
                        id="annee"
                        name="annee"
                        value={formData.annee}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="joursTravailles">Jours Travaillés</label>
                    <input
                        type="number"
                        id="joursTravailles"
                        name="joursTravailles"
                        value={formData.joursTravailles}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="congesPayes">Congés Payés</label>
                    <input
                        type="number"
                        id="congesPayes"
                        name="congesPayes"
                        value={formData.congesPayes}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-button">Calculer</button>
            </form>
            {resultat !== null && (
                <div className="resultat">
                    Nombre de jours de RTT : {resultat}
                </div>
            )}
        </div>
    );
}

export default HomePage;
