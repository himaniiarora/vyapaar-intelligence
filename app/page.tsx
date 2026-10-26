'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bell,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleHelp,
  Database,
  Camera,
  LayoutDashboard,
  Lightbulb,
  MessageCircle,
  Network,
  Package,
  Plus,
  Search,
  Send,
  Sparkles,
  Store,
  UserRound,
  Users,
  WandSparkles,
  Play,
  Zap,
} from 'lucide-react'

// --------------------------------------------------
// CONSTANTS & MOCK DATA
// --------------------------------------------------

const accent = '#e7a63b'

const chartData = [
  { week: 'May 05', blue: 38, saree: 27, denim: 18, tops: 24 },
  { week: 'May 12', blue: 48, saree: 32, denim: 20, tops: 29 },
  { week: 'May 19', blue: 44, saree: 37, denim: 23, tops: 31 },
  { week: 'May 26', blue: 62, saree: 35, denim: 29, tops: 36 },
  { week: 'Jun 02', blue: 73, saree: 43, denim: 32, tops: 40 },
  { week: 'Jun 09', blue: 82, saree: 48, denim: 35, tops: 46 },
]

const signals = [
  {
    platform: 'WhatsApp',
    text: 'Blue kurti M size mein available hai?',
    color: '#43c86b',
    icon: MessageCircle,
  },
  {
    platform: 'Instagram',
    text: 'Please restock this design!',
    color: '#de6a8d',
    icon: Camera,
  },
  {
    platform: 'YouTube',
    text: 'Large size kab available hoga?',
    color: '#e05252',
    icon: Play,
  },
]


// --------------------------------------------------
// REUSABLE COMPONENTS
// --------------------------------------------------

function Logo({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`logo-mark ${small ? 'logo-mark-sm' : ''}`}>
        <Network size={small ? 15 : 18} />
      </div>

      <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
        vyapaar
        <span className="text-amber">.intelligence</span>
      </span>
    </div>
  )
}

function Pill({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <span className={`eyebrow ${className}`}>{children}</span>
}

// --------------------------------------------------
// LANDING PAGE
// --------------------------------------------------

function Landing({ onDashboard }: { onDashboard: () => void }) {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Header */}
      <header className="site-header">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#memory">Business Memory</a>

          <button
            onClick={onDashboard}
            className="header-link"
          >
            Dashboard
            <ArrowRight size={14} />
          </button>
        </nav>

        <button
          onClick={onDashboard}
          className="button button-small hidden sm:flex"
        >
          Explore Vyapaar
          <ArrowRight size={15} />
        </button>
      </header>

      <main>
        {/* Hero */}
        <section className="hero section-shell">
          <div className="hero-copy">
            <Pill>
              <Sparkles size={12} />
              Your business, understood
            </Pill>

            <h1>
              Your Business Has Conversations.
              <br />
              <em>Let It Have Memory.</em>
            </h1>

            <p>
              Vyapaar Intelligence turns scattered customer interactions into
              long-term business memory and actionable insights — helping
              small businesses make smarter decisions.
            </p>

            <div className="hero-actions">
              <button
                onClick={onDashboard}
                className="button"
              >
                Explore Dashboard
                <ArrowRight size={16} />
              </button>

              <a
                href="#how-it-works"
                className="button button-ghost"
              >
                See How It Works
                <ChevronRight size={16} />
              </a>
            </div>

            <div className="hero-proof">
              <div className="avatar-stack">
                <span>SK</span>
                <span>AM</span>
                <span>RN</span>
                <span>+2k</span>
              </div>

              <span>
                Built for the people
                <br />
                behind India&apos;s shops.
              </span>
            </div>
          </div>

          <SignalCore />
        </section>

        {/* Missing Layer */}
        <section className="section-shell intro-section">
          <div>
            <Pill>01 / The missing layer</Pill>

            <h2>
              Your most valuable
              <br />
              <em>business data is already there.</em>
            </h2>
          </div>

          <p className="intro-copy">
            Every question, comment, and complaint contains a signal. But when
            it lives in five different places, the pattern stays invisible.
          </p>
        </section>

        {/* Signals */}
        <section className="section-shell signals-section">
          <div className="signal-wall">
            <div className="wall-label">
              SCATTERED CUSTOMER SIGNALS
              <span>•••</span>
            </div>

            {signals.map((item, i) => (
              <motion.div
                key={item.platform}
                initial={{
                  opacity: 0,
                  y: 20,
                  rotate: i === 1 ? 2 : i === 2 ? -2 : -3,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`float-signal signal-${i}`}
              >
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <item.icon
                    size={14}
                    style={{ color: item.color }}
                  />

                  {item.platform}

                  <span className="ml-auto text-[10px] text-muted">
                    2m ago
                  </span>
                </div>

                <p>{item.text}</p>
              </motion.div>
            ))}

            <div className="wall-fade">
              <span>Important context</span> gets lost in the scroll.
            </div>
          </div>

          <div className="signal-explanation">
            <div className="number-mark">1</div>

            <div>
              <h3>Good data is hiding in plain sight.</h3>

              <p>
                Your customers are telling you exactly what they want — in the
                language they naturally use. Vyapaar brings those conversations
                together so no useful signal gets left behind.
              </p>

              <a href="#how-it-works">
                See the full journey
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <HowItWorks />
        <MemorySection />
        <Features />

        {/* CTA */}
        <section className="cta-section section-shell">
          <div className="cta-grid">
            <div>
              <Pill>
                <Zap size={12} />
                Intelligence that compounds
              </Pill>

              <h2>
                Start remembering
                <br />
                <em>what matters.</em>
              </h2>

              <p>
                Your next smart business decision is already hiding in your
                conversations.
              </p>

              <button
                onClick={onDashboard}
                className="button"
              >
                Explore Vyapaar
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="cta-orbit">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="orbit-core">
                <BrainCircuit size={30} />
                <span>
                  BUSINESS
                  <br />
                  MEMORY
                </span>
              </div>

              <span className="orbit-node node-a">DATA</span>
              <span className="orbit-node node-b">CONTEXT</span>
              <span className="orbit-node node-c">ACTION</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer section-shell">
        <Logo small />
        <span>Data → Memory → Intelligence → Action</span>
        <span>© 2026 Vyapaar Intelligence</span>
      </footer>
    </div>
  )
}

// --------------------------------------------------
// SIGNAL CORE
// --------------------------------------------------

function SignalCore() {
  const nodes = [
    {
      x: 12,
      y: 30,
      label: 'WhatsApp',
      icon: MessageCircle,
    },
    {
      x: 10,
      y: 70,
      label: 'Instagram',
      icon: Camera,
    },
    {
      x: 82,
      y: 22,
      label: 'YouTube',
      icon: Play,
    },
    {
      x: 88,
      y: 71,
      label: 'Comments',
      icon: MessageCircle,
    },
  ]

  return (
    <div className="signal-visual">
      <div className="visual-caption">
        <span>LIVE BUSINESS MEMORY</span>

        <span>
          04.28.25
          <span className="live-dot" />
        </span>
      </div>

      <div className="visual-stage">
        <div className="connection-lines" />

        {nodes.map((node) => (
          <motion.div
            key={node.label}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: node.x / 20,
            }}
            className="source-node"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
            }}
          >
            <node.icon size={14} />
            <span>{node.label}</span>
          </motion.div>
        ))}

        <motion.div
          animate={{
            boxShadow: [
              '0 0 16px #e7a63b44',
              '0 0 42px #e7a63b99',
              '0 0 16px #e7a63b44',
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="intelligence-core"
        >
          <BrainCircuit size={27} />

          <span>
            AI
            <br />
            <b>CORE</b>
          </span>
        </motion.div>

        <div className="memory-node memory-one">
          <Database size={14} />
          memory
        </div>

        <div className="memory-node memory-two">
          <Check size={14} />
          signal saved
        </div>

        <div className="action-card">
          <div className="flex items-center gap-2">
            <Lightbulb
              size={15}
              className="text-amber"
            />

            <span>INSIGHT DETECTED</span>
          </div>

          <b>Blue Kurti demand is rising</b>

          <small>Medium + Large · 42 inquiries</small>
        </div>
      </div>

      <div className="visual-flow">
        <span>SCATTERED DATA</span>
        <ArrowRight size={13} />

        <span className="text-amber">BUSINESS MEMORY</span>

        <ArrowRight size={13} />

        <span>USEFUL ACTION</span>
      </div>
    </div>
  )
}

// --------------------------------------------------
// HOW IT WORKS
// --------------------------------------------------

function HowItWorks() {
  const steps = [
    [
      '01',
      'Collect',
      'Customer interactions from every platform.',
    ],
    [
      '02',
      'Remember',
      'Important context becomes business memory.',
    ],
    [
      '03',
      'Understand',
      'AI connects preferences, products, and patterns.',
    ],
    [
      '04',
      'Act',
      'Simple recommendations for your next move.',
    ],
  ]

  return (
    <section
      id="how-it-works"
      className="section-shell how-section"
    >
      <div className="section-heading">
        <Pill>02 / The flywheel</Pill>

        <h2>
          From noise to <em>know-how.</em>
        </h2>

        <p>
          Vyapaar learns the shape of your business over time — so every new
          conversation makes the next insight sharper.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map(([num, title, text], i) => (
          <motion.div
            key={num}
            className="step-card"
            whileHover={{ y: -5 }}
          >
            <span className="step-num">{num}</span>

            <div className="step-icon">
              {i === 0 ? (
                <MessageCircle />
              ) : i === 1 ? (
                <Database />
              ) : i === 2 ? (
                <BrainCircuit />
              ) : (
                <Zap />
              )}
            </div>

            <h3>{title}</h3>
            <p>{text}</p>

            {i < 3 && (
              <ArrowRight
                className="step-arrow"
                size={18}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// --------------------------------------------------
// MEMORY SECTION
// --------------------------------------------------

function MemorySection() {
  return (
    <section
      id="memory"
      className="memory-section"
    >
      <div className="section-shell">
        <div className="section-heading narrow">
          <Pill>03 / The unfair advantage</Pill>

          <h2>
            Every interaction becomes
            <br />
            <em>business memory.</em>
          </h2>

          <p>
            Not a dashboard that resets every morning. A living layer of
            context that grows with your business.
          </p>
        </div>

        <div className="memory-network">
          <div className="network-lines" />

          <MemoryCard
            type="customer"
            title="Customer Memory"
            icon={<UserRound />}
            items={[
              'Prefers ethnic wear',
              'Interested in blue colours',
              'Previous product inquiries',
            ]}
          />

          <MemoryCard
            type="product"
            title="Product Memory"
            icon={<Package />}
            items={[
              'Blue Cotton Kurti',
              'High inquiry volume',
              'M + L frequently requested',
            ]}
          />

          <MemoryCard
            type="business"
            title="Business Memory"
            icon={<Store />}
            items={[
              'Cotton clothing demand rising',
              'Seasonal interest increasing',
              'Delivery complaints detected',
            ]}
          />

          <div className="network-center">
            <BrainCircuit size={26} />

            <small>
              VYAPAAR
              <br />
              MEMORY
            </small>
          </div>
        </div>
      </div>
    </section>
  )
}

// --------------------------------------------------
// MEMORY CARD
// --------------------------------------------------

function MemoryCard({
  type,
  title,
  icon,
  items,
}: {
  type: string
  title: string
  icon: React.ReactNode
  items: string[]
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      className={`memory-card memory-${type}`}
    >
      <div className="flex items-center gap-2 text-sm font-semibold">
        {icon}
        <span>{title}</span>
      </div>

      <div className="memory-items">
        {items.map((item) => (
          <div key={item}>
            <span className="tiny-dot" />
            {item}
          </div>
        ))}
      </div>

      <span className="card-status">● synced</span>
    </motion.div>
  )
}

// --------------------------------------------------
// FEATURES
// --------------------------------------------------

function Features() {
  const features = [
    [
      'Long-Term Business Memory',
      'Remember important patterns over time.',
      BrainCircuit,
    ],
    [
      'Smart Business Insights',
      'Identify demand and recurring issues.',
      BarChart3,
    ],
    [
      'Ask Vyapaar',
      'Ask questions in Hindi, Hinglish, or English.',
      WandSparkles,
    ],
    [
      'Stock Intelligence',
      'Spot products receiving repeated interest.',
      Package,
    ],
    [
      'Content Insights',
      'Understand what customers engage with.',
      Camera,
    ],
    [
      'Multilingual Intelligence',
      'Meet customers in their own language.',
      MessageCircle,
    ],
  ]

  return (
    <section
      id="features"
      className="section-shell features-section"
    >
      <div className="section-heading">
        <Pill>04 / What it unlocks</Pill>

        <h2>
          Small business.
          <br />
          <em>Big context.</em>
        </h2>
      </div>

      <div className="features-grid">
        {features.map(([title, text, Icon], i) => (
          <motion.div
            key={title as string}
            className="feature-card"
            whileHover={{ y: -5 }}
          >
            <div className="feature-icon">
              <Icon size={19} />
            </div>

            <span className="feature-index">
              0{i + 1}
            </span>

            <h3>{title as string}</h3>

            <p>{text as string}</p>

            <ArrowRight
              size={16}
              className="feature-arrow"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// --------------------------------------------------
// DASHBOARD DATA
// --------------------------------------------------

type DashboardData = {
  product_demand: Record<string, number>
  interaction_types: Record<string, number>
  platform_activity: Record<string, number>
  purchase_interest: {
    customer_name: string
    product: string
    message: string
  }[]
  complaints: {
    customer_name: string
    product: string
    message: string
  }[]
  business_memories: {
    content: string
  }[]
  memory_count: number
  demand_trends: Record<string, number>
  recent_interactions: {
    platform: string
    customer_name: string
    message: string
    product: string
    interaction_type: string
  }[]
}

// --------------------------------------------------
// DASHBOARD
// --------------------------------------------------

function Dashboard({
  onBack,
}: {
  onBack: () => void
}) {
  const [active, setActive] = useState('Overview')
  const [modal, setModal] = useState(false)
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [dashboardLoading, setDashboardLoading] = useState(true)

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/dashboard')

        if (!response.ok) {
          throw new Error('Dashboard API failed')
        }

        const data = await response.json()
        setDashboardData(data)
      } catch (error) {
        console.error('Dashboard data error:', error)
      } finally {
        setDashboardLoading(false)
      }
    }

    loadDashboard()
  }, [])

  const nav = [
    ['Overview', LayoutDashboard],
    ['Customer Insights', Users],
    ['Product Intelligence', Package],
    ['Business Memory', Database],
    ['Ask Vyapaar', WandSparkles],
  ] as const

  return (
    <div className="dashboard-shell">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <button
          onClick={onBack}
          className="mb-10"
        >
          <Logo small />
        </button>

        <div className="sidebar-label">
          WORKSPACE
        </div>

        <nav>
          {nav.map(([label, Icon]) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={active === label ? 'active' : ''}
            >
              <Icon size={17} />

              {label}

              {label === 'Ask Vyapaar' && (
                <span className="new-dot" />
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="memory-meter">
            <div className="flex items-center justify-between">
              <span>Business memory</span>
              <span>{dashboardData?.memory_count ?? 0}</span>
            </div>

            <small>{dashboardData?.memory_count ?? 0} signals remembered</small>
          </div>

          <div className="profile">
            <div className="profile-avatar">SK</div>

            <div>
              <b>Sharma Fashion</b>
              <span>New Delhi, India</span>
            </div>

            <ChevronRight size={15} />
          </div>
        </div>
      </aside>

      {/* Main Dashboard */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <div className="breadcrumb">
              WORKSPACE / {active.toUpperCase()}
            </div>

            <h1>
              Good evening, Sharma Fashion.
            </h1>

            <p>
              Here is what your customers are telling you.
            </p>
          </div>

          <div className="dashboard-actions">
            <button className="date-button">
              May 01 – Jun 09, 2026
              <ChevronRight size={14} />
            </button>

            <button className="icon-button">
              <Bell size={17} />
              <span />
            </button>
          </div>
        </header>

        {dashboardLoading ? (
          <div className="dashboard-content">
            <div className="chart-card">
              <p>Loading your business data...</p>
            </div>
          </div>
        ) : !dashboardData ? (
          <div className="dashboard-content">
            <div className="chart-card">
              <p>Could not load dashboard data. Please make sure the backend is running.</p>
            </div>
          </div>
        ) : (
          <>
            {active === 'Overview' && (
              <Overview
                data={dashboardData}
                onEvidence={() => setModal(true)}
              />
            )}

            {active === 'Customer Insights' && (
              <CustomerInsights data={dashboardData} />
            )}

            {active === 'Product Intelligence' && (
              <ProductIntelligence data={dashboardData} />
            )}

            {active === 'Business Memory' && (
              <BusinessMemory data={dashboardData} />
            )}

            {active === 'Ask Vyapaar' && <AskVyapaar data={dashboardData}/>}
          </>
        )}
      </main>

      {modal && (
        <EvidenceModal
          onClose={() => setModal(false)}
        />
      )}
    </div>
  )
}

// --------------------------------------------------
// OVERVIEW
// --------------------------------------------------

function Overview({
  data,
  onEvidence,
}: {
  data: DashboardData
  onEvidence: () => void
}) {
  const totalInteractions = Object.values(data.interaction_types).reduce(
    (sum, count) => sum + count,
    0,
  )

  const productInquiries = data.interaction_types.product_inquiry ?? 0
  const complaints = data.complaints.length
  const topProduct = Object.entries(data.product_demand).sort(
    (a, b) => b[1] - a[1],
  )[0]?.[0] ?? 'No product data'

  const metrics = [
    ['Customer Interactions', totalInteractions.toString(), 'From current interaction data', Users],
    ['Product Inquiries', productInquiries.toString(), `Top product: ${topProduct}`, Search],
    ['Purchase Interest', (data.purchase_interest.length).toString(), 'Customers showing buying intent', UserRound],
    ['Issues Detected', complaints.toString(), 'Requires attention', AlertTriangle],
  ]

  const demandTrendData = Object.entries(data.demand_trends).map(
    ([date, count]) => ({
      week: date,
      blue: count,
    }),
  )

  const recentSignals = data.recent_interactions.map((item) => ({
    platform: item.platform,
    text: item.message,
    icon: MessageCircle,
    color: '#8fa8c7',
  }))

  return (
    <div className="dashboard-content">
      {/* Metrics */}
      <div className="metric-grid">
        {metrics.map(
          ([label, value, detail, Icon], i) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.08,
              }}
              key={label as string}
              className="metric-card"
            >
              <div className="metric-top">
                <span>{label as string}</span>
                <Icon size={16} />
              </div>

              <strong>{value as string}</strong>

              <small
                className={
                  i === 3 ? 'warning-text' : ''
                }
              >
                {i === 0 && (
                  <span className="trend-up">
                    ↗
                  </span>
                )}{' '}
                {detail as string}
              </small>
            </motion.div>
          ),
        )}
      </div>

      {/* AI Insight */}
      <div className="insight-card">
        <div className="insight-eyebrow">
          <Sparkles size={14} />
          VYAPAAR AI INSIGHT
          <span>● updated 4m ago</span>
        </div>

        <div className="insight-content">
          <div>
            <h2>
              Customer interest in{' '}
              <em>{topProduct}</em> is showing the strongest signal in the current data.
            </h2>

            <p>
              Purchase interest and product inquiries are the strongest signals in your current customer data. Review inventory for the most requested product before the next demand period.
            </p>

            <button
              onClick={onEvidence}
              className="text-button"
            >
              View supporting evidence
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="insight-spark">
            <div className="spark-bar b1" />
            <div className="spark-bar b2" />
            <div className="spark-bar b3" />
            <div className="spark-bar b4" />
            <div className="spark-bar b5" />
            <div className="spark-bar b6" />
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Chart */}
        <div className="chart-card">
          <div className="card-header">
            <div>
              <span className="card-kicker">
                DEMAND TRENDS
              </span>

              <h3>Product inquiry volume</h3>
            </div>

            <button className="chart-filter">
              Last 6 weeks
              <ChevronRight size={13} />
            </button>
          </div>

          <div className="legend">
            <span>
              <i className="legend-dot blue" />
              Customer Interactions
            </span>
          </div>

          <div className="chart-wrap">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <AreaChart data={demandTrendData}>
                <defs>
                  <linearGradient
                    id="blueFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor={accent}
                      stopOpacity={0.3}
                    />

                    <stop
                      offset="100%"
                      stopColor={accent}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  stroke="#ffffff0c"
                  vertical={false}
                />

                <XAxis
                  dataKey="week"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#7f8a9b',
                    fontSize: 10,
                  }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: '#7f8a9b',
                    fontSize: 10,
                  }}
                  width={28}
                />

                <Tooltip
                  contentStyle={{
                    background: '#192332',
                    border: '1px solid #ffffff18',
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="blue"
                  stroke={accent}
                  strokeWidth={2}
                  fill="url(#blueFill)"
                />

              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Signals */}
        <div className="signals-card">
          <div className="card-header">
            <div>
              <span className="card-kicker">
                RECENT SIGNALS
              </span>

              <h3>What customers said</h3>
            </div>

            <button className="more-button">
              View all
              <ArrowRight size={14} />
            </button>
          </div>

          {recentSignals.map((signal, index) => (
            <div
              className="dashboard-signal"
              key={index}
            >
              <div
                className="signal-icon"
                style={{ color: signal.color }}
              >
                <signal.icon size={16} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <b>{signal.platform}</b>
                  <span>2m ago</span>
                </div>

                <p>{signal.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Issue Card */}
      <div className="issue-card">
        <div className="issue-icon">
          <AlertTriangle size={19} />
        </div>

        <div>
          <span className="card-kicker">
            CUSTOMER CONCERN
          </span>

          <h3>
            {complaints === 0
              ? 'No customer complaints detected in the current data.'
              : `${complaints} customer complaint${complaints > 1 ? 's' : ''} detected in the current data.`}
          </h3>
        </div>

        <button className="button button-small button-dark">
          View details
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}

// --------------------------------------------------
// CUSTOMER INSIGHTS
// --------------------------------------------------

function CustomerInsights({ data }: { data: DashboardData }) {
  const purchaseCount = data.interaction_types.purchase_interest ?? 0
  const inquiryCount = data.interaction_types.product_inquiry ?? 0
  const feedbackCount = data.interaction_types.feedback ?? 0
  const complaintCount = data.complaints.length
  const topProduct = Object.entries(data.product_demand).sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'No product data'
  const sizeRequests = data.purchase_interest
    .filter((item) =>
      /(\bM\b|\bL\b|medium|large)/i.test(item.message)
    )
    .map((item) => item.message)

  const insights = [
    {
      title: `Strongest product signal: ${topProduct}`,
      text: 'This product has the highest number of interactions in the current business data.',
      icon: Users,
    },
    {
      title: 'Purchase intent detected',
      text: `${purchaseCount} customer interactions show purchase interest.`,
      icon: Search,
    },
    {
      title: 'Customer feedback captured',
      text: `${feedbackCount} feedback interaction${feedbackCount === 1 ? '' : 's'} are available for analysis.`,
      icon: MessageCircle,
    },
    {
      title: 'Customer complaints detected',
      text: `${complaintCount} complaint${complaintCount === 1 ? '' : 's'} require attention.`,
      icon: AlertTriangle,
    },
  ]

  return (
    <div className="dashboard-content">
      <div className="section-heading">
        <Pill>
          <Users size={12} />
          CUSTOMER INSIGHTS
        </Pill>

        <h2>
          Understand what your <em>customers want.</em>
        </h2>

        <p>
          Customer conversations reveal preferences, purchase interest, and
          recurring concerns.
        </p>
      </div>

      <div className="metric-grid">
        <div className="metric-card">
          <div className="metric-top">
            <span>Purchase Interest</span>
            <Users size={16} />
          </div>
          <strong>{purchaseCount}</strong>
          <small>Customers showing buying intent</small>
        </div>

        <div className="metric-card">
          <div className="metric-top">
            <span>Product Inquiries</span>
            <Search size={16} />
          </div>
          <strong>{inquiryCount}</strong>
          <small>Customer product questions</small>
        </div>

        <div className="metric-card">
          <div className="metric-top">
            <span>Feedback</span>
            <MessageCircle size={16} />
          </div>
          <strong>{feedbackCount}</strong>
          <small>Preference or product feedback</small>
        </div>

        <div className="metric-card">
          <div className="metric-top">
            <span>Complaint</span>
            <AlertTriangle size={16} />
          </div>
          <strong>{complaintCount}</strong>
          <small className="warning-text">Needs attention</small>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="chart-card">
          <div className="card-header">
            <div>
              <span className="card-kicker">CUSTOMER PATTERNS</span>
              <h3>What customers are telling you</h3>
            </div>
          </div>

          <div className="memory-items">
            {insights.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="dashboard-signal"
                >
                  <div className="signal-icon">
                    <Icon size={16} />
                  </div>

                  <div>
                    <b>{item.title}</b>
                    <p>{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="signals-card">
          <div className="card-header">
            <div>
              <span className="card-kicker">TOP SIGNAL</span>
              <h3>{topProduct}</h3>
            </div>
          </div>

          <p>
            This product has the strongest interaction volume in the current data. Purchase interest and inquiries help indicate demand.
          </p>

          <div className="evidence-row">
            <span>
              <Check size={12} />
              Purchase interest
            </span>
            {sizeRequests.length > 0 && (
              <span>
                <Check size={12} />
                Size requests detected
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


// --------------------------------------------------
// PRODUCT INTELLIGENCE
// --------------------------------------------------

function ProductIntelligence({ data }: { data: DashboardData }) {
  const products = Object.entries(data.product_demand)
    .sort((a, b) => b[1] - a[1])
    .map(([product, count], index) => [
      product,
      count.toString(),
      index === 0 ? 'Highest demand' : 'Customer interest',
      `${count} interaction${count === 1 ? '' : 's'}`,
    ])

  const topProduct = products[0]?.[0] ?? 'No product data'
  const purchaseCount = data.purchase_interest.length
  const productRequestCount = data.interaction_types.product_request ?? 0
  const topProductPurchaseInterest = data.purchase_interest.filter(
    (item) => item.product === topProduct
  )

  const sizeRequests = topProductPurchaseInterest
    .filter((item) =>
      /(\bM\b|\bL\b|medium|large)/i.test(item.message)
    )
    .map((item) => item.message)

  return (
    <div className="dashboard-content">
      <div className="section-heading">
        <Pill>
          <Package size={12} />
          PRODUCT INTELLIGENCE
        </Pill>

        <h2>
          Know what to <em>stock next.</em>
        </h2>

        <p>
          Product conversations are turned into demand signals and practical
          stock decisions.
        </p>
      </div>

      <div className="metric-grid">
        <div className="metric-card">
          <div className="metric-top">
            <span>Top Product</span>
            <Package size={16} />
          </div>
          <strong>{topProduct}</strong>
          <small>{data.product_demand[topProduct] ?? 0} interactions</small>
        </div>

        <div className="metric-card">
          <div className="metric-top">
            <span>Purchase Interest</span>
            <Users size={16} />
          </div>
          <strong>{purchaseCount}</strong>
          <small>Buying-intent signals</small>
        </div>

        <div className="metric-card">
          <div className="metric-top">
            <span>Product Requests</span>
            <Lightbulb size={16} />
          </div>
          <strong>{productRequestCount}</strong>
          <small>New product requests</small>
        </div>

        <div className="metric-card">
          <div className="metric-top">
            <span>Products Tracked</span>
            <BarChart3 size={16} />
          </div>
          <strong>{Object.keys(data.product_demand).length}</strong>
          <small>Across current interactions</small>
        </div>
      </div>

      <div className="chart-card">
        <div className="card-header">
          <div>
            <span className="card-kicker">PRODUCT DEMAND</span>
            <h3>Current product signals</h3>
          </div>
        </div>

        <div className="memory-items">
          {products.map(([product, count, status, detail]) => (
            <div
              key={product}
              className="dashboard-signal"
            >
              <div className="signal-icon">
                <Package size={16} />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-4">
                  <b>{product}</b>
                  <span className="text-amber font-semibold">{count}</span>
                </div>

                <p>
                  {status} · {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="issue-card">
        <div className="issue-icon">
          <Lightbulb size={19} />
        </div>

        <div>
          <span className="card-kicker">AI STOCK SIGNAL</span>
          <h3>
            Prioritize {topProduct} {sizeRequests.length > 0 ? ' in M and L sizes' : ''}
            based on the strongest current demand signal.
          </h3>
        </div>
      </div>
    </div>
  )
}


// --------------------------------------------------
// BUSINESS MEMORY
// --------------------------------------------------

function BusinessMemory({ data }: { data: DashboardData }) {
  const memories = data.business_memories.map((memory) => memory.content)

  return (
    <div className="dashboard-content">
      <div className="section-heading">
        <Pill>
          <Database size={12} />
          LONG-TERM BUSINESS MEMORY
        </Pill>

        <h2>
          Your business <em>remembers.</em>
        </h2>

        <p>
          Important patterns extracted from customer conversations become
          reusable business context for future questions.
        </p>
      </div>

      <div className="insight-card">
        <div className="insight-eyebrow">
          <BrainCircuit size={14} />
          MEMORY LAYER
          <span>● active</span>
        </div>

        <div className="insight-content">
          <div>
            <h2>
              Conversations become <em>business knowledge.</em>
            </h2>

            <p>
              Vyapaar combines customer interactions with generated business
              patterns so future answers can use historical context.
            </p>
          </div>

          <div className="insight-spark">
            <div className="spark-bar b1" />
            <div className="spark-bar b2" />
            <div className="spark-bar b3" />
            <div className="spark-bar b4" />
            <div className="spark-bar b5" />
            <div className="spark-bar b6" />
          </div>
        </div>
      </div>

      <div className="chart-card">
        <div className="card-header">
          <div>
            <span className="card-kicker">REMEMBERED PATTERNS</span>
            <h3>What Vyapaar has learned</h3>
          </div>

          <span className="context-tag">
            <Database size={13} />
            {memories.length} business memories
          </span>
        </div>

        <div className="memory-items">
          {memories.map((memory, index) => (
            <div
              key={memory}
              className="dashboard-signal"
            >
              <div className="signal-icon">
                <span className="text-amber font-semibold">
                  0{index + 1}
                </span>
              </div>

              <div>
                <b>Business pattern</b>
                <p>{memory}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


// --------------------------------------------------
// ASK VYAPAAR
// --------------------------------------------------

function AskVyapaar({ data }: { data: DashboardData }) {
  const [messages, setMessages] = useState<
    { role: string; text: string }[]
  >([])

  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const suggestions = [
    "Agle mahine kya stock karna chahiye?",
    "Kaunsa product sabse zyada demand mein hai?",
    "Customers ko kya pasand aa raha hai?",
    "Kya koi customer complaint hai?"
  ];

  const ask = async (question: string) => {
    if (!question.trim()) return;

    setMessages((m) => [
      ...m,
      { role: "user", text: question }
    ]);

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
        }),
      });

      const data = await response.json();

      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: data.answer,
        },
      ]);
    } catch (error) {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: "Sorry, backend se response nahi aa raha.",
        },
      ]);
    }

    setLoading(false);
  };

  const submit = () => {
    if (!input.trim()) return;

    ask(input);
    setInput("");
  };

  return (
    <div className="ask-page">
      {/* Intro */}
      <div className="ask-intro">
        <Pill>
          <WandSparkles size={12} />
          Business context, not just answers
        </Pill>

        <h2>
          Ask your business
          <br />
          <em>anything.</em>
        </h2>

        <p>
          Vyapaar understands what has happened before —
          so your next question gets a more useful answer.
        </p>
      </div>

      {/* Ask Panel */}
      <div className="ask-panel">
        {/* Panel Header */}
        <div className="ask-panel-head">
          <div className="flex items-center gap-3">
            <div className="ask-avatar">
              <BrainCircuit size={18} />
            </div>

            <div>
              <b>Vyapaar AI</b>

              <span>
                <i />
                Memory is active
              </span>
            </div>
          </div>

          <span className="context-tag">
            <Database size={13} />
            {data.memory_count} memories
          </span>
        </div>

        {/* Conversation */}
        <div className="ask-conversation">
          {messages.length === 0 && (
            <div className="empty-ask">
              <div className="empty-icon">
                <Sparkles size={25} />
              </div>

              <h3>
                What would you like to know?
              </h3>

              <p>
                Try one of these questions to see Vyapaar
                connect the dots.
              </p>
            </div>
          )}

          {messages.map((message, i) => (
            <div
              key={i}
              className={`chat-message ${message.role}`}
            >
              <div className="message-bubble">
                {message.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        {/* Suggestions */}
        <div className="suggestions">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => ask(suggestion)}
            >
              {suggestion}
              <ArrowRight size={13} />
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="ask-input">
          <input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (
                e.key === 'Enter' &&
                !e.nativeEvent.isComposing &&
                e.keyCode !== 229
              ) {
                submit()
              }
            }}
            placeholder="Ask in Hindi, Hinglish, or English..."
          />

          <button onClick={submit}>
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

// --------------------------------------------------
// EVIDENCE MODAL
// --------------------------------------------------

function EvidenceModal({
  onClose,
}: {
  onClose: () => void
}) {
  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="evidence-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <div className="flex items-start justify-between">
          <div>
            <span className="card-kicker">
              SUPPORTING EVIDENCE
            </span>

            <h2>Why Blue Cotton Kurtis?</h2>

            <p>
              Vyapaar found this pattern across 42
              remembered interactions.
            </p>
          </div>

          <button
            onClick={onClose}
            className="close-button"
          >
            ×
          </button>
        </div>

        <div className="evidence-list">
          {signals.map((s, i) => (
            <div
              key={s.platform}
              className="evidence-item"
            >
              <div
                className="signal-icon"
                style={{ color: s.color }}
              >
                <s.icon size={17} />
              </div>

              <div>
                <b>{s.platform}</b>

                <p>
                  {i === 0
                    ? '“Blue kurti M size mein available hai?”'
                    : i === 1
                      ? '“Please restock this design!”'
                      : '“Large size kab available hoga?”'}
                </p>

                <small>
                  Remembered {i + 2} days ago · Product
                  inquiry
                </small>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="button w-full justify-center"
        >
          Got it
        </button>
      </motion.div>
    </div>
  )
}

// --------------------------------------------------
// MAIN PAGE
// --------------------------------------------------

export default function Page() {
  const [dashboard, setDashboard] = useState(false)

  return (
    <AnimatePresence mode="wait">
      {dashboard ? (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Dashboard
            onBack={() => setDashboard(false)}
          />
        </motion.div>
      ) : (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Landing
            onDashboard={() => setDashboard(true)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}