//Article design 

import screenSize from "../lib/design/screensize";
import redirect from "../lib/web/redirect";
import ArticleBtn from "./ArticleBtn";

const Thumbnail = ({ imageUrl, title, id, url, data }) => {
  return (
    <article className="model">
      <div className="hd-Image" onClick={() => redirect(url)}>
        <figure>
          <img
            src={
              screenSize(400)
                ? `${imageUrl}&height=150&width=150`
                : `${imageUrl}&height=250&width=200`
            }
            alt={title}
            title={title}
            id="imgArticle"
          />
        </figure>
      </div>

      <span className={`title ${id}`} onClick={() => redirect(url)}>
        {title}
      </span>
      <ArticleBtn id={id} title={title} data={data} />
    </article>
  );
};

export default Thumbnail;
