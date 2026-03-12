'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { Linkedin } from 'lucide-react'

const teamMembers = [
  {
    name: 'Ignacio Castillo',
    role: 'Jefe de Proyecto',
    bio: 'Encargado de planificar, organizar y supervisar el proyecto. Gestiona tiempos, recursos, presupuesto y riesgos.',
    image: '/images/fotonacho.jpeg',
    linkedin: 'https://www.linkedin.com/in/ignacio-castillo-jaramillo-831811295/',
  },
  {
    name: 'Ignacio Cabrera',
    role: 'Arquitecto de Software',
    bio: 'Define la arquitectura general, selecciona tecnologías, establece patrones de diseño y asegura escalabilidad y seguridad.',
    image: '/images/fotopelao.jpeg',
    linkedin: 'https://www.linkedin.com/in/icabrerabalmaceda/',
  },
  {
    name: 'Nicolas Jeldres',
    role: 'Desarrollador Frontend',
    bio: 'Implementa la interfaz visual del sistema, asegurando compatibilidad entre navegadores y una experiencia de usuario fluida.',
    image: '/images/fotoNico.jpeg',
    linkedin: '#',
  },
  {
    name: 'Sebastián Molina',
    role: 'Desarrollador Backend',
    bio: 'Responsable de la lógica del servidor, gestión de bases de datos y creación de APIs. Enfocado en seguridad y estabilidad.',
    image: '/images/fotoseba.jpeg',
    linkedin: '#',
  },
  {
    name: 'Maximiliano Cuevas',
    role: 'DevOps & QA',
    bio: 'Responsable de desplegar el sistema en producción, gestionar infraestructura y realizar pruebas de calidad.',
    image: '/images/fotomaxi.jpeg',
    linkedin: '#',
  },
]


export function Team() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.team-card')
            cards.forEach((card, i) => {
              setTimeout(() => {
                ; (card as HTMLElement).style.opacity = '1'
                  ; (card as HTMLElement).style.transform = 'translateY(0)'
              }, i * 120)
            })
          }
        })
      },
      { threshold: 0.15 }
    )

    const section = document.getElementById('team')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="team"
      className="py-28 md:py-36 bg-background"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
            Nuestro Equipo
          </span>
          <h2
            id="team-heading"
            className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 text-balance"
          >
            Nuestro Equipo{' '}
            <span className="text-gradient">del Proyecto.</span>
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            Profesionales trabajando juntos para construir la herramienta que
            los kinesiólogos necesitan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="team-card group relative overflow-hidden rounded-2xl border border-border/60 bg-card hover:border-teal-200 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/8"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              }}
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={member.image}
                  alt={`Fotografía de ${member.name}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{member.name}</h3>
                    <p className="text-xs text-brand font-medium mt-0.5">{member.role}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    aria-label={`LinkedIn de ${member.name}`}
                    className="text-foreground-subtle hover:text-brand transition-colors mt-0.5"
                  >
                    <Linkedin size={15} />
                  </a>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
