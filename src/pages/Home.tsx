import React from 'react';

const Home: React.FC = () => (
  <main>
    {/* Hero Section */}
    <section style={{ background: '#222', color: '#fff', textAlign: 'center' }}>
    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Game Logo" style={{ maxWidth: 200, borderRadius: 8 }} />
    </section>

    {/* About Section */}
    <section style={{ background: '#181818', color: '#eee', padding: '2rem 1rem', textAlign: 'center' }}>
      <h3>About the Game</h3>
      <ul style={{ listStyleType: 'none', padding: 0, maxWidth: 600, margin: '0 auto', textAlign: 'left' }}>
        <li>Christmas-themed horror game</li>
        <li>First-person perspective from a small elf's viewpoint</li>
        <li>Navigation through darkness. The player has to navigate their way through the map, avoiding threats with limited sight and sound.</li>
      </ul>
    </section>

    {/* Gallery Section */}
    <section style={{ background: '#222', color: '#fff', padding: '2rem 1rem' }}>
      <h3 style={{ textAlign: 'center' }}>Gallery</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <img src={process.env.PUBLIC_URL + '/screenshots/1.png'} alt="Screenshot 1" style={{ width: 400, borderRadius: 8 }} />
        <img src={process.env.PUBLIC_URL + '/screenshots/2.png'} alt="Screenshot 2" style={{ width: 400, borderRadius: 8 }} />
        <img src={process.env.PUBLIC_URL + '/screenshots/3.png'} alt="Screenshot 3" style={{ width: 400, borderRadius: 8 }} />
      </div>
    </section>

    {/* Mood and Aesthetic  */}
    <section style={{ background: '#181818', color: '#fff', padding: '2rem 1rem', textAlign: 'center' }}>
      <h3 style={{ textAlign: 'center' }}>Mood and Aesthetic</h3>
      <p>
        Atmospheric Horror, focused on building the horror feelings and less on directly scaring the players
      </p>
      <p>
        An experience that builds a sense of unease, psychological tension through eerie environments and unsettling ambient sound
      </p>
      <p>
        The game features a retro theme with plain colors to enhance its minimalist, haunting aesthetic
      </p>
    </section>

    {/* Character Section */}
    <section style={{ background: '#222', color: '#fff', padding: '2rem 1rem' }}>
      <h3 style={{ textAlign: 'center' }}>Characters</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <img src={process.env.PUBLIC_URL + '/characters/1.png'} alt="Character 1" style={{ width: 400, borderRadius: 8 }} />
        <img src={process.env.PUBLIC_URL + '/characters/2.png'} alt="Character 2" style={{ width: 400, borderRadius: 8 }} />
        <img src={process.env.PUBLIC_URL + '/characters/3.png'} alt="Character 3" style={{ width: 400, borderRadius: 8 }} />
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