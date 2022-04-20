interface userCreateInterface {
    created:boolean,
    errors:{
        email_duplicated: boolean,
    },
    user: {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
    };
    createUser: () => void;
}

export {userCreateInterface};