import React, { useState } from 'react';
import axios from 'axios';

function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email_address: email,
      status: 'subscribed',
      // Puedes añadir más campos aquí si los necesitas
    };

    try {
      const response = await axios({
        method: 'post',
        url: `https://usX.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members/`,
        data: data,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `apikey YOUR_API_KEY`,
        },
      });

      if (response.status === 200) {
        // El correo electrónico se ha añadido correctamente a la lista
        // Aquí puedes manejar lo que sucede después de que el correo electrónico se añade con éxito
      }
    } catch (error) {
      // Aquí puedes manejar los errores
      console.error('Hubo un error al añadir el correo electrónico a la lista', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Suscribirse</button>
    </form>
  );
}

export default NewsletterForm;
