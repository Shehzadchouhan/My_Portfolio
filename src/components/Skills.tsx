import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { skillCategories, skillEvidence, type ProfileId, type Skill } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

const HUES = ['#ff3d5a', '#4cc9ff', '#46e3a8', '#ffb547', '#b98bff', '#ff8a5c', '#7ee0ff'];

const speakingPhotos: {
  src: string;
  alt: string;
  caption: string;
  category: string;
  detail: string;
  contain?: boolean;
}[] = [
  {
    src: '/assets/moments/gndec_68th_foundation_day_award.jpg',
    alt: 'Felicitated on the main auditorium stage on GNDEC 68th Foundation Day',
    caption: 'GNDEC 68th Foundation Day Stage Felicitation (April 08, 2024)',
    category: 'Stage Honor',
    detail: 'Felicitated on the main auditorium stage by Principal Dr. Sehijpal Singh and college dignitaries in celebration of GNDEC\'s 68th Foundation Day.',
    contain: true,
  },
  {
    src: '/assets/moments/islamia_school_felicitation_ceremony.jpg',
    alt: 'Receiving the 12th-grade 89% academic honor and separate Outstanding Student award at Islamia Senior Secondary School, Malerkotla',
    caption: '12th Grade 89% Honor & Outstanding Student Award',
    category: 'Academic Distinction',
    detail: 'Recognized for the 12th-grade 89% academic honor and a separate Outstanding Student award. The full photo is shown so everyone in the ceremony remains visible.',
    contain: true,
  },
  {
    src: '/assets/moments/lohar_trust_honours_ceremony.jpg',
    alt: 'State Honours Ceremony by All India Lohar Trust Punjab',
    caption: 'State Honours Ceremony — All India Lohar Trust Punjab',
    category: 'Community Honor',
    detail: 'Conferred with an honorary memento and trophy at the state-level Honours Ceremony (اعزا زی تقریب) celebrating youth scholastic and leadership excellence.',
    contain: true,
  },
  {
    src: '/IMG_20261015_114537.jpg',
    alt: 'Presenting on stage at Arya College',
    caption: 'Presenting on stage at Arya College Ludhiana',
    category: 'Keynote & Tech',
    detail: 'Presenting on stage during the annual inter-college technical symposium at Arya College Ludhiana.',
  },
  {
    src: '/assets/moments/gndec_hackathon_lab_session.jpg',
    alt: 'Focused collaborative software sprint in GNDEC computer labs',
    caption: 'In the zone: Competitive Hackathon Lab Sprint',
    category: 'Hackathon Sprint',
    detail: 'Collaborative engineering, rapid system prototyping, and real-time algorithm testing inside GNDEC computing labs during competitive hackathons.',
  },
  {
    src: '/IMG_20261015_114801.jpg',
    alt: 'Presenting to students in a lecture hall',
    caption: 'Interactive presentation in lecture hall',
    category: 'Mentorship',
    detail: 'Delivering interactive explanations and discussing technical concepts with fellow engineering students.',
  },
  {
    src: '/assets/moments/school_felicitation_award.jpg',
    alt: 'Early academic and oratory award felicitation outside school',
    caption: 'Early Academic & Oratory Felicitation Ceremony',
    category: 'School Distinction',
    detail: 'Recognized and felicitated by school teachers and administrators with an academic merit award for early scholastic leadership.',
  },
  {
    src: '/IMG_20261015_114556.jpg',
    alt: 'Speaking to a large audience at a public event',
    caption: 'Connecting with a live audience',
    category: 'Public Speaking',
    detail: 'Addressing a packed gathering with confident vocal projection, poise, and storytelling.',
  },
  {
    src: '/IMG_20261009_193318.jpg',
    alt: 'Addressing an audience at a community event',
    caption: 'Sharing ideas at a community gathering',
    category: 'Community Voice',
    detail: 'Speaking to community elders and peers on leadership, perseverance, and educational drive.',
  },
  {
    src: '/1792045115528.jpg',
    alt: 'Speaking into a microphone at a school event as a child',
    caption: 'Where the love of speaking began',
    category: 'Origins',
    detail: 'The earliest spark behind the microphone — childhood speech contest that catalyzed a lifelong devotion to public speaking.',
  },
];

export default function Skills({ profileId }: { profileId: ProfileId }) {
  const [cat, setCat] = useState(0);
  const [selectedMoment, setSelectedMoment] = useState<typeof speakingPhotos[0] | null>(null);
  const availableCategories = profileId === 'developer'
    ? skillCategories.filter((category) => ['frontend', 'backend-services', 'languages'].includes(category.id))
    : profileId === 'creative'
      ? skillCategories.filter((category) => category.id === 'creative')
      : profileId === 'speaker'
        ? skillCategories.filter((category) => category.id === 'oratory')
        : skillCategories;
  const activeIndex = Math.min(cat, availableCategories.length - 1);
  const category = availableCategories[activeIndex];
  const hue = HUES[activeIndex % HUES.length];

  const displayedMoments = profileId === 'developer'
    ? speakingPhotos.filter((p) => p.category.includes('Sprint') || p.category.includes('Tech') || p.category.includes('Mentorship') || p.category.includes('Honor'))
    : speakingPhotos;

  return (
    <>
      <SectionHeading kicker="Genres" title="My Skill Universe" aside={<p className="max-w-xs text-sm text-mist">Hover or tap a skill to see where it shows up across projects and certifications.</p>} />

      <div className="gutter grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
        {/* genre list */}
        <div className="rail -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0" role="tablist" aria-label="Skill categories">
          {availableCategories.map((c, i) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={i === cat}
              onClick={() => setCat(i)}
              className={`group relative shrink-0 rounded-lg px-4 py-3 text-left transition lg:px-5 ${i === cat ? 'text-bone' : 'text-smoke hover:text-bone'}`}
            >
              {i === cat && <motion.span layoutId="skill-tab" className="absolute inset-0 rounded-lg bg-white/[0.07] ring-1 ring-white/10" transition={{ duration: 0.45, ease: EASE }} />}
              {i === cat && <motion.span layoutId="skill-bar" className="absolute bottom-2 left-0 top-2 hidden w-[3px] rounded lg:block" style={{ background: hue }} />}
              <span className="relative block font-display text-2xl tracking-wide lg:text-3xl">{c.title}</span>
              <span className="relative hidden text-xs text-smoke lg:block">
                {c.skills.length} skills · {c.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* skill cards */}
        <div className="min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div key={category.id} initial="hidden" animate="show" exit="exit" transition={{ staggerChildren: 0.05 }}>
              <motion.p
                className="mb-5 text-sm text-mist"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 }, exit: { opacity: 0 } }}
              >
                <span className="font-semibold text-bone">{category.title}</span> — {category.subtitle}
              </motion.p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {category.skills.map((s) => (
                  <SkillCard key={s.name} skill={s} hue={hue} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {(profileId === 'shehzad' || profileId === 'speaker' || profileId === 'developer') && (
        <motion.div
          className="gutter mt-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-6% 0px' }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-crimson-2">Stage, Lab & Community</p>
              <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">Live Moments</h3>
            </div>
            <p className="text-xs text-smoke">Auditorium keynotes, hackathon sprints & award honors · Tap to inspect</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {displayedMoments.map((photo, i) => (
              <motion.figure
                key={photo.src}
                onClick={() => setSelectedMoment(photo)}
                className="group flex cursor-pointer w-full flex-col overflow-hidden rounded-xl bg-ink-2 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-[#d9b46a]/50 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.5rem)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-6% 0px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-black/40">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full ${photo.contain ? 'object-contain' : 'object-cover transition duration-700 group-hover:scale-[1.04]'}`}
                  />
                </div>
                <figcaption className="flex items-center justify-between px-4 py-3 text-xs font-medium text-mist">
                  <span className="line-clamp-1 group-hover:text-white transition">{photo.caption}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d9b46a]">
                    {photo.category}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      )}

      {/* Lightbox modal for moments */}
      <AnimatePresence>
        {selectedMoment && (
          <motion.div
            className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-black/92 p-4 backdrop-blur-xl sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMoment(null)}
          >
            <motion.div
              className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#d9b46a]/30 bg-[#0d0d12] shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 bg-black/40 px-5 py-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d9b46a]/40 bg-[#d9b46a]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#d9b46a]">
                  ★ {selectedMoment.category}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedMoment.src}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-white/10 px-3 py-1 text-xs font-semibold text-bone hover:bg-white/20"
                  >
                    Full Size ↗
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedMoment(null)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-bone transition hover:bg-white/20"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-hidden bg-black/80 flex items-center justify-center p-2">
                <img
                  src={selectedMoment.src}
                  alt={selectedMoment.alt}
                  className="max-h-[62vh] w-auto max-w-full rounded-lg object-contain"
                />
              </div>

              <div className="border-t border-white/10 bg-ink-2 p-5">
                <h4 className="font-display text-xl tracking-wide text-bone sm:text-2xl">{selectedMoment.caption}</h4>
                <p className="mt-2 text-sm leading-relaxed text-mist">{selectedMoment.detail}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SkillCard({ skill, hue }: { skill: Skill; hue: string }) {
  const [open, setOpen] = useState(false);
  const evidence = skillEvidence[skill.name];

  return (
    <motion.button
      type="button"
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.94, filter: 'blur(6px)' },
        show: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.55, ease: EASE } },
        exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
      }}
      whileHover={{ y: -6 }}
      className="group relative flex min-h-[148px] flex-col overflow-hidden rounded-xl bg-ink-2 p-4 text-left ring-1 ring-white/10 transition-shadow duration-500 hover:ring-white/20"
      style={{ boxShadow: open ? `0 18px 50px -12px ${hue}55, 0 0 0 1px ${hue}66` : undefined }}
    >
      <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-60" style={{ background: hue }} />
      <motion.span
        className="relative flex h-12 w-12 items-center justify-center rounded-lg font-display text-2xl tracking-wide"
        style={{ background: `${hue}1f`, color: hue, boxShadow: `inset 0 0 0 1px ${hue}55` }}
        animate={open ? { rotate: [0, -8, 8, 0], scale: 1.08 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        aria-hidden
      >
        {skill.mono}
      </motion.span>
      <span className="relative mt-4 flex items-center gap-2 text-[15px] font-semibold text-bone">
        {skill.name}
        {skill.note && (
          <span className="rounded px-1.5 py-px text-[9px] font-bold uppercase tracking-wider text-ink" style={{ background: hue }}>
            {skill.note}
          </span>
        )}
      </span>
      <AnimatePresence initial={false}>
        {open && evidence && (
          <motion.span
            className="relative mt-2 block text-[11px] leading-snug text-mist"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {evidence.join(' · ')}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
