//Article design 

import screenSize from "../lib/design/screensize";
import redirect from "../lib/web/redirect";
import ArticleBtn from "./ArticleBtn";

const Thumbnail = ({ imageUrl, title, id, url, data }) => {
  let tabindexCounter = 2;

  return (
    <article className="model">
      <div className="top-row" onClick={() => redirect(url)}>
        <figure>
          <img
            src={
              screenSize(400)
                ? `${imageUrl}&height=150&width=150`
                : `${imageUrl}&height=250&width=200`
            }
            alt={title}
            title={title}
            className={`imgArticle ${id}`}
          />
        </figure>
      </div>

      <h3 className={`title ${id}`} tabindex={tabindexCounter++} onClick={() => redirect(url)}>
        {title}
      </h3>
      
      <ArticleBtn id={id} title={title} data={data} />
    </article>
  );
};

export default Thumbnail;
