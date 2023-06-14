import { RestaurantEntry } from '../RestaurantEntry'
import './RestaurantList.scss'

export const RestaurantList = ({ restaurants }) =>
{
    return(
        <ul className='RestaurantList'>
            {
                restaurants.map((restaurant, i) => {
                    return(
                        <RestaurantEntry key={i} restaurantData={restaurant}/>
                    )
                })
            }
        </ul>
    )
}