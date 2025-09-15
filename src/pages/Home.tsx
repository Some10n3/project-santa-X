import React from 'react';

const Home: React.FC = () => (
  <main>
    {/* Hero Section */}
    <section style={{ background: '#222', color: '#fff', padding: '3rem 1rem', textAlign: 'center' }}>
      <img src="/logo.png" alt="Game Logo" style={{ maxWidth: 200 }} />
    </section>

    {/* About Section */}
    <section style={{ background: '#181818', color: '#eee', padding: '2rem 1rem', textAlign: 'center' }}>
      <h3>About the Game</h3>
      <ul>
        <li>Christmas-themed horror game</li>
        <li>First-person perspective from a small elf's viewpoint</li>
        <li>Navigation through darkness. The player has to navigate their way through the map, avoiding threats with limited sight and sound.</li>
      </ul>
    </section>

    {/* Gallery Section */}
    <section style={{ background: '#222', color: '#fff', padding: '2rem 1rem' }}>
      <h3 style={{ textAlign: 'center' }}>Gallery</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <img src="/screenshots/1.png" alt="Screenshot 1" style={{ width: 200, borderRadius: 8 }} />
        <img src="/screenshots/2.png" alt="Screenshot 2" style={{ width: 200, borderRadius: 8 }} />
        <img src="/screenshots/3.png" alt="Screenshot 3" style={{ width: 200, borderRadius: 8 }} />
      </div>
    </section>

    {/* Newsletter Section */}
    <section style={{ background: '#181818', color: '#eee', padding: '2rem 1rem', textAlign: 'center' }}>
      <h3>Subscribe for Updates</h3>
      <form>
        <input
          type="email"
          placeholder="Your email"
          style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: 4, border: 'none', marginRight: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1.5rem', fontSize: '1rem', borderRadius: 4, border: 'none', background: '#e63946', color: '#fff' }}>
          Subscribe
        </button>
      </form>
    </section>
  </main>
);

export default Home;