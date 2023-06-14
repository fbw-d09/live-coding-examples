import './RestaurantEntry.scss';
import { RestaurantEntryHeader } from './components';
import { RestaurantEntryMenu } from './components/RestaurantEntryMenu/RestaurantEntryMenu';

export const RestaurantEntry = ({ restaurantData }) => {
    return (
        <li className='RestaurantEntry'>
            <RestaurantEntryHeader data={restaurantData} />
            <RestaurantEntryMenu menu={restaurantData} />
        </li>
    )
}