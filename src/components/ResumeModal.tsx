import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { roleResumePdfs, type ProfileId } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useMedia } from '../hooks/useMedia';
import { EASE } from './fx';
import { printResumePdf, ResumeSheet } from './ResumeViewer';

interface ResumeModalProps {
  onClose: () => void;
  profileId?: ProfileId;
}

/** Full-screen resume viewer with role-accurate PDF download and interactive sheets. */
export default function ResumeModal({ onClose, profileId }: ResumeModalProps) {
  useScrollLock(true);
  const small = useMedia('(max-width: 767px)');
  const activePdf = (profileId && roleResumePdfs[profileId]) || roleResumePdfs.shehzad;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      id="resume-modal"
      className="fixed inset-0 z-[140] flex flex-col bg-black/95 backdrop-blur-xl text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 border-b border-white/10 pt-[env(safe-area-inset-top)]">
        <div className="flex items-center gap-3">
          <p className="truncate font-display text-xl sm:text-2xl tracking-wide text-bone">
            The Full Story
          </p>

          {!small && <span className="hidden rounded-lg bg-ink-2 px-3 py-1 text-xs text-smoke ring-1 ring-white/10 sm:inline">Interactive Resume Sheets</span>}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={activePdf.url}
            download={activePdf.filename}
            className="rounded-md bg-bone px-3.5 py-1.5 text-xs font-bold text-ink hover:bg-white transition-colors"
          >
            ⤓ Download {activePdf.label} (PDF)
          </a>
          <button
            type="button"
            onClick={() => printResumePdf(document.querySelector<HTMLElement>('#resume-modal [data-resume-sheet]'))}
            className="hidden sm:inline-flex rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-bone hover:bg-white/20 transition-colors"
            title="Print or save current interactive view"
          >
            🖨 Print View
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume"
            data-cursor="close"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-crimson hover:text-white transition"
          >
            ✕
          </button>
        </div>
      </div>

      <motion.div
        className="gutter flex-1 pb-6 pt-4 overflow-hidden"
        initial={{ opacity: 0, y: 30, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <div data-lenis-prevent className="h-full overflow-y-auto pr-1">
          <ResumeSheet profileId={profileId} />
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 pb-8">
            <a
              href={activePdf.url}
              download={activePdf.filename}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-bone px-6 text-xs font-bold text-ink hover:bg-white transition"
            >
              ⤓ Download Exact {activePdf.title} (PDF)
            </a>
            <a
              href={activePdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-xs font-semibold text-bone hover:bg-white/15 transition"
            >
              ↗ Open Original PDF in New Tab
            </a>
            <button
              type="button"
              onClick={() => printResumePdf(document.querySelector<HTMLElement>('#resume-modal [data-resume-sheet]'))}
              className="glass inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-xs font-semibold text-smoke hover:bg-white/15 hover:text-bone transition"
            >
              🖨 Print Current View
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
