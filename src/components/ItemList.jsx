import React from "react";
import SingleItem from "./SingleItem";

const ItemList = ({ title, items, itemsArray }) => {

    return (
        <div className="item-list">
            <div className="item-list__header">
                <h2>{title} populares</h2>
                <a className="item-list__link"
                    href="/">Mostrar tudo
                </a>
            </div>

            <div className="item-list__container">

                {itemsArray.filter((currentObj, index) => index < items)
                    .map((currentObj, index) => (
                        <SingleItem
                         //name={currentObj.name} 
                         {...currentObj}
                         key={`${title}-${index}`} />
                    ))}

            </div>
        </div>
    )
}

export default ItemList