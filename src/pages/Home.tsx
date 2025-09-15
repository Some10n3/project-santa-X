import React from 'react';

// Add Google Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const sectionStyle = {
  background: 'rgba(30, 30, 40, 0.95)',
  color: '#eee',
  margin: '2rem auto',
  borderRadius: '16px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
  maxWidth: '900px',
  padding: '2rem',
  fontFamily: 'Montserrat, sans-serif',
};

const accentColor = '#e63946';

const headingStyle = {
  color: accentColor,
  fontWeight: 700,
  letterSpacing: '1px',
  marginBottom: '1rem',
  fontFamily: 'Montserrat, sans-serif',
};

const imageStyle = {
  width: 320,
  borderRadius: 12,
  boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const imageHoverStyle = {
  transform: 'scale(1.04)',
  boxShadow: '0 6px 24px rgba(0,0,0,0.6)',
};

const Home: React.FC = () => (
  <main style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #181818 0%, #23243a 100%)',
    padding: '2rem 0',
    fontFamily: 'Montserrat, sans-serif',
  }}>
    {/* Hero Section
    <section style={{ background: '#222', color: '#fff', textAlign: 'center' }}>
    
    </section> */}

    {/* About Section */}
    <section style={{ ...sectionStyle, textAlign: 'center' }}>
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Game Logo" style={{ maxWidth: 180, borderRadius: 12, marginBottom: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.4)' }} />
      <h2 style={headingStyle}>About the Game</h2>
      <p style={{ maxWidth: 600, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
        Imagine a Christmas game where you play as an elf, handpicked by Santa to deliver gifts. But with each assignment, the destinations become stranger and more surreal—twisting from a seemingly normal house to bizarre, unsettling places. As the journey unfolds, you begin to sense something is off, leading to a chilling mystery where you must uncover the true identity of Santa himself. Blending festive cheer with escalating suspense and horror, this game offers a unique holiday adventure that keeps players guessing until the very end.
      </p>
    </section>

    {/* Key Features  */}
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Key Features</h2>
      <ul style={{ listStyle: 'disc', paddingLeft: '2rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
        <li>Christmas-themed horror game</li>
        <li>First-person perspective from a small elf's viewpoint</li>
        <li>Navigate through darkness, avoiding threats with limited sight and sound</li>
      </ul>
    </section>

    {/* Gallery Section */}
    <section style={{ ...sectionStyle, background: 'rgba(24,24,32,0.98)' }}>
      <h2 style={headingStyle}>Gallery</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {[1,2,3].map(i => (
          <img
            key={i}
            src={process.env.PUBLIC_URL + `/screenshots/${i}.png`}
            alt={`Screenshot ${i}`}
            style={imageStyle}
            onMouseOver={e => Object.assign(e.currentTarget.style, imageHoverStyle)}
            onMouseOut={e => Object.assign(e.currentTarget.style, imageStyle)}
          />
        ))}
      </div>
    </section>

    {/* Mood and Aesthetic  */}
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Mood and Aesthetic</h2>
      <ul style={{ listStyle: 'disc', paddingLeft: '2rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
        <li>Atmospheric horror, focused on building suspense and unease</li>
        <li>Psychological tension through eerie environments and ambient sound</li>
        <li>Retro theme with plain colors for a minimalist, haunting aesthetic</li>
      </ul>
    </section>

    {/* Character Section */}
    <section style={{ ...sectionStyle, background: 'rgba(24,24,32,0.98)' }}>
      <h2 style={headingStyle}>Characters</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {[1,2,3].map(i => (
          <img
            key={i}
            src={process.env.PUBLIC_URL + `/characters/${i}.png`}
            alt={`Character ${i}`}
            style={imageStyle}
            onMouseOver={e => Object.assign(e.currentTarget.style, imageHoverStyle)}
            onMouseOut={e => Object.assign(e.currentTarget.style, imageStyle)}
          />
        ))}
      </div>
    </section>

    {/* Newsletter Section */}
    <section style={{ ...sectionStyle, textAlign: 'center', background: 'rgba(30,30,40,0.95)' }}>
      <h2 style={headingStyle}>Subscribe for Updates</h2>
      <form>
        <input
          type="email"
          placeholder="Your email"
          style={{ padding: '0.75rem', fontSize: '1.1rem', borderRadius: 6, border: 'none', marginRight: '0.5rem', width: '220px', background: '#23243a', color: '#eee' }}
        />
        <button type="submit" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem', borderRadius: 6, border: 'none', background: accentColor, color: '#fff', fontWeight: 700, letterSpacing: '1px', boxShadow: '0 2px 8px rgba(0,0,0,0.3)', cursor: 'pointer' }}>
          Subscribe
        </button>
      </form>
    </section>
  </main>
);

export default Home;