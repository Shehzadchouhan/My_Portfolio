import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';
import type { Certification } from '../data/portfolio';

interface CertificateModalProps {
  certificate: Certification;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  totalCount?: number;
}

export default function CertificateModal({
  certificate,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalCount,
}: CertificateModalProps) {
  useScrollLock(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });
  const [showDetails, setShowDetails] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Reset zoom & details when certificate changes
  useEffect(() => {
    setIsZoomed(false);
    setZoomOrigin({ x: 50, y: 50 });
  }, [certificate.id]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      }
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'f' || e.key === 'F') toggleFullscreen();
      if (e.key === 'z' || e.key === 'Z') toggleZoom();
      if (e.key === 'i' || e.key === 'I') setShowDetails((prev) => !prev);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onNext, onPrev, isZoomed]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
      setZoomOrigin({ x, y });
      setIsZoomed(true);
    } else {
      setIsZoomed(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setZoomOrigin({ x, y });
  };

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
    if (!isZoomed) setZoomOrigin({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-[150] flex flex-col bg-black/95 text-white backdrop-blur-2xl select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${certificate.name}`}
    >
      {/* Top Header Bar */}
      <header className="relative z-30 flex shrink-0 items-center justify-between border-b border-white/10 bg-black/80 px-4 py-3 sm:px-6 backdrop-blur-md">
        {/* Certificate Identity */}
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#d9b46a]/50 bg-[#d9b46a]/15 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#d9b46a] shadow-[0_0_12px_rgba(217,180,106,0.25)]">
            ★ {certificate.type || 'Verified Credential'}
          </span>

          <div className="min-w-0">
            <h2 className="truncate font-display text-sm font-semibold tracking-wide text-bone sm:text-base md:text-lg">
              {certificate.name}
            </h2>
            <p className="hidden truncate text-xs text-smoke sm:block">
              {certificate.issuer}
              {certificate.date && ` · ${certificate.date}`}
              {certificate.credentialId && ` · ${certificate.credentialId}`}
            </p>
          </div>

          {currentIndex !== undefined && totalCount !== undefined && (
            <span className="ml-1 hidden shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-[#d9b46a] md:inline">
              {currentIndex + 1} / {totalCount}
            </span>
          )}
        </div>

        {/* Toolbar Controls */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {/* Zoom Toggle */}
          {certificate.image && (
            <button
              type="button"
              onClick={toggleZoom}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                isZoomed
                  ? 'border-[#d9b46a] bg-[#d9b46a] text-ink font-bold shadow-[0_0_15px_rgba(217,180,106,0.4)]'
                  : 'border-white/15 bg-white/5 text-bone hover:border-white/30 hover:bg-white/10'
              }`}
              title={isZoomed ? 'Reset to fit view (Z)' : 'Zoom in 2x (Z)'}
            >
              <span>{isZoomed ? '🔍 Fit (1x)' : '🔍 Zoom (2x)'}</span>
            </button>
          )}

          {/* Details Drawer Toggle */}
          <button
            type="button"
            onClick={() => setShowDetails((prev) => !prev)}
            className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
              showDetails
                ? 'border-[#d9b46a] bg-[#d9b46a]/20 text-[#d9b46a]'
                : 'border-white/15 bg-white/5 text-bone hover:border-white/30 hover:bg-white/10'
            }`}
            title="Toggle citation, overview & signatories (I)"
          >
            <span>ℹ Details</span>
          </button>

          {/* Fullscreen Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="hidden sm:flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-bone hover:border-white/30 hover:bg-white/10 transition"
            title="Toggle Fullscreen (F)"
          >
            <span>{isFullscreen ? '⛶ Exit' : '⛶ Fullscreen'}</span>
          </button>

          {/* Direct Download */}
          {certificate.image && (
            <a
              href={certificate.image}
              download
              className="hidden md:flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-bone hover:border-white/30 hover:bg-white/10 transition"
              title="Download full resolution certificate"
            >
              <span>⤓ Save</span>
            </a>
          )}

          {/* Close Modal */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate viewer"
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-bone transition hover:bg-crimson hover:text-white"
            title="Close viewer (Esc)"
          >
            ✕
          </button>
        </div>
      </header>

      {/* Main Full-View Canvas */}
      <main className="relative flex flex-1 items-center justify-center overflow-hidden p-2 sm:p-4 md:p-6">
        {/* Navigation Chevron: Previous */}
        {onPrev && (
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous certificate"
            className="absolute left-2 sm:left-4 z-20 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl font-bold text-bone shadow-2xl backdrop-blur-md transition hover:scale-110 hover:border-[#d9b46a] hover:bg-[#d9b46a] hover:text-ink focus:outline-none"
            title="Previous credential (←)"
          >
            ‹
          </button>
        )}

        {/* Navigation Chevron: Next */}
        {onNext && (
          <button
            type="button"
            onClick={onNext}
            aria-label="Next certificate"
            className="absolute right-2 sm:right-4 z-20 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl font-bold text-bone shadow-2xl backdrop-blur-md transition hover:scale-110 hover:border-[#d9b46a] hover:bg-[#d9b46a] hover:text-ink focus:outline-none"
            title="Next credential (→)"
          >
            ›
          </button>
        )}

        {/* Floating status hint */}
        <div className="pointer-events-none absolute top-4 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[11px] text-smoke backdrop-blur-md">
          {isZoomed ? (
            <span className="text-[#d9b46a] font-medium">🔍 2.0x Inspection Mode · Move mouse to pan · Click image to fit</span>
          ) : (
            <span>🔍 Click certificate to zoom into any detail · Arrow keys to browse</span>
          )}
        </div>

        {/* The Certificate Hero Display */}
        <div
          className="relative flex h-full w-full items-center justify-center overflow-hidden"
          onClick={certificate.image ? handleImageClick : undefined}
          onMouseMove={certificate.image ? handleMouseMove : undefined}
        >
          {certificate.image ? (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative flex items-center justify-center max-h-[82vh] max-w-[94vw]"
            >
              <motion.img
                src={certificate.image}
                alt={certificate.name}
                style={{
                  transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
                }}
                animate={{
                  scale: isZoomed ? 2.0 : 1,
                }}
                transition={{ duration: 0.3, ease: EASE }}
                className={`max-h-[80vh] sm:max-h-[83vh] max-w-[92vw] sm:max-w-[88vw] w-auto h-auto object-contain rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] ring-1 ring-[#d9b46a]/30 transition-shadow duration-300 ${
                  isZoomed ? 'cursor-zoom-out ring-[#d9b46a]/60 shadow-[0_0_50px_rgba(217,180,106,0.2)]' : 'cursor-zoom-in hover:ring-[#d9b46a]/60'
                }`}
                draggable={false}
              />
            </motion.div>
          ) : (
            <div className="flex max-w-lg flex-col items-center justify-center rounded-2xl border border-[#d9b46a]/40 bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] p-8 text-center shadow-2xl">
              <span className="text-5xl text-[#d9b46a]">📜</span>
              <span className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d9b46a]">
                {certificate.issuer}
              </span>
              <h3 className="mt-2 font-display text-2xl text-bone">{certificate.name}</h3>
              {certificate.laurel && (
                <p className="mt-3 inline-flex rounded-full border border-[#d9b46a]/40 bg-[#d9b46a]/15 px-3 py-1 text-xs font-semibold text-[#d9b46a]">
                  🏆 {certificate.laurel}
                </p>
              )}
              <p className="mt-4 text-xs leading-relaxed text-bone/75">{certificate.detail}</p>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Collapsible Citation Drawer */}
      <footer className="relative z-30 shrink-0 border-t border-white/10 bg-black/85 backdrop-blur-xl">
        {/* Minimized bottom strip */}
        <div
          onClick={() => setShowDetails((prev) => !prev)}
          className="flex cursor-pointer items-center justify-between px-4 py-2.5 sm:px-6 transition hover:bg-white/[0.04]"
        >
          <div className="flex min-w-0 items-center gap-2 sm:gap-4 text-xs">
            {certificate.laurel && (
              <span className="truncate font-semibold text-[#d9b46a]">
                🏆 {certificate.laurel}
              </span>
            )}
            {certificate.credentialId && (
              <span className="hidden truncate text-smoke sm:inline">
                🆔 {certificate.credentialId}
              </span>
            )}
            {certificate.date && (
              <span className="hidden truncate text-smoke md:inline">
                📅 {certificate.date}
              </span>
            )}
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 text-xs font-semibold text-[#d9b46a] transition hover:text-white"
          >
            <span>{showDetails ? 'Hide Citation Details ▾' : 'Inspect Citation Details ▴'}</span>
          </button>
        </div>

        {/* Expanded Details Panel */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="overflow-hidden border-t border-white/10 bg-[#0d0d12]/95"
            >
              <div data-lenis-prevent className="max-h-[35vh] overflow-y-auto p-4 sm:p-6">
                <div className="mx-auto max-w-4xl space-y-4">
                  {/* Title & Issuer line */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9b46a]">
                        {certificate.issuer}
                      </span>
                      <h4 className="font-display text-lg text-bone sm:text-xl">
                        {certificate.name}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs">
                      {certificate.date && (
                        <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-mist">
                          📅 {certificate.date}
                        </span>
                      )}
                      {certificate.credentialId && (
                        <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-mist">
                          🆔 {certificate.credentialId}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description / Detail */}
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-smoke">
                      Overview & Official Citation
                    </h5>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-bone/85">
                      {certificate.detail}
                    </p>
                  </div>

                  {/* Signatories */}
                  {certificate.signatories && certificate.signatories.length > 0 && (
                    <div>
                      <h5 className="text-[11px] font-bold uppercase tracking-wider text-smoke">
                        Signatories & Authorities
                      </h5>
                      <div className="mt-1.5 flex flex-wrap gap-2">
                        {certificate.signatories.map((sig, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-mist"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#d9b46a]" />
                            <span>{sig}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  {certificate.tags && certificate.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {certificate.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/[0.08] px-2.5 py-0.5 text-[10px] font-medium text-mist"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </footer>
    </motion.div>
  );
}
