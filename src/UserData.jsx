import React, { useState } from "react";
import "../src/App.css";
import { FakeName } from "./FakeName";
import { useSelector, useDispatch } from "react-redux";
import { addUser, DeleteSingle } from "./actions";
import ClearAllUser from "./ClearAllUser";

const UserData = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const addName = (name) => {
    dispatch(addUser(name));
  };

  const DeleteName = (key) => {
    dispatch(DeleteSingle(key));
  };

  const DeleteAllUser=()=>{
    dispatch(DeleteAllUser());
  }
  return (
    <div>
      <div className="main">
        <div className="header">
          <div className="rushabh">Add Item List</div>
          <button
            onClick={() => {
              addName(FakeName());
            }}
          >
            Add name
          </button>
        </div>
        {data.map((item, index) => {
          return (
            <div className="items" key={index}>
              <h2>{item}</h2>
              <button
                onClick={() => {
                  DeleteName(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <ClearAllUser />
    </div>
  );
};

export default UserData;
