import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {

  return(
    <ul style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginBottom: '10px'}}>
      {
        articles.map(article => <Link style={{display: 'block'}} key={article.id} to={`/article/${article.id}`}>{article.title}</Link>)
      }
    </ul>
  )
}

export default ArticleList;