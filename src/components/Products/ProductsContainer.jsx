import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import ProductsList from './ProductsList';
import {deleteProduct} from '../../actions/products';
import {getCategoriesById} from '../../reducers/categories';

const ProductsContainer = ({dispatch, products}) => (
    <>
        <Header name="Products"/>
        <ProductsList products={products} onDelete={(id) => dispatch(deleteProduct(id))}/>
    </>
);

ProductsContainer.propTypes = {
    products: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    const categoriesById = getCategoriesById(state);

    const products = state.products.map(product => {
        const categories = product.categories.map(id => categoriesById[id])

        return {
            ...product,
            categories
        };
    });

    return {
        products,
    }
};

export default connect(mapStateToProps)(ProductsContainer);
