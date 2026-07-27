import type { ContentBlock } from "../data/resources/types";
import styles from "./ArticleBody.module.css";

export default function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className={styles.body}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return <p key={i}>{block.text}</p>;
          case "heading": {
            const Tag = block.level === 2 ? "h2" : "h3";
            return <Tag key={i}>{block.text}</Tag>;
          }
          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ListTag>
            );
          }
          case "quote":
            return <blockquote key={i}>{block.text}</blockquote>;
          default:
            return null;
        }
      })}
    </div>
  );
}
