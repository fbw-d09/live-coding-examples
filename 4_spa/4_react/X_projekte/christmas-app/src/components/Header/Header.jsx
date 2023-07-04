import Moment from 'react-moment';

import './Header.scss';

export const Header = () =>
{
    return(
        <header className="Header">
            Christmas is&nbsp;<Moment fromNow>2023-12-24T00:00-0000</Moment>!
        </header>
    )
}
