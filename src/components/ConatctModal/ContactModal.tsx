"use client";

import { X, Phone, MessageSquareText, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed bottom-24 right-6 z-50 pl-4"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="w-full max-w-sm rounded-3xl border border-gray-300 bg-gradient-to-r from-gray-200 to-blue-200 p-6 px-4 py-5 shadow-xl dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Send an Email</h2>
                <button onClick={onClose}>
                  <X className="h-5 w-5 text-gray-500 hover:text-red-500" />
                </button>
              </div>
              <p className="mb-4 text-sm text-[#394499] dark:text-gray-300">
                Your message is important to us and we reply to all of them in
                less than 48 hours.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded border p-2 dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded border p-2 dark:bg-gray-700 dark:text-white"
                />
                <textarea
                  placeholder="Message"
                  className="w-full rounded border p-2 dark:bg-gray-700 dark:text-white"
                  rows={4}
                />
                <button
                  type="submit"
                  className="w-full rounded bg-orange-500 py-2 text-white transition duration-200 hover:bg-orange-600"
                >
                  Contact Us
                </button>
              </form>

              <div className="mt-6 flex justify-between text-sm text-[#394499] dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Call Us</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquareText className="h-4 w-4" />
                  <span>Text Us</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Mail Us</span>
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-[#394499] dark:text-gray-400">
                2021 © EasyTopup Solutions Pte Ltd.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
