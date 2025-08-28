"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <div className="w-20 h-2 bg-gradient-to-r from-transparent via-current to-transparent mx-auto mb-8 opacity-50"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to embark on a thrilling coding adventure? Let's connect and
              build something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold gradient-text">
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
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
                    className="w-full btn-primary"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="h-6 w-6 gradient-text mr-3" />
                    <h3 className="text-xl font-bold">Email</h3>
                  </div>
                  <p className="text-gray-300">nikitasen664@gmail.com</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Response within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="h-6 w-6 gradient-text mr-3" />
                    <h3 className="text-xl font-bold">Phone</h3>
                  </div>
                  <p className="text-gray-300">+91 78140 82590</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Available Mon-Fri, 9 AM - 6 PM IST
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 gradient-text mr-3" />
                    <h3 className="text-xl font-bold">Location</h3>
                  </div>
                  <p className="text-gray-300">Phagwara, Punjab, India</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Open to remote opportunities
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 gradient-text">
                    Connect With Me
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/NikitaSain20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link p-3 rounded-full"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nikita-sain-579a662aa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link p-3 rounded-full"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="mailto:nikitasen664@gmail.com"
                      className="social-link p-3 rounded-full"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
