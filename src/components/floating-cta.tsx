"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { about } from "@/data/about";

export default function FloatingCTA() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      // Show after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    checkMobile();
    handleScroll();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-black/5 backdrop-blur-[12px] border border-white/5 rounded-2xl p-4 shadow-2xl shadow-black/20 w-[280px]"
            >
              <div className="space-y-3">
                {/* Social Connect */}
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-xs">Let&apos;s connect on</span>
                  <svg
                    className="w-3 h-3 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <a
                    href={about.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-xs"
                  >
                    @jahidevan
                  </a>
                </div>

                {/* Portfolio Creation Button */}
                <Link href="/create-your-portfolio" className="block">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full bg-gradient-to-r from-blue-600/20 to-blue-800/20 border-blue-500/30 text-white hover:bg-blue-600/30 hover:border-blue-400/50 transition-all duration-300 text-xs"
                  >
                    Create Portfolio ⚡
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-black/10 backdrop-blur-3xl border border-white/5 rounded-2xl p-6 shadow-2xl shadow-black/20 min-w-[320px]"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">Let&apos;s Connect!</h3>
        </div>

        <div className="space-y-4">
          {/* Social Connect */}
          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-sm">Follow me on</span>
            {/* <svg
              className="w-4 h-4 text-blue-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg> */}
            <svg
                  className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.4 0 6.4 3.5 6.4 8.1V24h-5V15.3c0-2.1 0-4.8-3-4.8-3 0-3.4 2.3-3.4 4.6V24h-5V8z" />
                </svg>
            <a
              href={about.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              @jahidevan
            </a>
          </div>

          {/* Portfolio Creation Button */}
          <Link href="/create-your-portfolio" className="block">
            <Button
              variant="outline"
              className="w-full bg-gradient-to-r from-blue-600/20 to-blue-800/20 border-blue-500/30 text-white hover:bg-blue-600/30 hover:border-blue-400/50 transition-all duration-300"
            >
              Create Your Portfolio ⚡
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
