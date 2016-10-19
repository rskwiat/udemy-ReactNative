import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const InitState = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = InitState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
