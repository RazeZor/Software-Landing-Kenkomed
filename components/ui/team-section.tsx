import * as React from "react";
import { cn } from "@/lib/utils";

// Define interfaces for props
export interface SocialLink {
  icon: React.ElementType; // For Shadcn icons or any SVG component
  href: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  socialLinks?: SocialLink[];
}

export interface TeamSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  description: React.ReactNode;
  members: TeamMember[];
  registerLink?: string;
  logo?: React.ReactNode; // For a custom logo, or you can use a string src
  socialLinksMain?: SocialLink[]; // Main social links for the company/section
}

// TeamSection Component
export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  (
    {
      title,
      description,
      members,
      registerLink,
      logo,
      socialLinksMain,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-background py-12 md:py-24 lg:py-32",
          className
        )}
        {...props}
      >
        <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
          {/* Background Grid - for visual appeal */}
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" aria-hidden="true">
            <svg className="h-full w-full" fill="none">
              <defs>
                <pattern
                  id="grid"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20 0L0 0 0 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-muted-foreground"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Header Section */}
          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-start md:text-left lg:gap-8">
            <div className="grid gap-2 text-center md:text-left">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-muted-foreground text-balance">
                <span className="text-primary block text-xl sm:text-2xl md:text-3xl font-medium tracking-widest uppercase">
                  N U E S T R O
                </span>
                {title}
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
                {description}
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 md:items-end">
              {logo && <div className="text-2xl font-bold">{logo}</div>}
              {registerLink && (
                <a
                  href={registerLink}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  CONTACTAR
                </a>
              )}
            </div>
          </div>

          {/* Main Social Links */}
          {socialLinksMain && socialLinksMain.length > 0 && (
            <div className="relative z-10 flex w-full items-center justify-center gap-4 py-4 md:justify-center">
              {socialLinksMain.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          )}

          {/* Team Members Grid */}
          <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-6 mt-12">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-end overflow-hidden rounded-xl bg-card p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl border border-border/60 hover:border-primary/50"
                style={{
                  backgroundColor: "hsl(var(--card))",
                  color: "hsl(var(--foreground))",
                }}
              >
                {/* Background wave animation */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom scale-y-0 transform rounded-t-full bg-gradient-to-t from-primary/10 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100 pointer-events-none"
                  style={{ transitionDelay: `${index * 50}ms` }}
                />

                {/* Member Image with mask and border animation */}
                <div
                  className="relative z-10 h-28 w-28 md:h-32 md:w-32 overflow-hidden rounded-full border-4 border-transparent bg-background/20 transition-all duration-500 ease-out group-hover:border-primary/30 group-hover:scale-105 mb-4"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>

                <h3 className="relative z-10 text-lg md:text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="relative z-10 text-xs md:text-sm text-primary font-medium mt-1 mb-2">
                  {member.designation}
                </p>

                {/* Social Links for individual members */}
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="relative z-10 mt-3 flex gap-3 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    {member.socialLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors bg-background p-2 rounded-full border border-border"
                      >
                        <link.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";
