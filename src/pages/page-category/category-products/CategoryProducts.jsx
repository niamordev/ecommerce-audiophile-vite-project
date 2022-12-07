
import { Link, NavLink } from 'react-router-dom';

export default  function CatgoryProducts( {NameCategory, dataProduct} ){




  return(
    <div className="main-page-category-container-product">
      {
        dataProduct.map( data  => {
          if(data.category == NameCategory){
          return(

            <div className="page-category-container-product">
       <div className="img-product">
           <img className="mobile" src={data.image.mobile} alt=""/>
           <img className="tablet" src={data.image.tablet} alt=""/>
           <img className="desktop" src={data.image.desktop} alt=""/>
       </div>
       <div className="presentation-product">
           <span className="new-product">{data.new? "NEW PRODUCT": null}</span>
           <div className="name-product">
           <h2 className='name-product'>{data.name}</h2>
           <h2 className='name-category'>{data.category}</h2>
           </div>
           <p className="description-product">
           {data.description}
           </p>
           <NavLink to={'/ecommerce-audiophile-vite-project/product/' + data.slug} > <button className="btn-style1">SEE PRODUCT</button> </NavLink>
       </div>
       </div>
          )}
          })
      }
    </div>
  )
}

