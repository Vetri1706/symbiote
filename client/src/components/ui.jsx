import { motion } from 'framer-motion';

export function Card({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      className={`bg-[#111111] rounded-[32px] border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ProgressBar({ progress, color = 'bg-violet-600' }) {
  return (
    <div className="w-full bg-[#1a1a1a] rounded-full h-2 overflow-hidden border border-white/5">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`h-2 rounded-full ${color}`}
      />
    </div>
  );
}
