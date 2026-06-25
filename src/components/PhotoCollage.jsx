import './PhotoCollage.css'

const PHOTOS = [
  { src: '/photos/memories/1.jpg', col: 1, row: 1 },
  { src: '/photos/memories/3.jpg', col: 2, row: 1 },
  { src: '/photos/memories/4.jpg', col: 3, row: 1 },
  { src: '/photos/memories/5.jpg', col: 4, row: 1 },
  { src: '/photos/memories/6.jpg', col: 1, row: 2 },
  { src: '/photos/memories/7.jpg', col: 4, row: 2 },
  { src: '/photos/memories/8.jpg', col: 1, row: 3 },
  { src: '/photos/memories/9.jpg', col: 4, row: 3 },
  { src: '/photos/memories/10.jpg', col: 1, row: 4 },
  { src: '/photos/memories/11.jpg', col: 2, row: 4, span: 2 },
  { src: '/photos/memories/12.jpg', col: 4, row: 4 },
]

const CENTER_PHOTO = { src: '/photos/memories/2.jpg', col: 2, row: 2, span: 2 }

export default function PhotoCollage({ onNext }) {
  // Create an extended array to fill the background
  const bgPhotos = [...PHOTOS, ...PHOTOS, ...PHOTOS].slice(0, 30);

  return (
    <section className="gallery-section">
      {/* Background Photo Wall */}
      <div className="background-wall">
        {bgPhotos.map((photo, i) => (
          <img key={`bg-${i}`} src={photo.src} alt="" />
        ))}
      </div>

      <svg width="0" height="0" className="svg-defs">
        <defs>
          <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5 0.95 C 0.5 0.95, 0 0.65, 0 0.3 C 0 0.05, 0.25 0, 0.5 0.2 C 0.75 0, 1 0.05, 1 0.3 C 1 0.65, 0.5 0.95, 0.5 0.95 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="heart-wrapper animate-fade-in delay-200">
        <div className="collage-grid">
          <div 
            className="grid-photo center-photo" 
            style={{ gridColumn: '2 / span 2', gridRow: '2 / span 2' }}
          >
            <img src={CENTER_PHOTO.src} alt="Center Memory" />
          </div>
          
          {PHOTOS.map((photo, i) => (
            <div 
              key={i} 
              className="grid-photo"
              style={{ 
                gridColumn: photo.span ? `${photo.col} / span ${photo.span}` : photo.col,
                gridRow: photo.row
              }}
            >
              <img src={photo.src} alt={`Memory ${i+1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <h2 className="forever-text animate-fade-in delay-500">
        Forever in Love
      </h2>

      <div className="section-action animate-fade-in delay-700">
        <button className="btn-primary" onClick={onNext}>
          A Surprise From Chuuti Mentale 😄
        </button>
      </div>
    </section>
  )
}