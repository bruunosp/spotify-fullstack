import SingleItem from './SingleItem'
import { Link, useLocation } from 'react-router-dom'

const ItemList = ({title, items, itemsArray, path, idPath}) => {
  // console.log(items)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  let finalItems

  finalItems = isHome ? items : Infinity

  return (
      <div className="item-list">
        <div className="item-list__header">
          <h2>{title} populares</h2>

          {isHome ? 
          <Link className="item-list__link" to={path}>
            Mostrar tudo
          </Link> : <></>}
        </div>

        <div className="item-list__container">
          {itemsArray
            .filter((currentValue, index) => index < finalItems)
            .map((currObj, index) => (
              <SingleItem 
                idPath = {idPath}
                {...currObj}
                key={`${title}-${index}`} />
                ))}
        </div>
      </div>
  )
}

export default ItemList