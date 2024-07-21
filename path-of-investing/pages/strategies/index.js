import Head from 'next/head';
import Link from 'next/link';
import '../../styles/Global.css';
import '../../styles/Strategies.css';
import Table from '../../components/Table';

const strategies = [
  { id: 'tailoring_orbs', title: 'Tailoring Orbs', description: 'Invest in Tailoring Orbs, which appreciate in value late in the league' },
  { id: 'tempering orbs', title: 'Tempering Orbs', description: 'Invest in Tempering Orbs, which appreciate in value late in the league' },
  { id: 'voices', title: 'Voices', description: 'While expensive initially, investing in a Voices will provide great wealth in the long run' },
  { id: 'max_ward', title: 'Max-roll base defense items', description: 'Purchase maxed defense items which are expensive late in the league' },
];

const columns = [
  { header: 'Title', accessor: 'title' },
  { header: 'Description', accessor: 'description' },
];

export default function Strategies() {
  return (
    <div>
      <Head>
        <title>Investing Strategies</title>
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
        <h1>Investing Strategies</h1>
        <Table columns={columns} data={strategies} />
      </main>
    </div>
  );
}
