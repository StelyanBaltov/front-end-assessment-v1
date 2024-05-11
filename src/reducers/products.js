import * as productsActions from '../actions/products';
import {generateId} from '../utils';

export const RATING_THRESHOLD = 8
export const isFeatured = ({rating, featured}) => rating > RATING_THRESHOLD || featured;

export const products = (state = [], action) => {
    switch (action.type) {
        case productsActions.RECEIVE_PRODUCTS:
            return [
                ...action.products,
            ];
        case productsActions.DELETE_PRODUCT:
            return state.filter((item) => item.id !== action.productId);
        case productsActions.UPDATE_PRODUCT:
            return state.map((item) => {
                if (item.id === action.productId) {
                    return {
                        ...item,
                        ...action.data,
                        featured: isFeatured(action.data)
                    }
                }
                return item;
            });
        case productsActions.CREATE_PRODUCT:
            const createdAt = new Date();
            const defaultExpirationDate = new Date(createdAt);
            const minimumDaysForExpiration = 30

            defaultExpirationDate.setDate(createdAt.getDate() + minimumDaysForExpiration);

            return state.concat([{
                ...action.data,
                id: +generateId(),
                featured: isFeatured(action.data),
                createdAt: createdAt,
                expirationDate: action.data.expirationDate || defaultExpirationDate
            }]);
        default:
            return state;
    }
};

export const getProductById = ({products}, productId) => products.find(({id}) => id === productId);
