import ItemCount from './ItemCount'

function ItemDetail({nombre, precio, categoria, stock, descripcion, img }) {
    return (
        <article className="CardItem CardItemDetail m-1">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <div className='d-flex'>
                <div>
                    <img src={img} className="ImgCard" alt="" />
                </div>
                <div>
                    <section>
                        <p className="Info">
                            Precio: ${precio}
                        </p>
                        <p className="Descripcion">
                            Descripcion: {descripcion}
                        </p>
                        <p className="Info">
                            Stock disponible: {stock}
                        </p>
                        <p>
                            Categoria: {categoria}
                        </p>
                    </section>
                    <footer className="ItemFooter">
                        <ItemCount item={[nombre, precio,]} stock={10} initial={1}/>
                    </footer>
                </div>
            </div>
        </article>
    )
}

export default ItemDetail