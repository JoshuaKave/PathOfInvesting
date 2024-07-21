// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../styles/Home.css';
import '../styles/Global.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Path of Exile Investment</title>
      </Head>

      <nav className="navbar">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/trends">Trends</Link>
          </li>
          <li>
            <Link href="/strategies">Strategies</Link>
          </li>
        </ul>
      </nav>

      <main className="main">
        <h1 className="title">Path of Exile Investment</h1>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search for currencies..." />
          <button className="search-button">Search</button>
        </div>
      </main>
    </div>
  );
}
