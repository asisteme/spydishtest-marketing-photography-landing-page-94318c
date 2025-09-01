import { FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brandFigure text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
          <h4 className="text-2xl font-bold mb-4">SpyDishTest</h4>
          <p className="text-sm leading-relaxed">
            An intelligent WhatsApp bot connecting diners with restaurants and
            delivering powerful analytics for businesses.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h5 className="font-semibold mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#diners" className="hover:text-accent">For Diners</a></li>
            <li><a href="#restaurants" className="hover:text-accent">For Restaurants</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-semibold mb-3">Get in Touch</h5>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="mailto:dasdas@gmail.com"
              className="flex items-center gap-2 hover:text-accent"
            >
              <FaEnvelope /> dasdas@gmail.com
            </a>
            <a
              href="https://wa.me/15555555555"
              className="flex items-center gap-2 hover:text-accent"
            >
              <FaWhatsapp /> WhatsApp Chat
            </a>
          </div>

          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Facebook" className="hover:text-accent">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-accent">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-white/60">
        &copy; {new Date().getFullYear()} SpyDishTest. All rights reserved.
      </div>
    </footer>
  );
}
