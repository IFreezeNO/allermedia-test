//Article design 

import screenSize from "../lib/design/screensize";
import redirect from "../lib/web/redirect";
import ArticleBtn from "./ArticleBtn";

const Thumbnail = ({ imageUrl, title, id, url, data }) => {
  return (
    <article className="model">
      <div className="top-row" onClick={() => redirect(url)}>
        <figure>
          <img
            ariaLabel={`Image:  ${title}`}
            src={
              screenSize(400)
                ? `${imageUrl}&height=150&width=150`
                : `${imageUrl}&height=250&width=200`
            }
            alt={title}
            title={title}
            id={`imgArticle ${id}`}
          />
        </figure>
      </div>

      <h3 className={`title ${id}`} tabindex={id} ariaLabel={title}  onClick={() => redirect(url)}>
        {title}
      </h3>
      
      <ArticleBtn id={id} title={title} ariaLabel={`Endre tittel for: ${title}`} data={data} />
    </article>
  );
};

export default Thumbnail;
