import { motion } from "framer-motion";
import "./ProjectCover.css";

export default function ProjectCover({
  title,
  subtitle,
  metric,
  metricLabel,
  role,
  tags = [],
  link,
  bgImage,
}) {
  return (
    <motion.a
      href={link}
      className="project-cover"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      initial="rest"
      animate="rest"
      aria-label={`View case study: ${title}`}
      title={`Open case study: ${title}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Background image layer */}
      {bgImage ? (
        <motion.div
          className="bg-image"
          style={{ backgroundImage: `url(${bgImage})` }}
          variants={{
            rest: { opacity: 0.25, scale: 1.08 },
            hover: { opacity: 0.38, scale: 1.12 },
          }}
          transition={{ duration: 0.35 }}
        />
      ) : null}

      {/* Contrast overlay */}
      <div className="bg-overlay" />

      <div className="cover-content">
        <motion.div
          className="metric"
          variants={{
            rest: { opacity: 0.92, y: 0 },
            hover: { opacity: 1, y: -4 },
          }}
          transition={{ duration: 0.2 }}
        >
          <h1>{metric}</h1>
          <span>{metricLabel}</span>
        </motion.div>

        <div className="text">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <motion.div
          className="meta"
          variants={{
            rest: { opacity: 0, y: 10 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.25 }}
        >
          <p className="role">{role}</p>

          {tags.length > 0 && (
            <ul className="tags" aria-label="Project tags">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}

          <span className="cta">View case study →</span>
        </motion.div>
      </div>
    </motion.a>
  );
}
