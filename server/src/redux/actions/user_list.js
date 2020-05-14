const SET_CLIENT = payload => (
    {
        type: "SET_CLIENT",
        payload
    }
);

const SET_VALIDATOR = payload => (
    {
        type: "SET_VALIDATOR",
        payload
    }
);

const SET_SERVICE = payload => (
    {
        type: "SET_SERVICE",
        payload
    }
);

const SET_ADMIN = payload => (
    {
        type: "SET_ADMIN",
        payload
    }
);

export {
    SET_CLIENT,
    SET_VALIDATOR,
    SET_SERVICE,
    SET_ADMIN
}