import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main" style={{ padding: '6rem 0', textAlign: 'center' }}>
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you were looking for could not be found.</p>
        <Link className="btn primary-btn" href="/">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
