import React from "react";
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.authPage.isAuth,
});


export let withAuthComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) {
                return <Redirect to={"/login"}/>
            };
            return <Component {...this.props}/>
        };
    };

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
};