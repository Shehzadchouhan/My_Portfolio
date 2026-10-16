import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjectsForProfile, profile, projects, type ProfileId, type Project } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE, Magnetic } from './fx';
import { ProjectArt } from './Poster';

const block = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
};

export default function ProjectModal({ project, onClose, onSwitch, profileId }: { project: Project; onClose: () => void; onSwitch: (p: Project) => void; profileId: ProfileId }) {
  useScrollLock(true);
  const scroller = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [project.id]);

  const more = getProjectsForProfile(profileId).filter((p) => p.id !== project.id);

  return (
    <motion.div className="fixed inset-0 z-[140]" role="dialog" aria-modal="true" aria-labelledby={`title-${project.id}-modal`}>
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div ref={scroller} data-lenis-prevent className="absolute inset-0 overflow-y-auto overscroll-contain" onClick={onClose}>
        <motion.div
          className="relative mx-auto min-h-full max-w-5xl bg-ink-2 shadow-2xl sm:my-10 sm:min-h-0 sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
        >
          {/* billboard */}
          <div className="relative h-[52vh] min-h-[340px] overflow-hidden sm:rounded-t-2xl">
            <motion.div layoutId={`art-${project.id}`} className="absolute inset-0" transition={{ duration: 0.7, ease: EASE }}>
              <ProjectArt project={project} />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/30 to-transparent" />
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              data-cursor="close"
              aria-label="Close project"
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-lg text-bone backdrop-blur transition hover:bg-black"
            >
              ✕
            </button>
            <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-10">
              <motion.p className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[0.34em] text-bone/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <span className="font-display text-xl tracking-normal text-crimson-2">S</span> ORIGINAL
              </motion.p>
              <motion.h2
                id={`title-${project.id}-modal`}
                layoutId={`title-${project.id}`}
                className="font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.86] tracking-wide text-bone"
                transition={{ duration: 0.7, ease: EASE }}
              >
                {project.title}
              </motion.h2>
            </div>
          </div>

          <motion.div className="px-5 pb-12 sm:px-10" initial="hidden" animate="show" transition={{ staggerChildren: 0.08, delayChildren: 0.25 }}>
            <motion.div variants={block} className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-mist">
              <span className="font-semibold text-[#46e3a8]">{project.year}</span>
              <span className="h-1 w-1 rounded-full bg-smoke" />
              <span>{project.genre}</span>
            </motion.div>

            <motion.p variants={block} className="mt-4 max-w-3xl text-lg leading-relaxed text-bone sm:text-xl">
              {project.logline}
            </motion.p>

            {project.videos && project.videos.length > 0 && (
              <motion.section variants={block} className="mt-10">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">
                    {project.genre ? `${project.genre.split('•')[0].trim()} · Video Showcase` : 'Video Showcase'} ({project.videos.length})
                  </h3>
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                    🔊 Stereo AAC Sound Mastered
                  </span>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  {project.videos.map((video) => (
                    <VideoItem key={video.src} video={video} />
                  ))}
                </div>
              </motion.section>
            )}

            {(project.github || project.live) && (
              <motion.div variants={block} className="mt-6 flex flex-wrap gap-3">
                {project.github && (
                  <Magnetic>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="flex min-h-12 items-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
                    >
                      GitHub ↗
                    </a>
                  </Magnetic>
                )}
                {project.live && (
                  <Magnetic>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="flex min-h-12 items-center gap-2 rounded-md border border-white/25 px-6 text-[15px] font-bold text-bone transition hover:border-bone"
                    >
                      Live Demo ↗
                    </a>
                  </Magnetic>
                )}
              </motion.div>
            )}

            {project.videos && project.videos.length > 0 && !project.github && (
              <motion.div variants={block} className="mt-6 flex flex-wrap gap-3">
                {profile.links.instagram && (
                  <Magnetic>
                    <a
                      href={profile.links.instagram}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="flex min-h-12 items-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
                    >
                      <span>▶</span> More Reels on Instagram ↗
                    </a>
                  </Magnetic>
                )}
                <Magnetic>
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(`Video Editing Inquiry — ${project.title}`)}`}
                    data-cursor="link"
                    className="flex min-h-12 items-center gap-2 rounded-md border border-white/25 px-6 text-[15px] font-bold text-bone transition hover:border-bone"
                  >
                    <span>✉</span> Inquire for Video Editing ↗
                  </a>
                </Magnetic>
              </motion.div>
            )}

            {/* impact */}
            <motion.section variants={block} className="mt-12">
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Result / Impact</h3>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
                {project.metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    className="bg-ink p-4 sm:p-5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.5, ease: EASE }}
                  >
                    <p className="font-display text-4xl leading-none text-bone sm:text-5xl" style={{ color: i === 0 ? project.palette.accent : undefined }}>
                      {m.value}
                    </p>
                    <p className="mt-2 text-xs leading-snug text-mist">{m.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <div className="mt-12 grid gap-10 lg:grid-cols-[3fr_2fr]">
              <motion.section variants={block}>
                <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">My Contribution</h3>
                <ul className="space-y-4">
                  {project.build.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-bone/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.palette.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.section>
              <div className="space-y-10">
                <motion.section variants={block}>
                  <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span key={t} className="glass rounded-full px-3 py-1.5 text-sm font-medium text-bone">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.section>
                <motion.section variants={block}>
                  <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Key Features</h3>
                  <ul className="space-y-2.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-bone/85">
                        <span className="text-crimson-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.section>
              </div>
            </div>

            {/* more like this */}
            {more.length > 0 && <motion.section variants={block} className="mt-14 border-t border-white/10 pt-8">
              <h3 className="mb-4 font-sans text-lg font-semibold text-bone">More Originals</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {more.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    data-cursor="view"
                    onClick={() => onSwitch(p)}
                    className="group relative aspect-video overflow-hidden rounded-xl text-left ring-1 ring-white/10 transition hover:ring-white/30"
                  >
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <ProjectArt project={p} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-mist">{p.genre}</p>
                      <p className="font-display text-3xl leading-none tracking-wide text-bone">{p.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.section>}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function VideoItem({ video }: { video: { title: string; src: string; poster?: string } }) {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useState(1.0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = false;
      vidRef.current.volume = 1.0;
    }
  }, [video.src]);

  const handleVolumeChange = (newVol: number) => {
    const clamped = Math.max(0, Math.min(1, newVol));
    setVolume(clamped);
    if (!vidRef.current) return;
    vidRef.current.volume = clamped;
    if (clamped > 0) {
      vidRef.current.muted = false;
      setIsMuted(false);
    } else {
      vidRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!vidRef.current) return;
    if (isMuted || volume === 0) {
      const restoreVol = volume > 0 ? volume : 1.0;
      vidRef.current.muted = false;
      vidRef.current.volume = restoreVol;
      setVolume(restoreVol);
      setIsMuted(false);
    } else {
      vidRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const maxVolume = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!vidRef.current) return;
    vidRef.current.muted = false;
    vidRef.current.volume = 1.0;
    setVolume(1.0);
    setIsMuted(false);
    if (vidRef.current.paused) {
      vidRef.current.play().catch(() => {});
    }
  };

  const displayVol = isMuted ? 0 : volume;

  return (
    <figure className="group/video relative overflow-hidden rounded-xl bg-ink ring-1 ring-white/10 transition-all hover:ring-white/25">
      <div className="relative aspect-video w-full bg-black">
        <video
          ref={vidRef}
          className="h-full w-full object-contain"
          src={video.src}
          poster={video.poster}
          controls
          playsInline
          preload="metadata"
          aria-label={video.title}
          onLoadedMetadata={(e) => {
            const v = e.currentTarget;
            v.muted = false;
            v.volume = 1.0;
            setVolume(1.0);
            setIsMuted(false);
          }}
          onPlay={(e) => {
            const v = e.currentTarget;
            if (!isMuted) {
              v.muted = false;
              v.volume = volume > 0 ? volume : 1.0;
            }
            setIsPlaying(true);
          }}
          onPause={() => setIsPlaying(false)}
          onVolumeChange={(e) => {
            const v = e.currentTarget;
            setIsMuted(v.muted || v.volume === 0);
            if (!v.muted && v.volume > 0) {
              setVolume(v.volume);
            }
          }}
        />

        {/* Top-Left: Active Audio Equalizer Waveform Pill */}
        <div className="pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-2">
          {isPlaying && !isMuted && volume > 0 ? (
            <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/80 px-2.5 py-1 text-[11px] font-semibold text-emerald-400 shadow-lg backdrop-blur">
              <span className="flex h-3 items-end gap-0.5">
                <span className="eq-bar-1 h-full w-1 rounded-full bg-emerald-400" />
                <span className="eq-bar-2 h-full w-1 rounded-full bg-emerald-400" />
                <span className="eq-bar-3 h-full w-1 rounded-full bg-emerald-400" />
                <span className="eq-bar-4 h-full w-1 rounded-full bg-emerald-400" />
              </span>
              <span>Audio Active</span>
            </span>
          ) : isPlaying && (isMuted || volume === 0) ? (
            <span className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-black/80 px-2.5 py-1 text-[11px] font-semibold text-amber-400 shadow-lg backdrop-blur">
              <span>🔇</span>
              <span>Sound Muted</span>
            </span>
          ) : null}
        </div>

        {/* Top-Right: Quick Sound Status & Toggle Pill */}
        <button
          type="button"
          onClick={toggleMute}
          data-cursor="click"
          aria-label={isMuted ? 'Turn Sound On' : 'Mute Sound'}
          className={`absolute right-3 top-3 z-20 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold backdrop-blur transition-all shadow-md ${
            isMuted || volume === 0
              ? 'bg-crimson text-white shadow-crimson/40 hover:scale-105'
              : 'border border-white/15 bg-black/80 text-bone hover:bg-black'
          }`}
        >
          <span>{isMuted || volume === 0 ? '🔇' : volume > 0.5 ? '🔊' : '🔉'}</span>
          <span>{isMuted || volume === 0 ? 'Muted — Click to Unmute' : `${Math.round(displayVol * 100)}% Volume`}</span>
        </button>

        {/* Prominent floating unmute banner if video is actively playing muted */}
        {isPlaying && (isMuted || volume === 0) && (
          <button
            type="button"
            onClick={maxVolume}
            data-cursor="click"
            aria-label="Tap to unmute sound at 100%"
            className="absolute inset-x-4 bottom-14 z-20 mx-auto flex max-w-max items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-xs font-bold text-black shadow-xl backdrop-blur transition-all hover:scale-105 hover:bg-emerald-300"
          >
            <span>🔊</span>
            <span>Video is Playing Muted — Tap for 100% Sound</span>
          </button>
        )}
      </div>

      {/* Visible Audio & Media Deck */}
      <figcaption className="space-y-3 border-t border-white/5 bg-ink-2/95 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-sm font-semibold text-bone">{video.title}</span>
          {isPlaying && !isMuted && volume > 0 ? (
            <span className="flex shrink-0 items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              Stereo AAC 48kHz
            </span>
          ) : (
            <span className="shrink-0 text-[11px] text-mist">Mastered Audio</span>
          )}
        </div>

        {/* Interactive Audio Controls Bar */}
        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/40 p-2.5">
          {/* Mute/Unmute toggle button */}
          <button
            type="button"
            onClick={toggleMute}
            data-cursor="click"
            aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-sm text-bone transition hover:bg-white/20"
          >
            {isMuted || volume === 0 ? '🔇' : volume > 0.5 ? '🔊' : '🔉'}
          </button>

          {/* Interactive Volume Slider */}
          <div className="flex flex-1 items-center gap-2">
            <span className="shrink-0 text-[11px] font-bold tracking-wider text-mist">VOL</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.02"
              aria-label={`${video.title} Volume Slider`}
              value={displayVol}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              style={{
                background: `linear-gradient(to right, #46e3a8 0%, #46e3a8 ${displayVol * 100}%, rgba(255, 255, 255, 0.15) ${displayVol * 100}%, rgba(255, 255, 255, 0.15) 100%)`,
              }}
              className="audio-slider h-2 w-full flex-1"
            />
            <span className="w-12 text-right font-mono text-xs font-bold text-bone">
              {isMuted || volume === 0 ? '0%' : `${Math.round(displayVol * 100)}%`}
            </span>
          </div>

          {/* 100% Max Volume Button */}
          <button
            type="button"
            onClick={maxVolume}
            data-cursor="click"
            aria-label="Set volume to maximum 100%"
            className="shrink-0 rounded border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-400 transition hover:bg-emerald-500/20"
          >
            100% Max
          </button>
        </div>
      </figcaption>
    </figure>
  );
}


