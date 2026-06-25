import "./wishes.css";

const WISHES = [
  {
    emoji: '😊',
    title: 'Endless Joy',
    text: 'May every single day this year bring you moments that make your heart feel full and your smile grow wider.',
  },
  {
    emoji: '🌟',
    title: 'Big Dreams',
    text: 'May every dream you carry find its wings and take you exactly where you are meant to go.',
  },
  {
    emoji: '💪',
    title: 'Strength',
    text: 'May you find the courage to face every challenge and the grace to turn it into something beautiful.',
  },
  {
    emoji: '💖',
    title: 'Love Always',
    text: 'May you always know you are deeply loved — today, tomorrow, and every birthday that comes after this one.',
  },
  {
    emoji: '✨',
    title: 'Magic Moments',
    text: 'May this year be sprinkled with little surprises and big memories you will look back on and smile.',
  },
  {
    emoji: '🌸',
    title: 'Good Health',
    text: 'May your body and soul stay light, well, and glowing with the most radiant energy all year long.',
  },
]

export default function Wishes({ onNext }) {
  return (
    <section className="wishes-section">
      <header className="section-header">
        <span className="section-emoji animate-fade-in">🌟</span>
        <h2 className="section-title text-gradient animate-fade-in delay-100">
          Birthday Wishes
        </h2>
        <p className="section-sub animate-fade-in delay-200">
          Everything I wish for you
        </p>
      </header>

      <div className="wishes-grid animate-fade-in delay-300">
        {WISHES.map((wish, i) => (
          <div key={i} className="wish-card glass-panel">
            <span className="wish-emoji">{wish.emoji}</span>
            <h3 className="wish-title">{wish.title}</h3>
            <p className="wish-text">{wish.text}</p>
          </div>
        ))}
      </div>

      <div className="wishes-footer animate-fade-in delay-700">
        <p className="wishes-toast">Here's to you, MY Empress 🥂</p>
        <button className="btn-primary" onClick={onNext}>
          One last thing... 💬
        </button>
      </div>
    </section>
  )
}