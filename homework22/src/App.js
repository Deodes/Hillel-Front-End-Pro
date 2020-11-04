import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import HomePage from './pages/homePage'
import ArticlePage from './pages/articlePage'

const history = createBrowserHistory();

function App() {

  const [articles, setArticles] = useState([]);

  const handlerSubmitCallback = (value) => setArticles([...articles, value]);

  const handlerButtonRemoveCallback = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  }

  const handlerButtonSortCallback = (data, tag) => {
    const sortedArray = [...data].filter(article => article.tag === tag);
    const extraArray = sortedArray.splice(sortedArray.length - 1, 0, );
    setArticles([...sortedArray, ...extraArray]);
  }

  return (
    <Router
      history={history}
    >
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <HomePage
              data={articles}
              handlerSubmit={handlerSubmitCallback}
              handlerSort={handlerButtonSortCallback}
            />
          )}>
        </Route>
        <Route
          path="/article/:id"
          render={routeProps => (
            <ArticlePage
              data={articles}
              handlerSubmit={handlerSubmitCallback}
              handlerRemove={handlerButtonRemoveCallback}
              {...routeProps}
            />
          )}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
