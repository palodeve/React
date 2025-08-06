import "./ItemListContainer.css"



function ItemListContainer ({mensaje}) {
    return (
    <div>
        <h2>{mensaje}</h2>
        <div>
            <ul>
                <li>producto uno</li>
                <li>producto dos </li>
            </ul>
        </div>

    </div>
    
    
    )
}

export default ItemListContainer
