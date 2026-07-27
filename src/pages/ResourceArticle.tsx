import { Navigate, useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import Button from "../components/Button";
import BookingButton from "../components/BookingButton";
import ArticleBody from "../components/ArticleBody";
import SectionHeading from "../components/SectionHeading";
import Seo from "../seo/Seo";
import { absoluteUrl, DEFAULT_OG_IMAGE } from "../seo/config";
import { articleSchema, breadcrumbSchema } from "../seo/schema";
import { getArticleBySlugIncludingDrafts, getRelatedArticles } from "../data/resources/articles";
import { estimateReadingTime } from "../data/resources/types";
import { getServiceBySlug } from "../data/servicesData";
import styles from "./ResourceArticle.module.css";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function ResourceArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlugIncludingDrafts(slug) : undefined;

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  const isDraft = article.status === "draft";
  const path = `/resources/${article.slug}`;
  const relatedService = article.relatedServiceSlug ? getServiceBySlug(article.relatedServiceSlug) : undefined;
  const relatedArticles = getRelatedArticles(article);
  const readingTime = estimateReadingTime(article);

  return (
    <>
      <Seo
        title={article.title}
        description={article.excerpt}
        path={path}
        image={article.featuredImage ? absoluteUrl(article.featuredImage) : DEFAULT_OG_IMAGE}
        type="article"
        noindex={isDraft}
        jsonLd={
          isDraft
            ? undefined
            : [
                articleSchema({
                  headline: article.title,
                  description: article.excerpt,
                  path,
                  image: article.featuredImage ? absoluteUrl(article.featuredImage) : DEFAULT_OG_IMAGE,
                  authorName: article.authorName,
                  datePublished: article.publishedDate,
                  dateModified: article.updatedDate,
                }),
                breadcrumbSchema([
                  { name: "Home", path: "/" },
                  { name: "Resources", path: "/resources" },
                  { name: article.title, path },
                ]),
              ]
        }
      />

      <article className="section">
        <div className="container">
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link to="/resources">Resources</Link>
            <span aria-hidden="true"> / </span>
            <span>{article.category}</span>
          </nav>

          {isDraft && (
            <div className={styles.draftBanner} role="note">
              <strong>Draft</strong> — this article is not published or indexed yet. It's visible
              here for review.
            </div>
          )}

          <motion.header
            className={styles.header}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className={styles.category}>{article.category}</span>
            <h1>{article.title}</h1>
            <div className={styles.meta}>
              <span>
                By <strong>{article.authorName}</strong>, {article.authorRole}
              </span>
              <span aria-hidden="true">·</span>
              <span>Published {formatDate(article.publishedDate)}</span>
              {article.updatedDate && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>Updated {formatDate(article.updatedDate)}</span>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span>{readingTime} min read</span>
            </div>
          </motion.header>

          {article.featuredImage && (
            <div className={styles.featuredImgWrap}>
              <img src={article.featuredImage} alt="" className={styles.featuredImg} />
            </div>
          )}

          <p className={styles.intro}>{article.intro}</p>

          <ArticleBody blocks={article.body} />

          {relatedService && (
            <div className={styles.serviceCta}>
              <p className="eyebrow">Related Service</p>
              <h3>{relatedService.navTitle}</h3>
              <p>{relatedService.supportingStatement}</p>
              <Button to={`/services/${relatedService.slug}`} variant="secondary">
                Explore {relatedService.navTitle} →
              </Button>
            </div>
          )}

          {relatedArticles.length > 0 && (
            <div className={styles.related}>
              <SectionHeading eyebrow="Keep Reading" title="Related resources" />
              <div className={styles.relatedGrid}>
                {relatedArticles.map((related) => (
                  <Link key={related.slug} to={`/resources/${related.slug}`} className={styles.relatedCard}>
                    <span className={styles.cardCategory}>{related.category}</span>
                    <h4>{related.title}</h4>
                    <p>{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <motion.div
            className={`${styles.ctaBand} dark-section`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2>Ready to put this into practice?</h2>
            <p>Tell us about your project, or book a short call to talk it through first.</p>
            <div className={styles.ctaActions}>
              <Button to="/start-a-project" variant="primary">
                Start a Project
              </Button>
              <BookingButton variant="secondary">Book a Discovery Call</BookingButton>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
}
