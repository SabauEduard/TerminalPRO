'use client';

import { redirect } from 'next/navigation';

export default function Home() {
  // Later you can add authentication check here
  redirect('/login');
}
