"use client";
import { useState } from "react";
import { ShieldCheck, DollarSign, Upload, BadgeCheck, Clock, Users, ArrowRight, CreditCard, ChevronDown, MessageSquare, Check, Mail, Building, FileText, Send } from "lucide-react";
import Image from "next/image";

 export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: ""
  });
  
 const [expanded, setExpanded] = useState<number | null>(null);

const toggleFAQ = (index: number) => {
  setExpanded(expanded === index ? null : index);
};

  
  const faqs = [
    {
      question: "How long does the license verification process take?",
      answer: "Our verification process typically takes 24-48 hours. For popular software, it can be even faster. We'll keep you updated throughout the process."
    },
    {
      question: "What types of software licenses do you accept?",
      answer: "We accept licenses from major software vendors including Microsoft, Adobe, Autodesk, Oracle, Salesforce, and many others. If you're unsure, please contact us."
    },
    {
      question: "How do you determine license value?",
      answer: "We evaluate your license based on software type, remaining subscription time, current market demand, and transferability terms. We ensure you get the best possible value."
    },
    {
      question: "Is my data secure during the process?",
      answer: "Absolutely. We use bank-level encryption for all transactions and data transfers. Your information is never shared with unauthorized parties."
    }
  ];
  
  const supportedSoftware = [
    { name: "Microsoft", icon: <FileText size={24} /> },
    { name: "Adobe", icon: <FileText size={24} /> },
    { name: "Autodesk", icon: <FileText size={24} /> },
    { name: "Salesforce", icon: <FileText size={24} /> },
    { name: "Oracle", icon: <FileText size={24} /> },
    { name: "SAP", icon: <FileText size={24} /> },
    { name: "Atlassian", icon: <FileText size={24} /> },
    { name: "VMware", icon: <FileText size={24} /> }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Header/Navigation */}
      <header className="py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <DollarSign className="text-blue-600 mr-2" size={28} />
          <span className="font-bold text-2xl">SoftSell</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="hover:text-blue-600 transition">How It Works</a>
          <a href="#why-choose" className="hover:text-blue-600 transition">Why Choose Us</a>
          <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
          <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Sign In</button>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('/api/placeholder/800/800')", backgroundSize: "200px" }}></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold md:text-6xl mb-6">Turn Unused Software into <span className="text-blue-600">Cash</span></h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">SoftSell helps businesses and individuals sell their unused software licenses easily, securely, and profitably.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
              Sell My License
              <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition">Learn More</button>
          </div>
          <div className="mt-12 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-xl mx-auto">
            <p className="font-medium text-lg mb-2">Trusted by 1000+ companies worldwide</p>
            <div className="flex flex-wrap justify-center gap-8">
              <img src="/images/adobe.png" alt="Company logo" className="h-8 opacity-70 hover:opacity-100 transition" />
              <img src="/images/salesforce.png" alt="Company logo" className="h-8 opacity-70 hover:opacity-100 transition" />
              <img src="/images/microsoft.png" alt="Company logo" className="h-8 opacity-70 hover:opacity-100 transition" />
              <img src="/images/atlassian.png" alt="Company logo" className="h-8 opacity-70 hover:opacity-100 transition" />
              
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
        <p className="max-w-2xl mx-auto mb-16 text-lg">Our streamlined process makes selling your unused licenses simple and efficient</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition relative">
            <div className="absolute -top-6 left-0 right-0 flex justify-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">1</div>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full inline-flex mb-6">
              <Upload size={32} className="text-blue-600" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Upload License</h3>
            <p className="text-gray-600 dark:text-gray-300">Submit the details of your software license through our secure portal. We accept most major software providers.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition relative">
            <div className="absolute -top-6 left-0 right-0 flex justify-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">2</div>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full inline-flex mb-6">
              <DollarSign size={32} className="text-blue-600" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Get Valuation</h3>
            <p className="text-gray-600 dark:text-gray-300">Our experts evaluate your license and provide you with the best market price within 24 hours.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition relative">
            <div className="absolute -top-6 left-0 right-0 flex justify-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">3</div>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full inline-flex mb-6">
              <CreditCard size={32} className="text-blue-600" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Get Paid</h3>
            <p className="text-gray-600 dark:text-gray-300">Once verified, receive payment directly to your account through your preferred payment method.</p>
          </div>
        </div>
        
        <div className="mt-16 mb-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8">Supported Software</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {supportedSoftware.map((software, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                {software.icon}
                <span className="ml-3 font-medium">{software.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <button className="mt-12 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition flex items-center mx-auto">
          View Complete List
          <ChevronDown size={16} className="ml-2" />
        </button>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="px-6 py-20 bg-gray-50 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
        <p className="max-w-2xl mx-auto mb-16 text-lg">We provide a secure, transparent marketplace for software license transactions</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full inline-flex mb-4">
              <Clock size={24} className="text-green-600" />
            </div>
            <h4 className="font-semibold text-xl mb-2">Fast Payouts</h4>
            <p className="text-gray-600 dark:text-gray-300">Receive your money within 3-5 business days after license verification.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full inline-flex mb-4">
              <BadgeCheck size={24} className="text-purple-600" />
            </div>
            <h4 className="font-semibold text-xl mb-2">Verified Buyers</h4>
            <p className="text-gray-600 dark:text-gray-300">All buyers in our marketplace undergo strict verification to ensure safety.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="bg-red-100 dark:bg-red-900 p-4 rounded-full inline-flex mb-4">
              <ShieldCheck size={24} className="text-red-600" />
            </div>
            <h4 className="font-semibold text-xl mb-2">Secure Process</h4>
            <p className="text-gray-600 dark:text-gray-300">End-to-end encryption and secure transfer protocols protect your data.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full inline-flex mb-4">
              <Users size={24} className="text-blue-600" />
            </div>
            <h4 className="font-semibold text-xl mb-2">Support Team</h4>
            <p className="text-gray-600 dark:text-gray-300">Our dedicated team provides assistance throughout the entire process.</p>
          </div>
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4 text-left">Get up to 70% of original value for your licenses</h3>
              <p className="text-left mb-6 text-gray-600 dark:text-gray-300">Our marketplace connects you with buyers willing to pay premium prices for transferable licenses.</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <Check size={20} className="text-green-500 mr-2" />
                  <span>No hidden fees or commissions</span>
                </li>
                <li className="flex items-center">
                  <Check size={20} className="text-green-500 mr-2" />
                  <span>Transparent pricing model</span>
                </li>
                <li className="flex items-center">
                  <Check size={20} className="text-green-500 mr-2" />
                  <span>Multiple payment options</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img src="/images/license.jpg" alt="License value chart" className="rounded-lg shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Customer Testimonials</h2>
        <p className="max-w-2xl mx-auto mb-16 text-lg">See what our customers say about their experience with SoftSell</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <img src="/images/male1.jpg" alt="Customer" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="mb-4">"SoftSell made it so easy to turn our old licenses into real revenue. The process was transparent and their team was incredibly helpful."</p>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
              <p className="font-semibold">Jane Doe</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">CTO, AlphaTech</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <img src="/images/male2.jpg" alt="Customer" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="mb-4">"A trustworthy platform with great support. We recovered 65% of our initial investment on unused Adobe licenses. Will definitely use again."</p>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
              <p className="font-semibold">John Smith</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">IT Manager, BetaCorp</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <img src="/images/female1.jpg" alt="Customer" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="mb-4">"After downsizing, we had several expensive CAD licenses sitting unused. SoftSell helped us recover a significant portion of that investment."</p>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Operations Director, TechDesign</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-600 text-white p-8 rounded-xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4 md:text-left">Ready to turn your unused licenses into cash?</h3>
              <p className="md:text-left">Join thousands of satisfied customers who have recovered their software investments.</p>
            </div>
            <div className="md:w-1/3">
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition">Get Started Now</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="px-6 py-20 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
        <p className="max-w-2xl mx-auto mb-16 text-lg text-center">Find answers to the most common questions about our service</p>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button 
                className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow transition text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform ${expanded === index ? 'rotate-180' : ''}`} 
                />
              </button>
              {expanded === index && (
                <div className="mt-2 p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4">Don't see your question here?</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center mx-auto">
            <MessageSquare size={18} className="mr-2" />
            Contact Support
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="px-6 py-20 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
        <p className="max-w-2xl mx-auto mb-16 text-lg text-center">Get in touch with our team for any questions or to start selling your licenses</p>
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Our Information</h3>
              
              <div className="flex items-start mb-6">
                <Mail className="mr-4 text-blue-600 mt-1" size={20} />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-gray-600 dark:text-gray-300">support@softsell.com</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Building className="mr-4 text-blue-600 mt-1" size={20} />
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-gray-600 dark:text-gray-300">123 Software Lane<br />Tech City, TC 10101</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="mr-4 text-blue-600 mt-1" size={20} />
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9AM - 6PM<br />Weekend: Closed</p>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="font-medium mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition">
                    <img src="/images/instagram.png" alt="Social" className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition">
                    <img src="/images/twitter.png" alt="Social" className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition">
                    <img src="/images/linkdin.png" alt="Social" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" 
                  type="text" 
                  placeholder="John Doe" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <input 
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input 
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" 
                  type="text" 
                  placeholder="Your Company" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">License Type</label>
                <select 
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" 
                  required
                >
                  <option value="">Select License Type</option>
                  <option>Microsoft</option>
                  <option>Adobe</option>
                  <option>Autodesk</option>
                  <option>Oracle</option>
                  <option>Salesforce</option>
                  <option>SAP</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" 
                  placeholder="Tell us about your license or inquiry" 
                  rows={4} 
                  required
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
                  type="submit"
                >
                  <Send size={18} className="mr-2" />
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <DollarSign className="text-blue-400 mr-2" size={24} />
                <span className="font-bold text-xl">SoftSell</span>
              </div>
              <p className="text-gray-400 mb-4">The trusted marketplace for software license resale.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <img src="/images/instagram.png" alt="Social" className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <img src="/images/linkdin.png" alt="Social" className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <img src="/images/twitter.png" alt="Social" className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a></li>
                <li><a href="#why-choose" className="text-gray-400 hover:text-white transition">Why Choose Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">License Value Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Software Transfer Policies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Refund Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 SoftSell. All rights reserved.</p>
            <div className="flex space-x-4">
              <img src="/images/payment.png" alt="Payment method" className="h-6" />
              <img src="/images/visa.png" alt="Payment method" className="h-6" />
              <img src="/images/logo.png" alt="Payment method" className="h-6" />
             
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center">
          <MessageSquare size={24} />
        </button>
      </div>
    </main>
  );
   
};
