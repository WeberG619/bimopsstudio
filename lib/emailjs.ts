// EmailJS configuration
export const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // You'll need to get this from EmailJS
export const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // You'll need to get this from EmailJS
export const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // You'll need to get this from EmailJS

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  companySize: string;
  revitVersion: string;
  seats: number;
  timeline: string;
}