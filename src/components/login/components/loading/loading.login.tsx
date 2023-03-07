import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";

const LoadingLogin = () => {
    const statusLogin = useSelector((state: RootState) => state.auth.loginFetchStatus);

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={statusLogin === 'loading'}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default LoadingLogin;