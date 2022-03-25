import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// basic
import { ReactComponent as BgGrid } from '../../../assets/img/bg-grid.svg';
import { ReactComponent as BgPic } from '../../../assets/img/bg-pic.svg';

// social
import { ReactComponent as Facebook } from '../../../assets/img/facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/img/instagram.svg';
import { ReactComponent as Soundcloud } from '../../../assets/img/soundcloud.svg';
import { ReactComponent as Spotify } from '../../../assets/img/spotify.svg';
import { ReactComponent as Telegram } from '../../../assets/img/telegram.svg';
import { ReactComponent as Youtube } from '../../../assets/img/youtube.svg';

const BASIC = {
    bgGrid: BgGrid,
    bgPic: BgPic
};

const SOCIAL = {
    facebook: Facebook,
    instagram: Instagram,
    soundcloud: Soundcloud,
    spotify: Spotify,
    telegram: Telegram,
    youtube: Youtube
};

const SVG_BY_TYPE = {
    ...BASIC,
    ...SOCIAL
};

class SvgIcon extends PureComponent {
    render() {
        const { type, className } = this.props;

        const CustomSvg = SVG_BY_TYPE[type];

        return (
            <CustomSvg className={className} />
        );
    }
}

SvgIcon.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string
};

SvgIcon.defaultProps = {
    className: ''
};

export default SvgIcon;
