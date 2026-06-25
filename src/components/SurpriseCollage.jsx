import './SurpriseCollage.css'

const SURPRISE_PHOTOS = [
  '/photos/surprise/1.jpg',
  '/photos/surprise/2.jpg',
  '/photos/surprise/3.jpg',
  '/photos/surprise/4.jpg',
  '/photos/surprise/5.jpg',
  '/photos/surprise/6.jpg',
  '/photos/surprise/7.jpg',
  '/photos/surprise/8.jpg',
  '/photos/surprise/9.jpg',
  '/photos/surprise/10.jpg',
  '/photos/surprise/11.jpg',
  '/photos/surprise/12.jpg',
  '/photos/surprise/13.jpg',
  '/photos/surprise/14.jpg',
]

export default function SurpriseCollage({ onNext }) {
  const bgPhotos = [...SURPRISE_PHOTOS, ...SURPRISE_PHOTOS].slice(0, 28)

  return (
    <section className="surprise-section">
      {/* Background Photo Wall */}
      <div className="surprise-bg-wall">
        {bgPhotos.map((src, i) => (
          <img key={`bg-${i}`} src={src} alt="" />
        ))}
      </div>
      {/* Header */}
      <div className="surprise-header animate-fade-in">
        <h2 className="surprise-title text-gradient">
          From the Very Beginning... ✨
        </h2>
        <p className="surprise-subtitle">
          Every moment, every smile, every memory — this is you 💖
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="masonry-grid animate-fade-in delay-200">
        {SURPRISE_PHOTOS.map((src, i) => (
          <div
            key={i}
            className={`masonry-item ${i === 6 ? 'masonry-wide' : ''} ${i === 0 ? 'masonry-tall' : ''}`}
          >
            <img src={src} alt={`Surprise memory ${i + 1}`} loading={i < 4 ? 'eager' : 'lazy'} />
            <div className="masonry-overlay" />
          </div>
        ))}
      </div>

      {/* Action button */}
      <div className="surprise-action animate-fade-in delay-700">
        <p className="surprise-cta-text">Ready for your birthday wishes? 🎂</p>
        <button className="btn-primary surprise-btn" onClick={onNext}>
          Birthday Wishes 🌟
        </button>
      </div>
    </section>
  )
}
