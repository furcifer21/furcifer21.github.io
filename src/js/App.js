import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {CatalogPage} from './Pages/CatalogPage';
import {CalculatedPage} from './Pages/CalculatedPage';
import {CartPage} from './Pages/CartPage';
import {CategoryPage} from './Pages/CategoryPage';
import {AllArticlesPage} from './Pages/AllArticlesPage';
import {HomePage} from './Pages/HomePage';
import {OneArticlePage} from './Pages/OneArticlePage';
import {useState} from 'react';
import {AllArticlesCategoriesPage} from "./Pages/AllArticlesCategoriesPage";
import {Header} from "./Components/Header";
import SeoBlock from "./Components/SeoBlock";
import {ProductPage} from "./Pages/ProductPage";
import {CheckoutPage} from "./Pages/CheckoutPage";
import ScrollToTop from "./Components/ScrollToTop";
import {OnClickModal} from "./Components/OnClickModal";
import {SuccessModal} from "./Components/SuccessModal";

function App() {
  const [seoData, setSeoData] = useState({});

  function setSeo(seoData) {
    setSeoData(seoData);
  }

  return (
    <div className="App">
      <SeoBlock seo={seoData} />
      <Router>
        <ScrollToTop/>
        <Header/>
        <Routes>
          <Route exact path="/" element={<HomePage seoCallback={setSeo}/>}/>
          <Route exact path="/catalog" element={<CatalogPage seoCallback={setSeo}/>}/>
          <Route exact path="/catalog/:catalogCategory" element={<CategoryPage seoCallback={setSeo}/>}/>
          <Route exact path="/catalog/:catalogCategory/:subCategory" element={<CategoryPage subSlug seoCallback={setSeo}/>}/>
          <Route exact path="/product/:productSlug" element={<ProductPage seoCallback={setSeo}/>}/>
          {/*<Route exact path="/articles-categories" element={<AllArticlesCategoriesPage seoCallback={setSeo}/>}/>*/}
          <Route exact path="/articles" element={<AllArticlesPage seoCallback={setSeo}/>}/>
          <Route exact path="/articles/:slugArticle" element={<OneArticlePage seoCallback={setSeo}/>}/>
          <Route exact path="/calculate" element={<CalculatedPage seoCallback={setSeo}/>}/>
          <Route exact path="/checkout" element={<CheckoutPage seoCallback={setSeo}/>}/>
          <Route exact path="/cart" element={<CartPage seoCallback={setSeo}/>}/>
        </Routes>
        <OnClickModal/>
        <SuccessModal/>
      </Router>
    </div>
  );
}

export default App;
