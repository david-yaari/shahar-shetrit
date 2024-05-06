'use client';
import {FormEvent, useState} from 'react';
import Confetti from 'react-confetti';

const ContactForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);
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

      // alert('Message sent!');

      if (res.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send message');
    }
  };

  return isSubmitted ? (
    <div className='mb-96'>
      <h1
        className='text-center font-semibold text-3xl
      '
      >
        Thank you for your message!
      </h1>
      <Confetti />
    </div>
  ) : (
    <form onSubmit={onSubmit} className='flex flex-col gap-8'>
      <div>
        <label htmlFor='fullName' className='label font-semibold'>
          <span className='label-text'>Full Name</span>
        </label>
        <input
          id='fullName'
          className='input w-full input-bordered input-primary'
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Ethan Mick'
        />
      </div>
      <div>
        <label htmlFor='email' className='label font-semibold'>
          <span className='label-text'>Email</span>
        </label>
        <input
          id='email'
          className='input w-full input-bordered input-primary'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='name@example.com'
        />
      </div>
      <div>
        <label htmlFor='message' className='label font-semibold'>
          <span className='label-text'>Message</span>
        </label>
        <textarea
          id='message'
          className='textarea w-full textarea-primary'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button className='btn btn-primary mb-20' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
