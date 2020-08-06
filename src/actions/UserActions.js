
import React from "react";
import UserParameters from '../parameters/UserParameters';

const userUpdate = (user) => ({
    user: user,
    type: UserParameters.USER_LOGGING
});