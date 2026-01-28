"use client";

import { useState } from "react";
import { Upload, Database, FileCode, CheckCircle, Smartphone, Play, Cpu, X, Mail, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardInterface() {
    const [file, setFile] = useState<File | null>(null);
    const [showContactModal, setShowContactModal] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleGenerateClick = () => {
        setShowContactModal(true);
    };

    return (
        <>
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
                        onClick={handleGenerateClick}
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

            {/* Contact Modal */}
            <AnimatePresence>
                {showContactModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowContactModal(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-gray-900 border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl overflow-hidden"
                        >
                            {/* Decorative background blobs */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

                            <button
                                onClick={() => setShowContactModal(false)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="text-center mb-6">
                                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/20">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-2">Premium Feature</h2>
                                <p className="text-gray-400 text-sm">
                                    To access the full structure generation capabilities and advanced features, please verify your account with the developer.
                                </p>
                            </div>

                            <div className="space-y-4 bg-white/5 rounded-2xl p-5 border border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 bg-indigo-500/10 rounded-lg">
                                        <User className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-500 uppercase font-semibold tracking-wider">Developer</label>
                                        <span className="text-white font-medium">SMAHI Mohammed</span>
                                    </div>
                                </div>

                                <div className="h-px bg-white/5 w-full" />

                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 bg-purple-500/10 rounded-lg">
                                        <Mail className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <label className="block text-xs text-gray-500 uppercase font-semibold tracking-wider">Email Contact</label>
                                        <a href="mailto:smahimohammed94@gmail.com" className="text-white font-medium hover:text-indigo-400 transition-colors truncate block">
                                            smahimohammed94@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowContactModal(false)}
                                className="w-full mt-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors"
                            >
                                Got it
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
