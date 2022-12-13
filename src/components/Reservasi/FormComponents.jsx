import React from "react";

export const FormComponent = (props) => {
  return (
    <>
      <div className={`relative ${props.classPlus}`}>
        <input
          required={props.mustFilled}
          type={props.type}
          name={props.name}
          list={props.list}
          id={props.name}
          placeholder={props.placeholder}
          onChange={(e) => props.handleOnChange(e)}
          className="transition-all  bg-cultured-500 rounded-xl w-full peer focus:ring-rishie-800 focus:border-rishie-800 checked:text-rishie-400"
        />
        <label
          htmlFor={props.name}
          className="absolute top-50 left-3 -translate-y-1/2 px-1 peer-focus:text-rishie-400 transition-all duration-150 text-xs text-rishie-50 font-semibold bg-cultured-500"
        >
          {props.nameLabel}
          {props.mustFilled === true ? <span className="text-red-600 text-base">*</span> : null}
        </label>
      </div>
    </>
  );
};
