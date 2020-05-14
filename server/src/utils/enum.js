export const USER_TYPE = {
  CLIENT: 0,
  VALIDATOR: 1,
  ADMIN: 2,
  SERVICE_USER: 3,
};

export const REGISTER_STEP = {
    SELECT: 0,
    FILL_INFORMATION: 1,
    CONFIRM_TRANSATION: 2,
    COMPLETE: 3,
}

export const VALIDATOR_STEP = {
    SELECT: 0,
    FILL_INFORMATION: 1,
    LOADING: 2,
    APPROVE: 3,
    CONFIRM_TRANSATION: 4,
    COMPLETE: 5,
}

export const SERVICE_STEP = {
    SELECT: 0,
    FILL_INFORMATION: 1,
    LOADING: 2,
    APPROVE: 3,
    CONFIRM_TRANSATION: 4,
    MAKE_PAYMENT: 5,
    CONFIRM_PAYMENT: 6,
    COMPLETE: 7,
}

export const TYPE = {
    AGE: 0,
    DEGREE: 1,
    LICENSE: 2
}

export function Type(key) {
    switch (key) {
        case TYPE.AGE:
            return "Age"
            break;
        case TYPE.DEGREE:
            return "Degree"
            break;
        case TYPE.LICENSE:
            return "License"
            break;
        default:
            return ''
            break;
    }
}

export function UserType(key) {
  switch (key) {
    case USER_TYPE.ADMIN:
        return "Admin/Owner"
      break;
    case USER_TYPE.CLIENT:
        return "Client"
      break;
    case USER_TYPE.VALIDATOR:
        return "Validator"
      break;
    case USER_TYPE.SERVICE_USER:
        return "Service User"
      break;
    default:
        return ''
      break;
  }
}
