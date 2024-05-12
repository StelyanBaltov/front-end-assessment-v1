import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {ProductForm} from '../ProductForm';
import { createProductForm } from '../../../actions/products';

const AddFormContainer = ({categories, dispatch}) => (
    <>
        <Link to='/'>Home</Link>
        <ProductForm
            onSave={(data) => {
                dispatch(createProductForm(data))
            }}
            categories={categories}
        />
    </>
);

AddFormContainer.propTypes = {
    categories: PropTypes.array,
};

const mapStateToProps = (state) => ({
    categories: state.categories,
});

export default connect(mapStateToProps)(AddFormContainer);
