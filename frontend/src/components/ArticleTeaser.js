import React from 'react';

const ArticleTeaser = ({ article }) => {
  return(
    <div>
      <h3>{ article.title }</h3>
      <div>{ article.body.value }</div>
    </div>
  );
};

export default ArticleTeaser;