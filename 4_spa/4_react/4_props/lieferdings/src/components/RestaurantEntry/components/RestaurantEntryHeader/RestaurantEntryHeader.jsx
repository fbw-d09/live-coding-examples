import './RestaurantEntryHeader.scss';

export const RestaurantEntryHeader = ({ data }) => {
    return (
        <div className='RestaurantEntryHeader'>
            <p className='RestaurantEntryHeader__name'>
                { data.name }
            </p>
            <p className='RestaurantEntryHeader__description'>
                { data.description }
            </p>
        </div>
    )
}