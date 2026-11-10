'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { BLOG_POSTS, type BlogPost } from '@/lib/blog-data'
import {
  RiBookOpenLine as BookOpen,
  RiArrowRightLine as ArrowRight,
  RiArrowRightUpLine as ArrowUpRight,
  RiTimeLine as Clock,
  RiSearchLine as Search,
  RiShieldCheckLine as ShieldCheck,
  RiFileTextLine as FileText,
  RiGovernmentLine as Government,
  RiMicroscopeLine as Microscope,
  RiBuilding2Line as Building2,
  RiCalendarLine as Calendar,
  RiCloseLine as CloseIcon,
} from 'react-icons/ri'

const CATEGORIES = [
  'Todos',
  'Normativa & Legal',
  'Escalas & Evidencia',
  'Práctica Clínica',
  'Gestión & Finanzas',
  'Comparativas',
] as const

type CategoryFilter = (typeof CATEGORIES)[number]

const OFFICIAL_REPOSITORIES = [
  {
    name: 'Biblioteca del Congreso Nacional (BCN)',
    badge: 'Legislación Chilena',
    description:
      'Textos oficiales vigentes de la Ley N° 20.584 (Derechos del Paciente), Ley N° 19.628, Ley N° 21.719 (Datos Personales), Ley N° 21.541 (Telemedicina) y Ley N° 21.133.',
    url: 'https://www.bcn.cl/leychile',
    icon: Government,
  },
  {
    name: 'Ministerio de Salud de Chile (MINSAL)',
    badge: 'Reglamentos Sanitarios',
    description:
      'Decreto Supremo N° 41 (Reglamento sobre Fichas Clínicas y conservación por 15 años) y orientaciones técnicas para rehabilitación y telemedicina.',
    url: 'https://www.minsal.cl/',
    icon: ShieldCheck,
  },
  {
    name: 'Superintendencia de Salud (SIS)',
    badge: 'Fiscalización & RNPI',
    description:
      'Registro Nacional de Prestadores Individuales de Salud (RNPI) y normativa de bonificaciones y reembolsos ante Isapres.',
    url: 'https://www.supersalud.gob.cl/',
    icon: Building2,
  },
  {
    name: 'Fondo Nacional de Salud (FONASA)',
    badge: 'Aranceles Grupo 06',
    description:
      'Arancel oficial Modalidad Libre Elección (MLE) — Grupo 06 Kinesiología y Fisioterapia para codificación de prestaciones e informes.',
    url: 'https://www.fonasa.cl/sites/fonasa/prestadores/modalidad-libre-eleccion',
    icon: FileText,
  },
  {
    name: 'Servicio de Impuestos Internos (SII)',
    badge: 'Tributación 2ª Categoría',
    description:
      'Normativa de emisión de Boletas de Honorarios Electrónicas, tabla progresiva de retención anual y cotizaciones previsionales.',
    url: 'https://www.sii.cl/destacados/boleta_honorarios/',
    icon: FileText,
  },
  {
    name: 'PubMed / National Library of Medicine',
    badge: 'Evidencia Científica',
    description:
      'Estudios originales de validación psicométrica (ICC, MCID, α de Cronbach) para las escalas EVA/NRS, PSFS, Oswestry, DASH, LEFS, WOMAC, Barthel, Berg y TUG.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/',
    icon: Microscope,
  },
]

export function BlogPortal() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Todos')
  const [searchQuery, setSearchQuery] = useState('')

  const leadPost = useMemo(
    () => BLOG_POSTS.find((p) => p.leadStory) || BLOG_POSTS[0],
    []
  )

  const secondaryFeaturedPosts = useMemo(
    () =>
      BLOG_POSTS.filter((p) => p.slug !== leadPost.slug && p.featured).slice(0, 2),
    [leadPost]
  )

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'Todos' || post.category === selectedCategory
      const q = searchQuery.trim().toLowerCase()
      if (!q) return matchesCategory
      return (
        matchesCategory &&
        (post.title.toLowerCase().includes(q) ||
          post.subtitle.toLowerCase().includes(q) ||
          post.description.toLowerCase().includes(q) ||
          post.tags.some((t) => t.toLowerCase().includes(q)) ||
          post.sources.some(
            (s) =>
              s.title.toLowerCase().includes(q) ||
              s.institution.toLowerCase().includes(q)
          ))
      )
    })
  }, [selectedCategory, searchQuery])

  const showEditorialFrontPage =
    selectedCategory === 'Todos' && searchQuery.trim() === ''

  const gridPosts = useMemo(() => {
    if (!showEditorialFrontPage) return filteredPosts
    return filteredPosts.filter((p) => p.slug !== leadPost.slug)
  }, [filteredPosts, showEditorialFrontPage, leadPost])

  const getCategoryCount = (cat: CategoryFilter) => {
    if (cat === 'Todos') return BLOG_POSTS.length
    return BLOG_POSTS.filter((p) => p.category === cat).length
  }

  return (
    <main className="flex-1 bg-background pb-24">
      {/* 1. Editorial Masthead / Light Clinical Hero */}
      <section className="relative overflow-hidden bg-background pt-28 pb-10 md:pt-36 md:pb-12 border-b border-border/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 50% at 80% 20%, rgba(16,85,198,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 35% at 10% 85%, rgba(0,180,138,0.04) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          {/* Top Editorial Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-border/60">
            <nav
              className="flex items-center gap-2 text-xs text-foreground-muted"
              aria-label="Miga de pan"
            >
              <Link href="/" className="hover:text-brand transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold">
                Publicaciones & Normativa Clínica
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 text-xs text-foreground-muted">
              <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald" />
                {BLOG_POSTS.length} artículos con fuentes oficiales verificadas
              </span>
              <span className="hidden sm:inline text-border">·</span>
              <a
                href="#fuentes-oficiales"
                className="hidden sm:inline-flex items-center gap-1 font-semibold text-brand hover:underline"
              >
                Ver directorio de fuentes (BCN, MINSAL, PubMed)
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/6 border border-brand/15 text-brand text-xs font-semibold tracking-wide mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                Publicación Clínica, Normativa & Evidencia · Edición Chile
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-[1.08] mb-4">
                Actualidad, Evidencia y Normativa para{' '}
                <span className="text-brand">Kinesiólogos.</span>
              </h1>

              <p className="text-foreground-muted text-base sm:text-lg leading-relaxed max-w-3xl">
                Reportajes técnicos, guías regulatorias y revisiones de psicometría clínica elaboradas con referencias directas a la{' '}
                <strong className="text-foreground font-semibold">
                  Biblioteca del Congreso Nacional (BCN)
                </strong>
                ,{' '}
                <strong className="text-foreground font-semibold">
                  MINSAL
                </strong>
                ,{' '}
                <strong className="text-foreground font-semibold">
                  FONASA
                </strong>
                ,{' '}
                <strong className="text-foreground font-semibold">SII</strong> y literatura indexada en{' '}
                <strong className="text-foreground font-semibold">
                  PubMed / NCBI
                </strong>
                .
              </p>
            </div>

            {/* Search Input Box */}
            <div className="lg:col-span-4">
              <label htmlFor="blog-search" className="sr-only">
                Buscar artículos por tema, ley o escala clínica
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-foreground-subtle absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="blog-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar Ley 20.584, Oswestry, EVA, FONASA..."
                  className="w-full rounded-xl border border-border bg-card pl-10 pr-10 py-3 text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Limpiar búsqueda"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-foreground-subtle hover:text-foreground"
                  >
                    <CloseIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Filter Strip */}
          <div
            className="mt-8 pt-5 border-t border-border/60 flex items-center gap-2 overflow-x-auto pb-1"
            role="group"
            aria-label="Filtrar publicaciones por sección editorial"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category
              const count = getCategoryCount(category)
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand text-white shadow-sm'
                      : 'bg-surface/80 hover:bg-surface border border-border text-foreground-muted hover:text-foreground'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-card text-foreground-subtle border border-border/60'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 space-y-16">
        {/* 2. Front-Page Editorial Lead Layout ("En Portada") */}
        {showEditorialFrontPage && leadPost && (
          <section aria-label="Reportajes en portada" className="space-y-6">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand" />
                <h2 className="font-display font-bold text-sm uppercase tracking-wider text-foreground">
                  En Portada · Reportaje Principal y Destacados
                </h2>
              </div>
              <span className="text-xs text-foreground-subtle hidden sm:inline">
                Edición revisada por pares clínicos y normativos
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Main Lead Story (7 columns) */}
              <article className="lg:col-span-7 group rounded-2xl border border-border bg-card overflow-hidden shadow-2xs hover:border-brand/40 transition-all flex flex-col justify-between">
                <div>
                  <Link
                    href={`/blog/${leadPost.slug}`}
                    className="block relative aspect-[16/9] w-full overflow-hidden bg-surface border-b border-border/60"
                  >
                    <img
                      src={leadPost.coverImage}
                      alt={leadPost.coverImageAlt}
                      fetchPriority="high"
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/15 to-transparent" />

                    <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                      <span className="bg-brand text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        Reportaje de Portada
                      </span>
                      <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/15">
                        {leadPost.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white/90 text-xs">
                      <span className="font-medium truncate">
                        {leadPost.editorialSection}
                      </span>
                      <span className="shrink-0 inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold border border-white/15">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald" />
                        {leadPost.sources.length} fuentes oficiales
                      </span>
                    </div>
                  </Link>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-foreground-subtle">
                      <span className="inline-flex items-center gap-1 font-medium text-foreground-muted">
                        <Calendar className="w-3.5 h-3.5 text-brand" />
                        {leadPost.displayDate}
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {leadPost.readTime}
                      </span>
                      <span>·</span>
                      <span className="text-emerald font-semibold">
                        {leadPost.updatedAt}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight leading-snug group-hover:text-brand transition-colors">
                      <Link href={`/blog/${leadPost.slug}`}>
                        {leadPost.title}
                      </Link>
                    </h3>

                    <p className="text-foreground-muted text-sm sm:text-base leading-relaxed">
                      {leadPost.subtitle}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-border/60 bg-surface/30 space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-bold text-foreground-subtle uppercase tracking-wider mr-1">
                      Fuentes citadas:
                    </span>
                    {leadPost.sources.slice(0, 3).map((src) => (
                      <a
                        key={src.id}
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-card border border-border text-foreground-muted hover:text-brand hover:border-brand/30 transition-colors"
                      >
                        <span className="truncate max-w-[190px]">
                          {src.institution}
                        </span>
                        <ArrowUpRight className="w-3 h-3 shrink-0 text-brand" />
                      </a>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <p className="text-xs font-bold text-foreground">
                        {leadPost.author.name}
                      </p>
                      <p className="text-[11px] text-foreground-subtle">
                        {leadPost.author.role}
                      </p>
                    </div>
                    <Link
                      href={`/blog/${leadPost.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand hover:bg-brand-dark text-white text-xs font-bold transition-colors shadow-2xs"
                    >
                      Leer reportaje
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Secondary Featured Column (5 columns) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                {secondaryFeaturedPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group flex-1 rounded-2xl border border-border bg-card overflow-hidden shadow-2xs hover:border-brand/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-0">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="sm:col-span-5 relative aspect-[16/10] sm:aspect-auto sm:h-full overflow-hidden bg-surface"
                        >
                          <img
                            src={post.coverImage}
                            alt={post.coverImageAlt}
                            loading="lazy"
                            width={500}
                            height={340}
                            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                          />
                          <span className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/15">
                            {post.category}
                          </span>
                        </Link>

                        <div className="sm:col-span-7 p-5 flex flex-col justify-between space-y-3">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-[11px] text-foreground-subtle">
                              <span className="font-semibold text-brand">
                                {post.editorialSection}
                              </span>
                              <span>{post.readTime}</span>
                            </div>

                            <h3 className="font-display font-bold text-base sm:text-lg text-foreground leading-snug group-hover:text-brand transition-colors">
                              <Link href={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h3>

                            <p className="text-xs text-foreground-muted line-clamp-2 leading-relaxed">
                              {post.description}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px]">
                            <span className="inline-flex items-center gap-1 font-semibold text-emerald">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              {post.sources.length} fuentes verificadas
                            </span>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="font-bold text-brand inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                            >
                              Leer guía <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mini Sources Bar */}
                    <div className="px-5 py-2.5 bg-surface/40 border-t border-border/60 flex items-center justify-between gap-2 text-[11px] text-foreground-subtle">
                      <span className="truncate">
                        Fuentes:{' '}
                        <strong className="text-foreground-muted font-medium">
                          {post.sources.map((s) => s.institution).join(' · ')}
                        </strong>
                      </span>
                      <span className="shrink-0">{post.displayDate}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 3. Main News & Guides Feed Grid */}
        <section aria-label="Archivo de artículos y guías clínicas" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
            <div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                {selectedCategory === 'Todos' && !searchQuery
                  ? 'Archivo de Reportajes, Guías Clínicas y Normativa'
                  : `Publicaciones en ${selectedCategory} (${gridPosts.length})`}
              </h2>
              <p className="text-xs text-foreground-muted mt-0.5">
                Cada publicación incluye resumen ejecutivo, capturas de aplicación clínica y bibliografía oficial verificable.
              </p>
            </div>

            {(selectedCategory !== 'Todos' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('Todos')
                  setSearchQuery('')
                }}
                className="self-start sm:self-auto text-xs font-bold text-brand hover:underline cursor-pointer"
              >
                Restablecer filtros ({BLOG_POSTS.length} artículos)
              </button>
            )}
          </div>

          {gridPosts.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-12 text-center space-y-3">
              <BookOpen className="w-8 h-8 text-brand mx-auto" />
              <h3 className="font-display font-bold text-lg text-foreground">
                No encontramos artículos para &ldquo;{searchQuery}&rdquo;
              </h3>
              <p className="text-sm text-foreground-muted max-w-md mx-auto">
                Intenta buscar por el nombre de una escala (EVA, PSFS, Oswestry, Barthel), una normativa (Ley 20.584, Ley 21.719) o entidad (FONASA, SII, Isapre).
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('Todos')
                  setSearchQuery('')
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand text-white text-xs font-bold"
              >
                Ver todas las publicaciones
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {gridPosts.map((post: BlogPost) => (
                <article
                  key={post.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card overflow-hidden shadow-2xs hover:shadow-md hover:border-brand/40 transition-all"
                >
                  <div>
                    {/* Top Cover Photo */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block relative aspect-[16/10] w-full overflow-hidden bg-surface border-b border-border/60"
                    >
                      <img
                        src={post.coverImage}
                        alt={post.coverImageAlt}
                        loading="lazy"
                        width={640}
                        height={400}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/15">
                          {post.category}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                        <span className="font-medium text-white/90 truncate pr-2">
                          {post.editorialSection}
                        </span>
                        <span className="shrink-0 inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded-md font-semibold border border-white/15">
                          <ShieldCheck className="w-3 h-3 text-emerald" />
                          {post.sources.length} fuentes
                        </span>
                      </div>
                    </Link>

                    {/* Card Content */}
                    <div className="p-6 space-y-3.5">
                      <div className="flex items-center justify-between text-xs text-foreground-subtle">
                        <span className="font-medium text-foreground-muted">
                          {post.displayDate}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-foreground leading-snug group-hover:text-brand transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-foreground-muted text-sm line-clamp-3 leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                  </div>

                  {/* Verified Sources Preview + Footer */}
                  <div className="px-6 pb-5 pt-3 border-t border-border/60 bg-surface/25 space-y-3">
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-foreground-subtle">
                        Fuentes primarias citadas:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {post.sources.slice(0, 2).map((src) => (
                          <a
                            key={src.id}
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-card border border-border text-foreground-muted hover:text-brand hover:border-brand/30 transition-colors"
                          >
                            <span className="truncate max-w-[165px]">
                              {src.institution}
                            </span>
                            <ArrowUpRight className="w-2.5 h-2.5 shrink-0 text-brand" />
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-border/50 flex items-center justify-between text-xs">
                      <span className="text-foreground-subtle font-medium truncate pr-2">
                        {post.author.name}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="shrink-0 font-bold text-brand group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1"
                      >
                        Leer artículo <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 4. Official Regulatory & Scientific Repositories Directory (#fuentes-oficiales) */}
        <section
          id="fuentes-oficiales"
          className="scroll-mt-28 rounded-3xl border border-border bg-surface/50 p-6 sm:p-10 space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/60 pb-6">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/8 border border-brand/15 text-brand text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald" />
                Estándar Editorial y Verificabilidad
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
                Organismos y Fuentes Primarias Consultadas
              </h2>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Todas nuestras guías legales, arancelarias y clínicas citan directamente la normativa vigente en Chile y la literatura biomédica revisada por pares.
              </p>
            </div>

            <Link
              href="/investigacion"
              className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card hover:bg-surface border border-border text-xs font-bold text-foreground transition-colors"
            >
              Ver Arquitectura Científica DSS
              <ArrowRight className="w-3.5 h-3.5 text-brand" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFICIAL_REPOSITORIES.map((repo) => {
              const Icon = repo.icon
              return (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-border bg-card p-5 shadow-2xs hover:border-brand/40 transition-all flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald">
                        {repo.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-foreground group-hover:text-brand transition-colors flex items-center justify-between gap-2">
                      <span>{repo.name}</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 text-foreground-subtle group-hover:text-brand" />
                    </h3>

                    <p className="text-xs text-foreground-muted leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-semibold text-brand">
                    <span>Consultar portal oficial</span>
                    <span className="text-foreground-subtle font-mono truncate max-w-[160px]">
                      {repo.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  )
}
