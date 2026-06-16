
import krishnaCalf from '../../assets/krishna-transparent.webp';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-brand-primary flex flex-col items-center justify-center transition-opacity duration-500">
      <style>{`
        @keyframes fillUp {
          0% { clip-path: inset(100% 0 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        .animate-fill-up {
          animation: fillUp 1.5s ease-in-out forwards;
        }
      `}</style>

      {/* Texture Layer - exact match to footer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full mandala-texture"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center z-10">

        <div className="relative w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center">
          {/* Base Silhouette (Empty State) */}
          <img
            src={krishnaCalf}
            alt="loading"
            className="absolute inset-0 w-full h-full object-contain opacity-20"
          />

          {/* Filled Silhouette (Filling Animation) */}
          <img
            src={krishnaCalf}
            alt="loading"
            className="absolute inset-0 w-full h-full object-contain animate-fill-up"
          />
        </div>

      </div>
    </div>
  );
}
