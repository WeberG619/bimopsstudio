'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from './button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const botResponses = {
  greeting: [
    "Hi! I'm here to help you learn about BIM Ops Studio. What would you like to know?",
    "Hello! Welcome to BIM Ops Studio. How can I assist you today?",
    "Hey there! I'm your BIM automation assistant. What can I help you with?"
  ],
  products: [
    "We offer three main products: ReviTask for parameter automation, SmartSheetList for intelligent sheet generation, and Folder Structure Creator for project organization. Which one interests you?",
    "Our flagship tools include ReviTask (saves 80% time on parameter updates), SmartSheetList (generates professional sheet sets), and Folder Structure Creator (ISO 19650 compliant). Want to know more about any specific tool?"
  ],
  pricing: [
    "We offer flexible pricing plans starting with a 14-day free trial. Visit our pricing page to see all options and find the perfect plan for your team size.",
    "Our pricing is designed for teams of all sizes. Start with our free trial - no credit card required! Check out /pricing for detailed plans."
  ],
  demo: [
    "I'd love to show you a demo! Click the 'Watch Demo' button on our homepage, or schedule a personalized demo with our team through the contact page.",
    "You can watch our interactive demo right here on the site, or book a live demo session. Would you prefer to see the demo now or schedule a call?"
  ],
  support: [
    "Need help? You can reach our support team through the contact page, or I can help answer common questions right here. What specific issue are you facing?",
    "Our support team is here to help! Contact us through /contact or let me know what you need assistance with."
  ],
  default: [
    "That's a great question! While I can help with basic info about BIM Ops Studio, for detailed technical questions, I'd recommend contacting our team directly.",
    "I'd be happy to help! Could you be more specific about what you're looking for? I can tell you about our products, pricing, or help you get started.",
    "Thanks for asking! For the most accurate information, feel free to contact our team. In the meantime, is there anything specific about BIM automation I can help clarify?"
  ]
};

function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
  }
  
  if (message.includes('product') || message.includes('tool') || message.includes('revitask') || message.includes('smartsheet')) {
    return botResponses.products[Math.floor(Math.random() * botResponses.products.length)];
  }
  
  if (message.includes('price') || message.includes('cost') || message.includes('plan') || message.includes('trial')) {
    return botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)];
  }
  
  if (message.includes('demo') || message.includes('show') || message.includes('example')) {
    return botResponses.demo[Math.floor(Math.random() * botResponses.demo.length)];
  }
  
  if (message.includes('help') || message.includes('support') || message.includes('contact')) {
    return botResponses.support[Math.floor(Math.random() * botResponses.support.length)];
  }
  
  return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your BIM Ops Studio assistant. Ask me about our products, pricing, or how we can help automate your Revit workflows!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-electric-blue hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border dark:border-gray-700 flex flex-col"
          >
            {/* Header */}
            <div className="bg-electric-blue text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot size={20} />
                <span className="font-medium">BIM Ops Assistant</span>
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-electric-blue text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && (
                        <Bot size={16} className="mt-1 flex-shrink-0" />
                      )}
                      {message.sender === 'user' && (
                        <User size={16} className="mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot size={16} />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 border dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-electric-blue hover:bg-blue-600"
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}