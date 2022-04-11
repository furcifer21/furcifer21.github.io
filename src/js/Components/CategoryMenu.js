import {Link} from "react-router-dom";

export const CategoryMenu = ({categories, pageSlug}) => {
    return (
        <div className="col-sidbar-left">
            <div className="sidbar-left-name"><img src="/images/icon/widget.svg" alt=""/>Каталог</div>
            {/* <div className="sidbar-left-item active br">Товарный бетон</div> */}
            <div>
                {categories.map((category, index) => {
                    return (
                        <div key={`category-item-${index}`} className={`sidbar-left-item br w-100 position-relative ${pageSlug === category.slug ? 'active' : ''}`}>
                            <Link to={`/catalog/${category.slug}`} className="fake-link-block"></Link>
                            {category.name}
                        </div>
                    )
                })}
            </div>
            {/*<div className={`sidbar-left-item br position-relative ${pageSlug === '/calculate' ? 'active' : ''}`}>
                <Link to="/calculate" className="fake-link-block"></Link>
                Рассчитать стоимость доставки
            </div>*/}
        </div>
    )
}