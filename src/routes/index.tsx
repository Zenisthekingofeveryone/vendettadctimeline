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

type Faction = 'All' | 'Astra' | 'Earth' | 'Unknown'

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
    date: '04.18',
    year: '2089',
    title: 'The signal beneath Europa',
    description:
      'A mining crew records a repeating tone under the moon’s frozen crust. The transmission predates every human relay in the Jovian system by at least twelve thousand years.',
    faction: 'Unknown',
    status: 'Unverified',
    accent: 'violet',
    chapter: 'Before Contact',
  },
  {
    id: 2,
    date: '11.02',
    year: '2091',
    title: 'Astra division is formed',
    description:
      'Seven scientists, two pilots, and one military observer disappear from public records. Their mandate: listen, interpret, and never answer.',
    faction: 'Earth',
    status: 'Classified',
    accent: 'amber',
  },
  {
    id: 3,
    date: '07.29',
    year: '2094',
    title: 'The first gate opens',
    description:
      'For exactly eighty-three seconds, the space above Mare Imbrium folds inward. Sensors detect a starfield that does not match the observable universe.',
    faction: 'Unknown',
    status: 'Confirmed',
    accent: 'cyan',
  },
  {
    id: 4,
    date: '12.10',
    year: '2094',
    title: 'Commander Vale crosses over',
    description:
      'Against standing orders, Vale pilots the survey craft Meridian through the reopened gate. Her final transmission contains four words: “There are cities here.”',
    faction: 'Earth',
    status: 'Missing',
    accent: 'coral',
  },
  {
    id: 5,
    date: '01.01',
    year: '2095',
    title: 'The Astra reply',
    description:
      'Every radio telescope on Earth receives the same message at once. The voice is Vale’s. The language is not.',
    faction: 'Astra',
    status: 'Global Event',
    accent: 'violet',
    chapter: 'The Open Sky',
  },
  {
    id: 6,
    date: '01.03',
    year: '2095',
    title: 'Lights over sixteen cities',
    description:
      'Silent geometric objects hold position above major population centers. No heat, propulsion, or detectable mass. Civilian networks call them crowns.',
    faction: 'Astra',
    status: 'Active',
    accent: 'cyan',
  },
  {
    id: 7,
    date: '01.04',
    year: '2095',
    title: 'The forty-minute silence',
    description:
      'Power grids fail worldwide. When systems return, every clock is precisely forty minutes behind. Millions report dreaming of the same red ocean.',
    faction: 'Unknown',
    status: 'Unexplained',
    accent: 'coral',
  },
  {
    id: 8,
    date: '01.08',
    year: '2095',
    title: 'First peaceful exchange',
    description:
      'An Astra envoy lands in the Namib. It asks for water, copper, and permission to mourn. The encounter lasts eleven minutes.',
    faction: 'Astra',
    status: 'Diplomatic',
    accent: 'sage',
  },
  {
    id: 9,
    date: '01.12',
    year: '2095',
    title: 'The horizon protocol',
    description:
      'Earth’s remaining governments consolidate orbital defense under a single command. The public mission is deterrence. The sealed mission is evacuation.',
    faction: 'Earth',
    status: 'Critical',
    accent: 'amber',
    chapter: 'Present Day',
  },
  {
    id: 10,
    date: 'Now',
    year: '2095',
    title: 'Something approaches the gate',
    description:
      'Deep-range arrays register a moving absence beyond the lunar threshold. Astra vessels are retreating toward Earth. For the first time, the crowns begin to sound alarms.',
    faction: 'Unknown',
    status: 'Developing',
    accent: 'coral',
  },
]

const factions: Faction[] = ['All', 'Astra', 'Earth', 'Unknown']

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
        <a className="brand" href="#top" aria-label="Astra Archive home">
          <span className="brand-mark"><CircleDot size={18} /></span>
          <span>ASTRA / 09</span>
        </a>
        <div className="nav-status">
          <span className="pulse" />
          Archive connection stable
        </div>
        <a className="nav-link" href="#current-status">Current status</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker reveal reveal-1">
          <span>Restricted historical record</span>
          <span>File 7A–2095</span>
        </div>
        <div className="hero-title-wrap reveal reveal-2">
          <p className="hero-index">01—10</p>
          <h1>
            <span>THE</span>
            <span className="outlined">ARRIVAL</span>
          </h1>
          <div className="hero-stamp" aria-hidden="true">
            <Crosshair size={28} />
            <span>Eyes only</span>
          </div>
        </div>
        <div className="hero-copy reveal reveal-3">
          <p>
            A chronological record of first contact, missing time, and the week
            humanity learned it was not alone.
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
            <strong>Obsidian</strong>
            <p>All lunar traffic suspended. Civilian channels remain open.</p>
          </article>
          <article>
            <Sparkles size={20} />
            <span>Astra posture</span>
            <strong>Retreating</strong>
            <p>Thirty-one identified vessels now inside Earth orbit.</p>
          </article>
          <article>
            <Radio size={20} />
            <span>Last transmission</span>
            <strong>06:42 UTC</strong>
            <p>“Do not let it see the oceans.” Origin unconfirmed.</p>
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
