// pages/trends.js
import Head from 'next/head';
import Link from 'next/link';
import '../styles/Global.css';

export default function Trends() {
  return (
    <div className="container">
      <Head>
        <title>Trends - Path of Exile Investment</title>
      </Head>

      <nav>
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

      <main>
        <h1>Trends</h1>
        <p>Coming soon...</p> 
      </main>
    </div>
  );
}
