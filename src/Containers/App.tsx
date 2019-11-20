import { connect } from "react-redux";
import { showUsers } from "../actions";
import CongressData from "./CongressData";

const mapStateToProps = (state: any) => {
  console.log("state", state);
  return {
    users: state.user.list
  };
};

const bindActionsToDispatch = (dispatch: any) => ({
  fetchCongressRequest: () => dispatch(showUsers())
});

const AppContainer = connect(
  mapStateToProps,
  bindActionsToDispatch
)(CongressData);

export default AppContainer;
