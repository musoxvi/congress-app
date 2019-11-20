import React, { useEffect, FC } from "react";
import { connect } from "react-redux";
import DataTable from "../Components/DataTable/DataTable";

type Props = {
  fetchCongressRequest: () => {};
  users: [];
};

const CongressData: FC<any> = ({ fetchCongressRequest, users }) => {
  useEffect(() => {
    console.log("entri", fetchCongressRequest, users);
    fetchCongressRequest();
  }, []);

  return (
    <>
      <DataTable congressList={users} />
    </>
  );
};

export default CongressData;
