"use client"; // Required because we are using hooks (useEffect and useRouter)

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Crucial: Import from next/navigation, NOT next/router
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // 1. Handle the 3-second countdown visual tick
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // 2. Trigger the home page redirection after exactly 3000ms
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 3000);

    // Cleanup timers if the user leaves the page before 3 seconds
    return () => {
      clearInterval(countdownTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <h2 style={styles.title}>Oops! Page Not Found</h2>
      <p style={styles.text}>
        We can't seem to find the page you're looking for.
      </p>
      <p style={styles.redirectText}>
        Redirecting to the home page in <strong style={styles.timer}>{countdown}</strong> seconds...
      </p>
      <Link href="/" style={styles.button}>
        Go Home Immediately
      </Link>
    </div>
  );
}

// Minimal Clean Styling
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#FAF7F0',
    fontFamily: 'system-ui, sans-serif',
    color: '#1A1A1A',
    textAlign: 'center',
    padding: '0 20px',
  },
  errorCode: {
    fontSize: '6rem',
    margin: 0,
    color: '#D94111',
    fontWeight: '900',
  },
  title: {
    fontSize: '1.8rem',
    margin: '10px 0',
  },
  text: {
    color: '#666',
    fontSize: '1rem',
    marginBottom: '8px',
  },
  redirectText: {
    fontSize: '0.95rem',
    color: '#8B1E1E',
    marginBottom: '24px',
  },
  timer: {
    fontSize: '1.1rem',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#1A1A1A',
    color: '#FFF',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'background-color 0.2s',
  }
};