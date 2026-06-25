import { useState } from 'react'
import { MessageSquare, RotateCcw, Mail } from 'lucide-react'
import './Feedback.css'

// 👇 Get your free access key from https://web3forms.com/ and paste it here
const WEB3FORMS_KEY = '924e9b58-4f91-4b37-b943-1e66f59b7282' // e.g. "1234abcd-..."

export default function Feedback({ onRestart }) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const [isSending, setIsSending] = useState(false)

  const isValid = message.trim().length > 0

  const handleEmail = async () => {
    if (!isValid) return
    setIsSending(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: name || "Birthday App User",
          name: name || "Anonymous",
          message: message,
          subject: `Birthday Message from ${name || 'Your Special Someone'}`,
          botcheck: "", // Honeypot field
        }),
      })

      const result = await response.json()
      if (result.success) {
        setSent(true)
      } else {
        console.error("Web3Forms Error:", result)
        alert(result.message || "Something went wrong! Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("Failed to send message.")
    } finally {
      setIsSending(false)
    }
  }



  return (
    <section className="feedback-section">
      <header className="section-header">
        <span className="section-emoji animate-fade-in">💬</span>
        <h2 className="section-title text-gradient animate-fade-in delay-100">
          Leave a Message
        </h2>
        <p className="section-sub animate-fade-in delay-200">
          I'd love to hear from you!
        </p>
      </header>

      {sent ? (
        <div className="feedback-sent glass-panel animate-fade-in">
          <span className="sent-emoji">🎉</span>
          <h3>Thank you!</h3>
          <p>Your message has been sent. It'll be treasured forever 💕</p>
          <button className="btn-restart" onClick={onRestart}>
            <RotateCcw size={16} style={{ marginRight: '8px' }} /> Start Over
          </button>
        </div>
      ) : (
        <div className="feedback-card glass-panel animate-fade-in delay-300">
          <div className="feedback-icon-box">
            <MessageSquare size={32} color="var(--rose-dark)" />
          </div>

          {/* Honeypot Spam Protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <input
            className="feedback-name-input"
            placeholder="The name (what'd you like to call me most🥰)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            className="feedback-input"
            placeholder="Share your thoughts, feelings, or just a little thank you..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="feedback-actions">
            <button
              className="btn-primary feedback-send-btn email-btn"
              onClick={handleEmail}
              disabled={!isValid || isSending}
            >
              <Mail size={18} style={{ marginRight: '8px' }} />
              {isSending ? "Sending..." : "Send via Email"}
            </button>


          </div>
        </div>
      )}

      {!sent && (
        <>
          <p className="feedback-hint animate-fade-in delay-700">
            Your message will be delivered straight to the heart 💌
          </p>
          <button className="btn-restart animate-fade-in delay-800" onClick={onRestart}>
            <RotateCcw size={16} style={{ marginRight: '8px' }} /> Start Over
          </button>
        </>
      )}
    </section>
  )
}
