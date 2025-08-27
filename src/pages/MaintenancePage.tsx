// pages/DownPage.tsx
import React from "react";
import { Skull } from "lucide-react";

export default function DownPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-center relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-radial from-red-950/30 via-black to-black pointer-events-none animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-900/10 to-red-950/20 pointer-events-none" />

      {/* Scanning and particle effects */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="scanning-line"></div>
        <div className="scanning-line-horizontal"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="horror-particle horror-particle-1"></div>
        <div className="horror-particle horror-particle-2"></div>
        <div className="horror-particle horror-particle-3"></div>
        <div className="horror-particle horror-particle-4"></div>
      </div>

      <div className="relative z-10 p-6 max-w-2xl w-full h-full flex flex-col justify-center">
        <div className="bg-gradient-to-b from-black/95 to-red-950/10 border-2 border-red-800 rounded-2xl shadow-[0_0_50px_rgba(255,0,0,0.7),inset_0_0_20px_rgba(255,0,0,0.1)] p-6 backdrop-blur-sm danger-container">
          
          {/* Animated Skull icon */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-b from-red-900/40 to-black flex items-center justify-center shadow-[0_0_80px_rgba(255,0,0,0.9)] border-6 border-red-900/70 skull-container">
                <Skull className="w-24 h-24 text-red-600 skull-icon animate-skull" />
              </div>
              <div className="absolute inset-0 orbit-container">
                <div className="orbit-dot orbit-dot-1"></div>
                <div className="orbit-dot orbit-dot-2"></div>
                <div className="orbit-dot orbit-dot-3"></div>
              </div>
            </div>
          </div>

          {/* Bright glitch heading */}
          <h1 className="text-5xl md:text-6xl font-black text-red-500 mb-4 tracking-wider uppercase relative select-none glitch-container">
            <span className="glitch" data-text="WEBSITE DOWN">
              WEBSITE DOWN
            </span>
          </h1>

          {/* Status badge */}
          <div className="flex justify-center mb-4">
            <div className="bg-red-950/50 border border-red-800/70 rounded-lg px-4 py-1 status-badge">
              <span className="text-red-400 font-bold text-xs tracking-widest">STATUS: DEVELOPER SHUTDOWN</span>
            </div>
          </div>

          {/* Warning message */}
          <div className="space-y-3 mb-6">
            <p className="text-gray-200 text-base leading-relaxed font-medium">
              THIS WEBSITE HAS BEEN <span className="text-red-500 font-bold">INTENTIONALLY TAKEN OFFLINE</span> BY THE DEVELOPER TEAM DUE TO INTERNAL REASONS. ACCESS IS DISABLED UNTIL FURTHER NOTICE.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              All services are currently <span className="text-red-400 font-semibold">offline</span>. The shutdown was performed without client consent and may relate to unresolved internal issues.
            </p>
            <div className="bg-red-950/30 border-l-4 border-red-700 p-3 rounded-r warning-box">
              <p className="text-red-300 font-medium text-xs">
                ⚠️ Access is blocked intentionally. Data remains secure or maybe compromised, but the site will remain offline until further notice.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-red-900/40 pt-4">
            <p className="text-gray-400 text-xs mb-1 font-medium">For urgent matters, contact:</p>
            <a
              href="mailto:contact@wtero.com"
              className="text-red-500 font-bold text-base hover:text-red-400 transition-all duration-200 glow-text"
            >
              contact@wtero.com
            </a>
            <p className="text-gray-500 text-xs mt-1">Response time: 24-48 hours</p>
          </div>
        </div>
      </div>

      {/* Glitch and Skull animation CSS */}
      <style>{`
        .glitch-container { filter: drop-shadow(0 0 20px rgba(255,0,0,0.9)); }
        .glitch {
          position: relative;
          display: inline-block;
          line-height: 1;
          color: #ff4444;
          text-shadow: 0 0 25px rgba(255,68,68,0.9);
        }
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0; top: 0; width: 100%; height: 100%;
          overflow: hidden; pointer-events: none;
        }
        .glitch::before {
          color: #ff1e1eff;
          z-index: 2;
          animation: glitch-top 2.5s infinite linear;
          text-shadow: -4px 0 #ff0000ff, 4px 0 #470707ff;
          opacity: 0.9;
        }
        .glitch::after {
          color: #ff0000;
          z-index: 1;
          animation: glitch-bottom 2s infinite linear;
          text-shadow: 3px 0 #ff0000, -3px 0 #4a0a0aff;
          opacity: 0.8;
        }

        @keyframes glitch-top {
          0%,5%{clip-path: inset(0 0 95% 0);transform:translateX(0);}
          7%{clip-path: inset(15% 0 80% 0);transform:translateX(-6px) skew(-1deg);}
          12%{clip-path: inset(30% 0 60% 0);transform:translateX(6px) skew(1deg);}
          18%{clip-path: inset(50% 0 40% 0);transform:translateX(-3px);}
          25%{clip-path: inset(70% 0 20% 0);transform:translateX(3px) skew(-0.5deg);}
          30%,100%{clip-path: inset(0 0 0 0);transform:translateX(0);}
        }
        @keyframes glitch-bottom {
          0%,10%{clip-path: inset(80% 0 0 0);transform:translateX(0);}
          15%{clip-path: inset(60% 0 0 0);transform:translateX(4px) skew(0.5deg);}
          22%{clip-path: inset(40% 0 0 0);transform:translateX(-4px) skew(-0.5deg);}
          28%{clip-path: inset(20% 0 0 0);transform:translateX(2px);}
          35%{clip-path: inset(5% 0 0 0);transform:translateX(-2px) skew(0.3deg);}
          40%,100%{clip-path: inset(0 0 0 0);transform:translateX(0);}
        }

        /* Animate only the skull */
        .animate-skull {
          animation: skull-rotate-pulse 3s infinite ease-in-out;
        }
        @keyframes skull-rotate-pulse {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-5deg) scale(1.05); }
          50% { transform: rotate(5deg) scale(1.1); }
          75% { transform: rotate(-3deg) scale(1.05); }
        }
      `}</style>
    </div>
  );
}
