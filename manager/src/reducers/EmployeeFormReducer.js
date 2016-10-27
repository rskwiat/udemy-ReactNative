import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
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
    case EMPLOYEE_CREATE:
      return InitState;
    case EMPLOYEE_SAVE_SUCCESS:
      return InitState;
    default:
      return state;
  }
};
