import { FaCheckCircle } from "react-icons/fa";

export default function BenefitsSection({
  id,
  title,
  subtitle,
  points,
  image,
  cta,
  reverse = false
}) {
  return (
    <section id={id} className="py-20">
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-10 px-6`}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full md:w-1/2 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-brandPrimary">
            {title}
          </h2>
          <p className="text-brandFigure mb-6">{subtitle}</p>

          <ul className="space-y-3 mb-8">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <FaCheckCircle className="text-accent mt-1" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          {cta ? (
            <a href={cta.link} className="btn-primary">
              {cta.text}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
