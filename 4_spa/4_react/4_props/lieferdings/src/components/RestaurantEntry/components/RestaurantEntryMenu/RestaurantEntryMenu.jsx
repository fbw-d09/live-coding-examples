import { RestaurantEntryMenuItem } from '../RestaurantEntryMenuItem';
import './RestaurantEntryMenu.scss';

export const RestaurantEntryMenu = ({ menu }) => {
    return (
        <ul className='RestaurantEntryMenu'>
            {
                menu.dishes.map((dish, j) => {
                    return (
                        <RestaurantEntryMenuItem key={j} data={dish} />
                    )
                })
            }
        </ul>
    )
}