// pages/signin.tsx
'use client';

import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/navigation';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/src/firebase/firebase';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { signIn, getUserType } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      const userCredential = await signIn(email, password);
      const userType = await getUserType(userCredential.user.uid);
      
      if (userType === 'customer') {
        router.push('/explore');
      } else if (userType === 'restaurant') {
        router.push('/explore');
      } else {
        setError('Account type not found');
      }
    } catch (err) {
      console.error(err);

    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        const userType = await getUserType(result.user.uid);
        
        if (userType === 'customer' || !userType) {
          router.push('/explore');
        } else if (userType === 'restaurant') {
          router.push('/restaurant/dashboard');
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-4"
        >
          Sign In
        </button>
      </form>
      
      <button 
        onClick={signInWithGoogle}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-4"
        type="button"
      >
        Sign in with Google
      </button>
      
      <div className="text-center mt-4">
        Don&apos;t have an account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
      </div>
    </div>
  );
}
