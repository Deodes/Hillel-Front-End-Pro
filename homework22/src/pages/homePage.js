import React from 'react';
import Form from '../components/form';
import ArticleList from '../components/articleList';
// import Filter from '../components/filter'

const HomePage = ({ data, handlerSubmit, handlerSort }) => {

  
  return (
    <>
      <h1 style={{textAlign: 'center', }}>HomePage</h1>
      <Form  handlerSubmit={handlerSubmit}/>
      {/* <Filter handlerSort={handlerSort} articles={data} /> */}
      <ArticleList articles={data}/>
      
    </>
  );
}

export default HomePage;