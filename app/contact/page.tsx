"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Github, Linkedin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .send(
        "service_isyg96f",
        "template_indo7i1",
        formData,
        "dyDKn3rTD3f6SCO4b"
      )
      .then(
        () => {
          setShowModal(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
        },
        () => {
          alert("❌ Failed to send, try again later.");
          setIsSubmitting(false);
        }
      );
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <section
      id="contact"
      className="relative py-20 px-4 lg:px-8 overflow-hidden"
    >
      {/* Background - Pink Gradient Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-500/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Get In{" "}
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-2 bg-gradient-to-r from-pink-500/30 to-pink-400/30 mx-auto mb-8 opacity-50"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to embark on a thrilling coding adventure? Let's connect and
            build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="glass-effect md:hover:scale-105 border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass-effect border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-effect md:hover:scale-105  border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-pink-400 mr-3" />
                  <h3 className="text-xl font-bold">Email</h3>
                </div>
                <p className="text-gray-300">nikitasen664@gmail.com</p>
                <p className="text-gray-400 text-sm mt-2">
                  Response within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect md:hover:scale-105  border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-pink-400 mr-3" />
                  <h3 className="text-xl font-bold">Location</h3>
                </div>
                <p className="text-gray-300">Phagwara, Punjab, India</p>
                <p className="text-gray-400 text-sm mt-2">
                  Open to remote opportunities
                </p>

                <div className="flex space-x-3 mt-4">
                  <a
                    href="https://github.com/NikitaSain20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nikita-sain-579a662aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:nikitasen664@gmail.com"
                    className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white text-white p-14 rounded-2xl shadow-xl max-w-sm w-full text-center"
            >
              <button
                className="absolute top-3 right-3 text-white hover:text-gray-200"
                onClick={() => setShowModal(false)}
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="text-2xl font-bold mb-2 text-pink-800">
                ✅ Message Sent!
              </h3>
              <p className="text-lg text-pink-800">
                Your message has been sent successfully. Thanks for visiting my
                portfolio❤️
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
