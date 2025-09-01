import { FaStar } from "react-icons/fa";

const data = [
  {
    name: "Laura G.",
    text: "SpyDishTest helped me discover amazing dishes nearby. The WhatsApp bot feels like chatting with a foodie friend!",
    rating: 5
  },
  {
    name: "Chef Marco",
    text: "Our competitor pricing insight and heatmaps boosted weekday traffic by 27%. Fantastic tool!",
    rating: 5
  },
  {
    name: "Restaurante Sol",
    text: "Weekly executive reports keep our team aligned on market trends. Highly recommended.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-brandPrimary mb-10">
          What Our Users Say
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map(({ name, text, rating }) => (
            <blockquote
              key={name}
              className="bg-brandBg p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <p className="mb-4 text-brandFigure">&ldquo;{text}&rdquo;</p>
              <div className="flex justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={
                      idx < rating ? "text-accent" : "text-brandFigure/30"
                    }
                  />
                ))}
              </div>
              <cite className="not-italic font-semibold">{name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
