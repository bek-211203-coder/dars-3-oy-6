import './index.css'

function Card(props) {
    const { card } = props; 

    return (
        <div className="user_card">
            <h3 className='card_title'>{card.username} {card.lastname}</h3>
            <p className='card_text'>{card.phone}</p>
        </div>
    )
}

export default Card;
