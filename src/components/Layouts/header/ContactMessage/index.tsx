"use client";
import { useState } from "react";
import {
  SquareX,
  PhoneCall,
  MessageSquareText,
  MailPlus,
} from "lucide-react";

type Props = {
  onClose: () => void;
};

export default function ContactMessage({ onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form Submitted", form);
  }

  return (
    <div className="fixed inset-0 z-50 bg-black    bg-opacity-40 backdrop-blur-sm flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-50 text-slate-800 rounded-2xl shadow-lg p-6 space-y-5 border-8 border-gray-400"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-900">Send an Email</h1>
          <button type="button" onClick={onClose}>
            <SquareX className="hover:rotate-90 transition-transform" color="#fb923c" strokeWidth={1.75} />
          </button>
        </div>

        <p className="text-sm text-slate-500">
          Your messages are important to us. We reply within 48 hours.
        </p>

        {/* Inputs */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-blue-200 bg-white text-slate-800 placeholder-slate-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-blue-200 bg-white text-slate-800 placeholder-slate-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full border border-blue-200 bg-white text-slate-800 placeholder-slate-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-full transition-colors shadow-md"
          >
            Submit
          </button>
        </div>

        {/* Contact Buttons */}
        <div className="pt-2">
          <ul className="flex flex-col sm:flex-row gap-3 justify-between">
            <button className="flex items-center gap-2 px-4 py-2 border border-blue-200 rounded-full bg-white text-slate-700 hover:bg-blue-50 transition-all justify-center">
              <PhoneCall strokeWidth={1.75} />
              <span className="text-sm font-medium">Call us</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-blue-200 rounded-full bg-white text-slate-700 hover:bg-blue-50 transition-all justify-center">
              <MessageSquareText strokeWidth={1.75} />
              <span className="text-sm font-medium">Text us</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-blue-200 rounded-full bg-white text-slate-700 hover:bg-blue-50 transition-all justify-center">
              <MailPlus strokeWidth={1.75} />
              <span className="text-sm font-medium">Mail us</span>
            </button>
          </ul>
        </div>
      </form>
    </div>
  );
}
