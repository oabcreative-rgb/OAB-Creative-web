import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BrandGlyph from "../components/BrandGlyph";
import Seo from "../seo/Seo";
import { breadcrumbSchema } from "../seo/schema";
import { getPublishedArticles } from "../data/resources/articles";
import { RESOURCE_CATEGORIES } from "../data/resources/types";
import { estimateReadingTime } from "../data/resources/types";
import styles from "./Resources.module.css";

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const articles = getPublishedArticles();

  const categoriesInUse = useMemo(
    () => RESOURCE_CATEGORIES.filter((cat) => articles.some((a) => a.category === cat)),
    [articles]
  );

  const filtered = activeCategory === "All" ? articles : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <Seo
        title="Resources"
        description="Practical guides on branding, website design, motion design and digital marketing — written to help you make better decisions for your business."
        path="/resources"
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }])}
      />

      <section className={`${styles.pageHero} dark-section`}>
        <BrandGlyph tone="cyan" className={styles.heroGlyph} />
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="eyebrow">Resources</p>
            <h1>Practical guides for building a business people trust.</h1>
            <p>
              Straightforward, non-fluffy guides on branding, websites, motion design and digital
              marketing — written to help you make better decisions, not just to fill a blog.
            </p>
          </motion.div>
        </div>
      </section>

      {articles.length === 0 ? (
        <section className="section bg-mesh">
          <div className={`container ${styles.emptyState}`}>
            <span className={styles.badge}>
              <span className={styles.dot} />
              Coming Soon
            </span>
            <h2>Our first guides are in review.</h2>
            <p>
              We're preparing a library of practical guides on branding, websites, motion design
              and digital marketing. Check back soon, or reach out directly if you have a
              question in the meantime.
            </p>
            <Button to="/start-a-project" variant="primary">
              Get in Touch
            </Button>
          </div>
        </section>
      ) : (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className={styles.filterRow} role="tablist" aria-label="Filter resources by category">
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === "All"}
                className={`${styles.filterButton} ${activeCategory === "All" ? styles.filterActive : ""}`.trim()}
                onClick={() => setActiveCategory("All")}
              >
                All
              </button>
              {categoriesInUse.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`${styles.filterButton} ${activeCategory === cat ? styles.filterActive : ""}`.trim()}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.grid}>
              {filtered.map((article, i) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                >
                  <Link to={`/resources/${article.slug}`} className={styles.card}>
                    {article.featuredImage && (
                      <div className={styles.cardImgWrap}>
                        <img src={article.featuredImage} alt="" loading="lazy" />
                      </div>
                    )}
                    <div className={styles.cardBody}>
                      <span className={styles.cardCategory}>{article.category}</span>
                      <h3>{article.title}</h3>
                      <p>{article.excerpt}</p>
                      <span className={styles.cardMeta}>{estimateReadingTime(article)} min read</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
