"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Redirect to homepage after 2 seconds
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      alert("Error sending message");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gray-50">
      <h2 className="text-4xl font-bold mb-10 text-black">📩 Contact Form</h2>

      {success && <p className="text-green-600 mb-4">Message sent successfully! Redirecting...</p>}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-md space-y-4 bg-white p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="border p-3 rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="border p-3 rounded"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={5}
          className="border p-3 rounded"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
