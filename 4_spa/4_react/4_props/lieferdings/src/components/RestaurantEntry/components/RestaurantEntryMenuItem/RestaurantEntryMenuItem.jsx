import './RestaurantEntryMenuItem.scss';

export const RestaurantEntryMenuItem = ({ data }) => {
    return (
        <li className='RestaurantEntryMenuItem'>
            <p className='RestaurantEntryMenuItem__text'>
                {data.name}
                <span className="RestaurantEntryMenuItem__text__price">
                    {data.price.toFixed(2)} €
                </span>
            </p>
        </li>
    )
}