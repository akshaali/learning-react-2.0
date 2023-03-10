import React from "react";
import Popup from "reactjs-popup";
import "../App.css";

const PopUp = ({ handleConfirmation }) => (
  <Popup trigger={<button className="button"> Delete </button>} modal nested>
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Delete Student</div>
        <div className="content">
          Are you sure you want delete this student Detail?
        </div>
        <div className="actions">
          <Popup
            trigger={
              <button
                className="button"
                onClick={() => {
                  console.log("ONclickedddd");
                  handleConfirmation();
                }}
              >
                Confirm
              </button>
            }
            position="top center"
            nested
          ></Popup>
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export default PopUp;
