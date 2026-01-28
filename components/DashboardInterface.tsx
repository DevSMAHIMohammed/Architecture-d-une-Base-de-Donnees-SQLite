"use client";

import { useState } from "react";
import { Upload, Database, FileCode, CheckCircle, Smartphone, Play, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardInterface() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900/40 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 rounded-[2rem] shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]"
            >
                <div className="mb-8 flex flex-col items-center">
                    <div className="p-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl mb-6 shadow-inner ring-1 ring-white/10">
                        <Database className="w-16 h-16 text-indigo-400" strokeWidth={1.5} />
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-3 text-center">
                        SQLite Analyzer
                    </h1>
                    <p className="text-gray-400 text-lg text-center font-light">
                        Visualize, Explore, and Generate Architecture
                    </p>
                </div>

                {/* Input Area */}
                <div className="mb-10">
                    <label className="relative block group cursor-pointer">
                        <input
                            type="file"
                            accept=".sqlite,.db,.sqlite3"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <div className={`
                    relative overflow-hidden
                    border-2 border-dashed rounded-2xl p-10 transition-all duration-300
                    flex flex-col items-center justify-center gap-4
                    ${file
                                ? 'border-emerald-500/50 bg-emerald-500/5'
                                : 'border-white/10 hover:border-indigo-400/50 hover:bg-white/5'
                            }
                `}>
                            {/* Background Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {file ? (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex flex-col items-center z-10"
                                >
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
                                        <CheckCircle className="w-8 h-8 text-emerald-400" />
                                    </div>
                                    <span className="text-emerald-300 font-semibold text-lg">{file.name}</span>
                                    <span className="text-emerald-500/60 text-sm mt-1">Ready for analysis</span>
                                </motion.div>
                            ) : (
                                <div className="flex flex-col items-center z-10">
                                    <div className="p-4 bg-white/5 rounded-full mb-2 group-hover:scale-110 transition-transform duration-300">
                                        <Upload className="w-8 h-8 text-indigo-300" />
                                    </div>
                                    <span className="text-gray-300 font-medium text-lg">Upload Database File</span>
                                    <span className="text-gray-500 text-sm">Target: *.sqlite, *.db</span>
                                </div>
                            )}
                        </div>
                    </label>
                </div>

                {/* Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <button className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 text-left rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all">
                        <span className="text-gray-300 font-medium group-hover:text-white">Listing Data</span>
                        <Database className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                    </button>
                    <button className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 text-left rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
                        <span className="text-gray-300 font-medium group-hover:text-white">Architecture</span>
                        <Cpu className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
                    </button>
                </div>

                {/* Generate Button */}
                <button
                    disabled={!file}
                    className={`
                w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2
                shadow-lg transition-all duration-300
                ${file
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white hover:scale-[1.01] hover:shadow-indigo-500/25 cursor-pointer'
                            : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-white/5'
                        }
            `}
                >
                    <Play className={`w-5 h-5 ${file ? 'fill-current' : ''}`} />
                    <span>Generate Structure</span>
                </button>
            </motion.div>
        </div>
    );
}
