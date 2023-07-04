import PropTypes from 'prop-types';
import './Footer.scss';

export const Footer = ({ owner }) =>
{
    return(
        <div className="Footer">
            <p>
                &copy; { new Date().getFullYear() } by { owner } :D
            </p>
        </div>
    )
}