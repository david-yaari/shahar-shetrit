'use client';
import {FormEvent, useState} from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, message}),
      });

      alert('Message sent!');
    } catch (error) {
      console.error(error);
      alert('Failed to send message');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
        placeholder='Name'
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        placeholder='Email'
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Message'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ContactForm;
