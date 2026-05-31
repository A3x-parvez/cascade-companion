// pages/DownPage.tsx
import React from "react";
import { ShieldAlert } from "lucide-react";

export default function DownPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-950 text-center relative overflow-hidden">
      
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-radial from-red-950/20 via-zinc-950 to-black pointer-events-none animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-900/5 to-red-950/10 pointer-events-none" />

      {/* Subtle scanning effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="scanning-line"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="horror-particle horror-particle-1"></div>
        <div className="horror-particle horror-particle-2"></div>
        <div className="horror-particle horror-particle-3"></div>
      </div>

      <div className="relative z-10 p-6 max-w-2xl w-full h-full flex flex-col justify-center">
        
        <div className="bg-gradient-to-b from-zinc-900/95 to-red-950/5 border border-red-900/40 rounded-2xl shadow-[0_0_30px_rgba(255,0,0,0.2)] p-8 backdrop-blur-sm">

          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-b from-red-900/20 to-black flex items-center justify-center border border-red-800/40 shadow-[0_0_40px_rgba(255,0,0,0.15)]">
                <ShieldAlert className="w-16 h-16 text-red-500 animate-float" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-black text-red-500 mb-4 tracking-wide uppercase glitch-container">
            <span className="glitch" data-text="WEBSITE OFFLINE">
              WEBSITE OFFLINE
            </span>
          </h1>

          {/* Status badge */}
          <div className="flex justify-center mb-5">
            <div className="bg-red-950/30 border border-red-800/40 rounded-lg px-4 py-1">
              <span className="text-red-400 font-semibold text-xs tracking-[0.25em]">
                STATUS: TEMPORARILY OFFLINE
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4 mb-7">
            <p className="text-gray-200 text-base leading-relaxed font-medium">
              THIS WEBSITE IS CURRENTLY{" "}
              <span className="text-red-500 font-bold">
                UNDER MAINTENANCE
              </span>{" "}
              WHILE INTERNAL IMPROVEMENTS ARE BEING MADE.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Some services may be temporarily unavailable during this process.
              We appreciate your patience and support.
            </p>

            <div className="bg-red-950/10 border-l-4 border-red-700 p-3 rounded-r">
              <p className="text-red-300 text-xs font-medium">
                ⚠️ Temporary access restrictions are active while updates are
                being completed.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-red-900/20 pt-4">
            <p className="text-gray-500 text-xs mb-2 uppercase tracking-wider">
              Need Assistance?
            </p>

            <a
              href="mailto:contact@wtero.com"
              className="text-red-400 font-semibold text-base hover:text-red-300 transition duration-200"
            >
              contact@wtero.com
            </a>

            <p className="text-gray-600 text-xs mt-2">
              Estimated response time: 24-48 hours
            </p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .glitch-container {
          filter: drop-shadow(0 0 12px rgba(255,0,0,0.4));
        }

        .glitch {
          position: relative;
          display: inline-block;
          color: #ef4444;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          overflow: hidden;
          opacity: 0.5;
        }

        .glitch::before {
          color: #ff6b6b;
          animation: glitchTop 4s infinite linear alternate-reverse;
        }

        .glitch::after {
          color: #b91c1c;
          animation: glitchBottom 5s infinite linear alternate-reverse;
        }

        @keyframes glitchTop {
          0% { transform: translate(0); }
          20% { transform: translate(-1px, -1px); }
          40% { transform: translate(1px, 1px); }
          60% { transform: translate(-1px, 0); }
          80% { transform: translate(1px, -1px); }
          100% { transform: translate(0); }
        }

        @keyframes glitchBottom {
          0% { transform: translate(0); }
          20% { transform: translate(1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, 0); }
          80% { transform: translate(-1px, 1px); }
          100% { transform: translate(0); }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .scanning-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255,0,0,0.4),
            transparent
          );
          animation: scan 6s linear infinite;
        }

        @keyframes scan {
          0% {
            top: 0%;
          }
          100% {
            top: 100%;
          }
        }

        .horror-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255,0,0,0.3);
          border-radius: 999px;
          animation: particleFloat 10s infinite linear;
        }

        .horror-particle-1 {
          left: 20%;
          top: 80%;
        }

        .horror-particle-2 {
          left: 50%;
          top: 90%;
          animation-delay: 2s;
        }

        .horror-particle-3 {
          left: 75%;
          top: 85%;
          animation-delay: 4s;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(0px);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}