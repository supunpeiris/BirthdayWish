import './Message.css'

export default function Message({ onNext }) {
  return (
    <section className="message-section">
      <header className="section-header">
        <span className="section-emoji animate-fade-in">💌</span>
        <h2 className="section-title text-gradient animate-fade-in delay-100">
          A Note for You
        </h2>
        <p className="section-sub animate-fade-in delay-200">From the heart</p>
      </header>

      <div className="msg-card glass-panel animate-fade-in delay-300">
        <p className="msg-to">To my prettiest girl, Malshi Charuka,</p>

        <div className="msg-body">
          <p>
            Happy Birthday! I just wanted to let you know how much I appreciate
            having you in my life. You bring so much happiness and light wherever
            you go, and I feel so lucky to be celebrating another year with you.
          </p>
          <p>
            I hope your special day is filled with laughter, love, and all your
            favorite things. May this year ahead bring you nothing but joy,
            success, and everything your heart desires.
          </p>
          <p>
            You are extraordinary in the most effortless way — the way you laugh,
            the way you care, the way you make every moment feel a little more
            magical just by being in it.
          </p>
          <p className="msg-italic">
            You deserve the very best. Always.
          </p>
        </div>

        <p className="msg-signature">With all my love 💕</p>
      </div>

      <div className="section-action animate-fade-in delay-700">
        <button className="btn-primary" onClick={onNext}>
          See Our Memories 📸
        </button>
      </div>
    </section>
  )
}