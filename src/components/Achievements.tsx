import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { achievements, certifications, type Certification, type ProfileId } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';
import CertificateModal from './CertificateModal';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#d9b46a] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements({ profileId }: { profileId: ProfileId }) {
  const rail = useRef<HTMLDivElement>(null);
  const [modalList, setModalList] = useState<Certification[]>([]);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'rail'>('grid');
  const [certCategory, setCertCategory] = useState<string>('all');

  const visibleAchievements = profileId === 'speaker'
    ? achievements.filter((a) => ['gndec-68th-foundation-day', 'declamation-awake-foundation', 'lohar-trust-honours', 'islamia-school-felicitation', 'school-felicitation-award', 'cml-case-study', 'smart-traffic-ideathon', 'rebrand-challenge', 'think-a-thon-2026', 'jpal-digital-wellness'].includes(a.id))
    : profileId === 'developer'
      ? achievements.filter((a) => ['web-forge-2026', 'thinknext-ai-ml', 'arya-tech-disha', 'think-a-thon-2026', 'gndec-hackathon-sprint', 'iete-code-debugging', 'coding-ninjas-hackathon', 'smart-traffic-ideathon', 'iot-international-webinar', 'python-infosys', 'be10x-ai'].includes(a.id))
      : profileId === 'creative'
        ? achievements.filter((a) => ['cml-case-study', 'rebrand-challenge', 'smart-traffic-ideathon', 'lohar-trust-honours', 'be10x-ai'].includes(a.id))
        : achievements;

  const visibleCertifications = profileId === 'speaker'
    ? certifications.filter((c) => c.issuer.includes('Club') || c.issuer.includes('J-PAL') || c.issuer.includes('Awake') || c.issuer.includes('Multi-Faceted') || c.issuer.includes('Inter-College') || c.issuer.includes('Lohar') || c.issuer.includes('Islamia') || c.issuer.includes('Guru Nanak') || c.issuer.includes('School') || ['web-forge-2026', 'thinknext-ai-ml-2025', 'cml-case-study-2025', 'gndec-athletics-100m'].includes(c.id))
    : profileId === 'developer'
      ? certifications.filter((c) => ['web-forge-2026', 'thinknext-ai-ml-2025', 'cml-case-study-2025', 'gndec-athletics-100m', 'thinkathon-2026', 'gndec-athletics-cert', 'arya-college-tech-disha', 'coding-ninjas-summer-hack', 'iete-debugging-2024', 'ideathon-2024', 'iot-webinar-2024', 'infosys-python-foundation', 'infosys-python-p2', 'infosys-python-p1', 'be10x-ai', 'mind-wrapping-award'].includes(c.id))
      : profileId === 'creative'
        ? certifications.filter((c) => ['cml-case-study-2025', 'web-forge-2026', 'thinknext-ai-ml-2025', 'rebrand-2025', 'ideathon-2024', 'be10x-ai', 'gndec-athletics-100m'].includes(c.id))
        : certifications;

  const filteredCertifications = certCategory === 'all'
    ? visibleCertifications
    : certCategory === 'featured'
      ? visibleCertifications.filter((c) => ['web-forge-2026', 'thinknext-ai-ml-2025', 'cml-case-study-2025', 'gndec-athletics-100m', 'thinkathon-2026'].includes(c.id))
      : certCategory === 'tech'
        ? visibleCertifications.filter((c) => ['web-forge-2026', 'thinknext-ai-ml-2025', 'thinkathon-2026', 'infosys-python-foundation', 'infosys-python-p2', 'infosys-python-p1', 'be10x-ai', 'iot-webinar-2024', 'coding-ninjas-summer-hack', 'iete-debugging-2024'].includes(c.id))
        : certCategory === 'podium'
          ? visibleCertifications.filter((c) => ['cml-case-study-2025', 'arya-college-tech-disha', 'declamation-we-are-one', 'mind-wrapping-award'].includes(c.id))
          : certCategory === 'athletics'
            ? visibleCertifications.filter((c) => ['gndec-athletics-100m', 'gndec-athletics-cert'].includes(c.id))
            : visibleCertifications;

  const handleOpenCert = (c: Certification) => {
    setModalList(filteredCertifications);
    const idx = filteredCertifications.indexOf(c);
    setModalIndex(idx >= 0 ? idx : 0);
  };

  const openAchievement = (a: (typeof visibleAchievements)[number]) => {
    const match = visibleCertifications.find(
      (c) => c.link === a.link || c.image === a.image || a.id.includes(c.id) || c.id.includes(a.id)
    );
    if (match) {
      setModalList(visibleCertifications);
      const idx = visibleCertifications.indexOf(match);
      setModalIndex(idx >= 0 ? idx : 0);
    } else if (a.image) {
      const momentCert: Certification = {
        id: a.id,
        issuer: a.org,
        name: a.title,
        link: a.link,
        image: a.image,
        date: a.date,
        detail: a.detail,
        credentialId: a.credentialId,
        type: a.image.includes('/moments/') ? 'Stage Felicitation Moment' : 'Achievement Credential',
        laurel: a.laurel,
        tags: ['Stage Moment', a.org],
      };
      setModalList([momentCert]);
      setModalIndex(0);
    } else if (a.link) {
      window.open(a.link, '_blank');
    }
  };

  const handleNext = () => {
    if (modalIndex !== null && modalList.length > 0) {
      setModalIndex((modalIndex + 1) % modalList.length);
    }
  };

  const handlePrev = () => {
    if (modalIndex !== null && modalList.length > 0) {
      setModalIndex((modalIndex - 1 + modalList.length) % modalList.length);
    }
  };

  return (
    <>
      <SectionHeading kicker="Awards season" title="Top Moments" aside={<p className="max-w-xs text-sm text-mist">Click any credential or moment to inspect verified certificates, citations, and details.</p>} />

      <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 [perspective:1400px]">
        {visibleAchievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article
                onClick={() => openAchievement(a)}
                data-cursor="link"
                className="relative flex h-full min-h-[350px] cursor-pointer flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] px-5 pb-6 pt-8 text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60"
              >
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />
                <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25" />
                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#d9b46a]">{a.laurel}</p>
                  </div>
                  <Laurel side="r" />
                </div>
                <h3 className="relative mt-5 font-display text-[1.95rem] leading-[0.95] tracking-wide text-bone">{a.title}</h3>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b46a]">{a.org}</p>
                {a.date && <p className="relative mt-1 text-[11px] text-smoke">{a.date}</p>}
                <p className="relative mt-3 text-[13px] leading-relaxed text-bone/70">{a.detail}</p>

                {a.link && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openAchievement(a);
                    }}
                    data-cursor="link"
                    className="relative mt-auto inline-flex min-h-10 items-center gap-1.5 pt-5 text-xs font-semibold tracking-wide text-[#d9b46a] underline decoration-[#d9b46a]/60 underline-offset-4 hover:text-white hover:decoration-white"
                  >
                    {a.image?.startsWith('/assets/moments/') ? 'View moment ↗' : 'View certificate ↗'}
                  </button>
                )}
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Dedicated Certificates Section */}
      {visibleCertifications.length > 0 && (
        <div id="certificates" className="mt-20 scroll-mt-24">
          <div className="gutter mb-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-crimson-2">
                Verified Credentials & Accreditations
              </p>
              <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">
                Certificate Vault <span className="text-mist font-sans text-xl">· {visibleCertifications.length} credentials</span>
              </h3>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <div className="inline-flex rounded-lg bg-ink-2 p-1 ring-1 ring-white/10">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                    viewMode === 'grid' ? 'bg-[#d9b46a] text-ink font-bold shadow' : 'text-smoke hover:text-bone'
                  }`}
                >
                  ☵ Grid View
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('rail')}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                    viewMode === 'rail' ? 'bg-[#d9b46a] text-ink font-bold shadow' : 'text-smoke hover:text-bone'
                  }`}
                >
                  ⇄ Carousel Rail
                </button>
              </div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="gutter mb-6 flex flex-wrap gap-2">
            {[
              { id: 'all', label: `All (${visibleCertifications.length})` },
              { id: 'featured', label: '★ Featured (Web Forge, AI/ML, CML, Athletics)' },
              { id: 'tech', label: 'Web & AI Engineering' },
              { id: 'podium', label: 'Podium & Case Studies' },
              { id: 'athletics', label: 'Athletics & Honors' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCertCategory(cat.id)}
                className={`rounded-full px-3.5 py-1 text-xs font-medium transition ${
                  certCategory === cat.id
                    ? 'border border-[#d9b46a] bg-[#d9b46a]/15 text-[#d9b46a]'
                    : 'border border-white/10 bg-ink-2/70 text-smoke hover:border-white/20 hover:text-bone'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {viewMode === 'rail' ? (
            <div className="group/rail relative">
              <div ref={rail} className="rail gutter flex snap-x gap-3 overflow-x-auto py-5">
                {filteredCertifications.map((c) => (
                  <motion.button
                    key={c.id}
                    type="button"
                    onClick={() => handleOpenCert(c)}
                    data-cursor="link"
                    className="group relative flex w-[280px] shrink-0 snap-start flex-col justify-between rounded-xl bg-ink-2 p-4 text-left ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-[#d9b46a]/50"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-crimson-2 line-clamp-1">{c.issuer}</span>
                        <span className="text-xs text-smoke transition group-hover:text-bone">↗</span>
                      </div>

                      {c.image && (
                        <div className="mt-3 aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/10 bg-black/40">
                          <img
                            src={c.image}
                            alt={c.name}
                            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      )}

                      <p className="mt-3 text-sm font-semibold leading-snug text-bone group-hover:text-white line-clamp-2">{c.name}</p>
                      {c.date && <p className="mt-1 text-[11px] text-smoke">{c.date}</p>}
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2 text-[10px] text-mist">
                      <span className="font-medium text-[#d9b46a]">★ {c.type || 'Credential'}</span>
                      <span className="text-smoke group-hover:text-bone">Inspect ↗</span>
                    </div>
                  </motion.button>
                ))}
              </div>
              <RailButtons rail={rail} />
            </div>
          ) : (
            <div className="gutter grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCertifications.map((c) => (
                <motion.button
                  key={c.id}
                  type="button"
                  onClick={() => handleOpenCert(c)}
                  data-cursor="link"
                  className="group relative flex flex-col justify-between rounded-xl bg-ink-2 p-4 text-left ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-[#d9b46a]/50"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-crimson-2 line-clamp-1">{c.issuer}</span>
                      <span className="text-xs text-smoke transition group-hover:text-bone">↗</span>
                    </div>

                    {c.image && (
                      <div className="mt-3 aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/10 bg-black/40">
                        <img
                          src={c.image}
                          alt={c.name}
                          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <p className="mt-3 text-sm font-semibold leading-snug text-bone group-hover:text-white line-clamp-2">{c.name}</p>
                    {c.date && <p className="mt-1 text-[11px] text-smoke">{c.date}</p>}
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2 text-[10px] text-mist">
                    <span className="font-medium text-[#d9b46a]">★ {c.type || 'Credential'}</span>
                    <span className="text-smoke group-hover:text-bone">Inspect ↗</span>
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Interactive Full-View Certificate & Moment Lightbox */}
      <AnimatePresence>
        {modalIndex !== null && modalList[modalIndex] && (
          <CertificateModal
            certificate={modalList[modalIndex]}
            onClose={() => setModalIndex(null)}
            onNext={modalList.length > 1 ? handleNext : undefined}
            onPrev={modalList.length > 1 ? handlePrev : undefined}
            currentIndex={modalIndex}
            totalCount={modalList.length}
          />
        )}
      </AnimatePresence>
    </>
  );
}
