import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && message) {
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      emailjs
        .send(
          'service_42q25ow', 
          'template_n0gwy2v', 
          templateParams,
          '4PbIym93KVJ5OWiBU'
        )
        .then(
          (response) => {
            console.log('Réponse EmailJS:', response);
            setStatus('Message envoyé avec succès!');
            
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.log('Erreur EmailJS:', error.text);
            setStatus('Une erreur est survenue. Veuillez réessayer.');
          }
        );
    } else {
      setStatus('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg mt-20">
      <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-800">Nom</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-800"
            placeholder="Votre nom"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-800"
            placeholder="Votre email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md text-gray-800"
            placeholder="Votre message"
            rows="4"
          />
        </div>

        {status && (
          <div className={`mb-4 text-center ${status.includes('succès') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
