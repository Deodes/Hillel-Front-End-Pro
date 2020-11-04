import React from "react";
import { Link, useHistory } from "react-router-dom";

const ArticlePage = ({ data, match: { params: {id : id} }, handlerRemove }) => {
  const history = useHistory();

  const article = data.find(el => el.id === id);

  const handleButtonDelete = (id) => {
    handlerRemove(id);
    history.push('/');
  }

  return (
    <>
      <h1>ArticlePage</h1>
      <Link to="/">HomePage</Link>
      <h2>{article.title}</h2>
      <p>{article.text}</p>
      <h5>{article.tag}</h5>
      <button onClick={() => handleButtonDelete(article.id)}>Delete</button>
    </>
  );
};

export default ArticlePage;
