import diseases from '../apis/diseases';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_DISEASE,
    FETCH_DISEASES,
    FETCH_DISEASE,
    DELETE_DISEASE,
    EDIT_DISEASE
} from './types';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}