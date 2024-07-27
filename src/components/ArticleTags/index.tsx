import "./index.scss";
import { Chip } from "@nextui-org/chip";

interface ArticleTagsProps {
  tags: string[];
}
// 随机颜色生产
const randomColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0")
  );
};

const ArticleTags: React.FC<ArticleTagsProps> = ({ tags }) => {
  return (
    <div className="ArticleTags">
      <section className="box skills">
        {tags.map((tag, index) => (
          <Chip
            key={index}
            classNames={{ base:"bg-gradient-to-br  shadow-pink-500/30", content: "drop-shadow shadow-black text-white" }}
            style={{
              backgroundColor: randomColor(),
              color: "#fff",
              fontWeight: "700",
              cursor: "pointer"
            }}
          >
            {tag}
          </Chip>
        ))}
      </section>
    </div>
  );
};

export default ArticleTags;
