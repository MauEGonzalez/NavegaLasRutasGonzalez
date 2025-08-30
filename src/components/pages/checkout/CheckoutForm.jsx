import { useState } from "react";
import styles from './CheckoutForm.module.css';

const CheckoutForm = ({ onCreateOrder }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

   
    if (name && phone && email) {
        onCreateOrder({ name, phone, email });
    } else {
     
        alert("Por favor, complete todos los campos.");
    }
};

    return (
        <div className={styles.formContainer}>
            <h2>Datos del Comprador</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="phone">Teléfono</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className={styles.submitButton}>Crear Orden</button>
        </form>
        </div>
    );
};

export default CheckoutForm;