import { createFileRoute } from '@tanstack/react-router'
import {
  Activity,
  ChevronDown,
  CircleDot,
  Crosshair,
  Filter,
  Radio,
  Search,
  ShieldAlert,
  Sparkles,
  X,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import type { CSSProperties } from 'react'

export const Route = createFileRoute('/')({
  component: TimelineArchive,
})

type Faction = 'All' | 'Earth' | 'Unknown'

type TimelineEvent = {
  id: number
  date: string
  year: string
  title: string
  description: string
  faction: Exclude<Faction, 'All'>
  status: string
  accent: 'amber' | 'cyan' | 'coral' | 'violet' | 'sage'
  chapter?: string
}

const events: TimelineEvent[] = [
  {
    id: 1,
    date: '',
    year: '',
    title: 'Fear Has A Name',
    description:
      "The city never truly sleeps. To most, he's only a myth. To those who prey on the innocent, he's the last thing they'll ever see.",
    faction: 'Earth',
    status: 'Ongoing',
    accent: 'amber',
    chapter: 'THE BEGINNING  ',
  },
  {
    id: 2,
    date: '',
    year: '',
    title: 'The Criminal Underworld',
    description:
      'Crime families still rule the streets, but a new name has begun to circulate among the underworld. ໓໐¢t໐r ໓ēคth. A scientist whose experiments threaten to change the city forever.',
    faction: 'Earth',
    status: 'Pending',
    accent: 'coral',
  },
  {
    id: 3,
    date: '',
    year: '',
    title: 'The Underworld Evolves',
    description:
      'Criminals are evolving. While the crime families continue their war for power, whispers tell of ɬɧɛ ƈąɬ, a thief who leaves no trace, ɬɧɛ ℘ɛŋɠųıŋ, a businessman with growing influence over the city’s underworld, and a brilliant psychiatrist whose experiments are beginning to cross dangerous lines. Gotham is changing, and The Dark Knight knows the worst is yet to come.',
    faction: 'Earth',
    status: 'Pending',
    accent: 'violet',
  },
  {
    id: 4,
    date: '',
    year: '',
    title: 'The White Knight',
    description:
      'A new symbol of hope begins to rise within Gotham. A respected figure in the fight against corruption starts challenging the forces that control the city, while a young shadow from a tragic past steps into the world.',
    faction: 'Earth',
    status: 'Pending',
    accent: 'cyan',
  },
  {
    id: 5,
    date: '',
    year: '',
    title: 'The Killing Joke Begins',
    description:
      'Gotham has faced criminals before, but nothing could prepare the city for what comes next. A mysterious figure begins spreading chaos through the streets, leaving behind confusion, fear, and a trail of unanswered questions.',
    faction: 'Earth',
    status: 'Pending',
    accent: 'violet',
    chapter: 'The Golden Age',
  },
  {
    id: 6,
    date: '',
    year: '',
    title: "The World's Finest",
    description:
      'For the first time, the world looks beyond the shadows of Gotham and sees something impossible.',
    faction: 'Unknown',
    status: 'Pending',
    accent: 'cyan',
  },
  {
    id: 7,
    date: '',
    year: '',
    title: 'LOCKED',
    description: 'LOCKED',
    faction: 'Unknown',
    status: 'Unexplained',
    accent: 'cyan',
  },
  {
    id: 8,
    date: '',
    year: '',
    title: 'LOCKED',
    description: 'LOCKED',
    faction: 'Unknown',
    status: 'Unexplained',
    accent: 'cyan',
  },
  {
    id: 9,
    date: '',
    year: '',
    title: 'LOCKED',
    description: 'LOCKED',
    faction: 'Unknown',
    status: 'Unexplained',
    accent: 'cyan',
  },
  {
    id: 10,
    date: '',
    year: '',
    title: 'LOCKED',
    description: 'LOCKED.',
    faction: 'Unknown',
    status: 'Unexplained',
    accent: 'cyan',
  },
]

const factions: Faction[] = ['All', 'Earth', 'Unknown']

function TimelineArchive() {
  const [activeFaction, setActiveFaction] = useState<Faction>('All')
  const [query, setQuery] = useState('')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const visibleEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return events.filter((event) => {
      const matchesFaction =
        activeFaction === 'All' || event.faction === activeFaction
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${event.title} ${event.description} ${event.status}`
          .toLowerCase()
          .includes(normalizedQuery)

      return matchesFaction && matchesQuery
    })
  }, [activeFaction, query])

  return (
    <main className="archive-shell">
      <div className="noise" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />

      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Timeline Archive home">
          <span className="brand-mark"><CircleDot size={18} /></span>
          <span>ARCHIVE / 09</span>
        </a>
        <div className="nav-status">
          <span className="pulse" />
         connection stable
        </div>
        <a className="nav-link" href="#current-status">Current status</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker reveal reveal-1">
          <span>historical record</span>
          <span>File 7A–2095</span>
        </div>
        <div className="hero-title-wrap reveal reveal-2">
          <p className="hero-index">01—10</p>
          <h1>
            <span>THE</span>
            <span className="outlined">Timeline</span>
          </h1>
          <div className="hero-stamp" aria-hidden="true">
            <Crosshair size={28} />
            <span>Eyes only</span>
          </div>
        </div>
        <div className="hero-copy reveal reveal-3">
          <p>
            A chronological record of the DC Timeline
          </p>
          <div className="scroll-cue">
            <span>Begin transmission</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </section>

      <section className="archive-controls" aria-label="Timeline controls">
        <button
          className="filter-toggle"
          type="button"
          onClick={() => setFiltersOpen((open) => !open)}
          aria-expanded={filtersOpen}
        >
          <Filter size={16} /> Filter records
        </button>
        <div className={`filter-panel ${filtersOpen ? 'is-open' : ''}`}>
          <div className="faction-tabs" aria-label="Filter by faction">
            {factions.map((faction) => (
              <button
                key={faction}
                type="button"
                className={activeFaction === faction ? 'active' : ''}
                onClick={() => setActiveFaction(faction)}
              >
                {faction}
              </button>
            ))}
          </div>
          <label className="search-box">
            <Search size={16} />
            <span className="sr-only">Search timeline records</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the archive"
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
                <X size={14} />
              </button>
            )}
          </label>
        </div>
        <div className="results-count">
          <span>{String(visibleEvents.length).padStart(2, '0')}</span> records visible
        </div>
      </section>

      <section className="timeline-section" aria-label="Historical timeline">
        {visibleEvents.length > 0 ? (
          <div className="timeline">
            {visibleEvents.map((event, index) => (
              <div className="timeline-group" key={event.id}>
                {event.chapter && (
                  <div className="chapter-marker">
                    <span />
                    <p>{event.chapter}</p>
                    <span />
                  </div>
                )}
                <article
                  className={`timeline-event ${index % 2 === 0 ? 'event-left' : 'event-right'}`}
                  style={{ '--delay': `${Math.min(index, 6) * 70}ms` } as CSSProperties}
                >
                  <div className={`event-card accent-${event.accent}`}>
                    <div className="card-topline">
                      <span>{event.faction} record</span>
                      <span>0{event.id}</span>
                    </div>
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                    <div className="card-meta">
                      <span className={`status status-${event.accent}`}>{event.status}</span>
                      <span className="readout"><Activity size={13} /> Logged</span>
                    </div>
                  </div>

                  <div className="event-axis">
                    <span className={`axis-node accent-${event.accent}`} />
                  </div>

                  <div className="event-date">
                    <strong>{event.date}</strong>
                    <span>{event.year}</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Radio size={30} />
            <h2>No matching transmissions</h2>
            <p>Change the faction filter or clear your archive search.</p>
            <button
              type="button"
              onClick={() => {
                setActiveFaction('All')
                setQuery('')
              }}
            >
              Reset archive
            </button>
          </div>
        )}
      </section>

      <section className="status-section" id="current-status">
        <div className="status-heading">
          <p>Live intelligence / 2095.01.12</p>
          <h2>Current situation</h2>
        </div>
        <div className="status-grid">
          <article>
            <ShieldAlert size={20} />
            <span>Threat condition</span>
            <strong>Severe</strong>
            <p>Organized crime continues to tighten its grip on Gotham.</p>
          </article>
          <article>
            <Sparkles size={20} />
            <span>Vigilante Activity</span>
            <strong>Confirmed</strong>
            <p>Reports of a masked figure continue to spread across the city.</p>
          </article>
          <article>
            <Radio size={20} />
            <span>GCPD Dispatch</span>
            <strong>12:14 AM</strong>
            <p>"Multiple suspects apprehended... no officers on scene."</p>
          </article>
        </div>
      </section>

      <footer>
        <div className="footer-mark"><CircleDot size={18} /> ASTRA / 09</div>
        <p>This archive updates as verified intelligence becomes available.</p>
        <span>End of accessible record</span>
      </footer>
    </main>
  )
}
  )
}
