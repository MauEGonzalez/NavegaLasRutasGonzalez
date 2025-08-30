import { useState } from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const contactMessage = {
        name,
        email,
        message,
        date: Timestamp.fromDate(new Date()),
      };

      const contactsCollection = collection(db, "contacts");
      await addDoc(contactsCollection, contactMessage);

      alert(
        `¡Gracias por tu mensaje, ${name}! Hemos recibido tu consulta y te contactaremos pronto.`
      );
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error al enviar el mensaje: ", error);
      alert("Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h1>Contáctanos</h1>
      <p className={styles.subtitle}>
        ¿Tienes alguna pregunta? ¡Estamos aquí para ayudarte!
      </p>
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h3>Nuestra Información</h3>
          <p>
            <FaMapMarkerAlt /> Caseros, Buenos Aires, Argentina
          </p>
          <p>
            <FaPhone /> +54 11 1234-5678
          </p>
          <p>
            <FaEnvelope /> contacto@figustore.com
          </p>
        </div>
        <div className={styles.contactForm}>
          <h3>Envíanos un Mensaje</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Tu Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Tu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Tu Mensaje"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
