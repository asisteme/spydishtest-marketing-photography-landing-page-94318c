export default function Hero() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center text-center px-6"
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(241,241,246,0.95) 0%, rgba(255,255,255,0.8) 100%), url("https://images.pexels.com/photos/14784768/pexels-photo-14784768.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600")',
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-brandPrimary mb-4">
          An Innovative Solution for Restaurants &amp; Diners
        </h1>
        <p className="text-lg md:text-xl text-brandFigure mb-8">
          Connect with diners, analyze data, and optimize your restaurant
          management &mdash; all inside WhatsApp.
        </p>
        <a
          href="https://wa.me/15555555555?text=I%20want%20to%20start%20with%20SpyDishTest"
          className="btn-primary text-lg"
        >
          Get Started on WhatsApp
        </a>
      </div>
    </section>
  );
}
