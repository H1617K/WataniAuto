import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "../BtnLogin/BtnLogin.css"

export const BtnLogin = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "active",
  });

  return (
    <button
      className={`btn-login ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="overlap-group-2">
        {["active-on-hover", "active"].includes(state.property1) && <div className="text-wrapper-4">Login</div>}

        {["in-active", "inactive-on-hover"].includes(state.property1) && <>Login</>}
      </div>
    </button>
  );
};

function reducer(state, action) {
  if (state.property1 === "active") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "active-on-hover",
        };
    }
  }

  if (state.property1 === "active-on-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "active",
        };
    }
  }

  if (state.property1 === "in-active") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "inactive-on-hover",
        };
    }
  }

  if (state.property1 === "inactive-on-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "in-active",
        };
    }
  }

  return state;
}

BtnLogin.propTypes = {
  property1: PropTypes.oneOf(["active-on-hover", "inactive-on-hover", "in-active", "active"]),
};

export default {
  title: "Components/BtnLogin",
  component: BtnLogin,
  argTypes: {
    property1: {
      options: ["active-on-hover", "inactive-on-hover", "in-active", "active"],
      control: { type: "select" },
    },
  },
};
