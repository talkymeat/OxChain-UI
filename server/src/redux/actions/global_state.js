const TOOGLE_BACKDROP = {
    type: "TOOGLE_BACKDROP"
};

const NOTIFICATION = payload => ({
    type: 'NOTIFICATION',
    payload
})


const NOTIFICATION_CLOSE = {
    type: "NOTIFICATION_CLOSE"
};



export const globalAction = {
    TOOGLE_BACKDROP,
    NOTIFICATION,
    NOTIFICATION_CLOSE
}