import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black z-[9990] flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="text-center flex flex-col items-center">
            {/* LOADER LOGO REPLACEMENT */}
            {/* Make sure 'logo-loader.png' is in your public/ folder */}
            <motion.img
              src="/logo-loader.png"
              alt="Loading..."
              className="w-32 md:w-40 mb-8 object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            <div className="w-[120px] h-[2px] bg-white/20 overflow-hidden relative">
              <motion.div
                className="h-full bg-white absolute top-0 left-0"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};