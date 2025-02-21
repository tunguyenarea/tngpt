import Link from 'next/link';

export default function Header() {
  return (
  <>

  <header>
    <section className="flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-1">
      <Link href="/">
        TN GPT
      </Link>
      <p>tudellg33579@protonmail.com</p>
    </section>

  </header>

  </>
  );
}
