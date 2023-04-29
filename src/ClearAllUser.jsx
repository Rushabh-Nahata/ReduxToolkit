import React from "react";
import { useDispatch } from "react-redux";
import { DeleteAllUser } from "./actions";

const ClearAllUser = () => {
  const dispatch = useDispatch();
  const DeleteAllUsers = () => {
    dispatch(DeleteAllUser());
  };
  return (
    <div>
      <button onClick={DeleteAllUsers}>DeleteAll</button>
    </div>
  );
};

export default ClearAllUser;
