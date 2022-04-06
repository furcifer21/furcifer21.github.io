import './ArticleMenu.scss'
import classNames from 'classnames';
import { ReactComponent as ArticalSVG } from '../../Images/SVG/ArticleSVG.svg';

const articles = ['Бетонные заводы', 'Марки бетона', 'Классы бетона', 'Гарантия на бетон', 'Добавки в бетон', 'Для снабженцев']

export const ArticleMenu = ({currentArticle, changeArticle}) => {

  return (
    <div className='articleMenu'>
      <div className={'articleMenu_header'}>
        <ArticalSVG/>
        <span className='articleMenu_title'>Статьи</span>
      </div>
      {articles.map((item, index) => {
        return (
          <div 
            className={
              classNames('articleMenu_element', 
              {['articleMenu_element_active']: currentArticle === index})
            }
            key={index}
            onClick={() => changeArticle(index)}
          >
            {item}
          </div>
        )
      })}
     

     
    </div>
  )
}