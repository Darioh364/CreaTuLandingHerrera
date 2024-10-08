import ItemCount from './ItemCount'

function ItemDetail({nombre, precio, categoria, descripcion, imagen, id }) {
    return (
        <article className="CardItem CardItemDetail m-1">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <div className='d-flex'>
                <div>
                    <img src={imagen} className="ImgCard" alt="" />
                </div>
                <div>
                    <section>
                        <p className="Info">
                            Precio: ${precio}
                        </p>
                        <p className="Info">
                            Descripcion: {descripcion}
                        </p>
                        <p className="Info">
                            Categoria: {categoria}
                        </p>
                    </section>
                    <footer className="ItemFooter">
                        <ItemCount item={nombre} imagen={imagen} precio={precio} id={id} initial={1}/>
                    </footer>
                </div>
            </div>
        </article>
    )
}

export default ItemDetail