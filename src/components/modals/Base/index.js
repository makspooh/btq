import { connect } from 'react-redux';

import { default as ModalContainer } from './Base';

import * as modalActions from '../../../actions/modal';

import { MODALS_BY_NAME } from './modals';

function mapStateToProps(state) {
    return {
        views: state.modal.views,
        isVisible: state.modal.isVisible,
        modals: MODALS_BY_NAME
    };
}

const mapDispatchToProps = {
    ...modalActions
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
