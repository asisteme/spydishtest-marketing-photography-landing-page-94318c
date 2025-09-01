import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-brandBg/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png"
            alt="SpyDishTest Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-bold text-brandPrimary">SpyDishTest</span>
        </a>
        <a
          href="https://wa.me/15555555555?text=I%20want%20to%20start%20with%20SpyDishTest"
          className="btn-primary flex items-center gap-2"
        >
          <FaWhatsapp /> Start Now
        </a>
      </div>
    </header>
  );
}
