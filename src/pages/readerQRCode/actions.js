import api from '../../server/api';
import { Alert } from 'react-native';

export const visibleModalChange = visible => ({
    type: 'VISIBLE_MODAL_CHANGE',
    payload: visible
});

export const idOrderChange = idOrder => ({
    type: 'ID_ORDER_CHANGE',
    payload: idOrder
});