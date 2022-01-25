const Cards = ({categoria}) => {

    return (
        <div>
            <li key={categoria.id}>
                <h3>{categoria.title}</h3>
                <img src={categoria.url} alt=""/>
            </li>
        </div>
    )    
};

export default Cards;
