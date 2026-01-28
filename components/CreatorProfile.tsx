"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Using placeholder images for the cycle
const creatorImages = [
    "https://ui-avatars.com/api/?name=Mohammed+SMAHI&background=0D8ABC&color=fff&size=128",
    "https://ui-avatars.com/api/?name=Dev+FullStack&background=6366f1&color=fff&size=128",
    "https://ui-avatars.com/api/?name=DB+Admin&background=ec4899&color=fff&size=128",
];

export default function CreatorProfile() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % creatorImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-6 right-6 z-20"
        >
            <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 p-4 pl-5 rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs ring-1 ring-white/5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={index}
                            src={creatorImages[index]}
                            alt="Creator"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-white font-bold text-base tracking-wide">Mohammed SMAHI</h3>
                    <p className="text-indigo-300/80 text-xs font-mono">smahimohammed94@gmail.com</p>
                </div>
            </div>
        </motion.div>
    );
}
