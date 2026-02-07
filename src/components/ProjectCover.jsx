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
  bgImage,          // NEW: background image URL (e.g. "/src/assets/fnb-estore.png")
  openInNewTab = true, // NEW: default open in new tab (nice for portfolio cards)
}) {
  const targetProps = openInNewTab
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

  return (
    <motion.a
      href={link}
      className="project-cover"
      whileHover="hover"
      initial="rest"
      animate="rest"
      aria-label={`View case study: ${title}`}
      {...targetProps}
    >
      {/* NEW: Background layer */}
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

      {/* NEW: Overlay to ensure text contrast */}
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
