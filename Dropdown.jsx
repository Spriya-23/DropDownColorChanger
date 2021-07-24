import React, { useEffect, useRef, useState } from "react";
import classes from "./Dropdown.module.css";
const Dropdown = props => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const displayOptions = () => {
    return props.listedOptions.map(option => {
      if (option.value == props.selected.value) return null;
      return (
        <button
          key={option.value}
          onClick={() => props.onSelectOption(option)}
          className={classes.DdListItem}
          value={option.value}
        >
          {option.label}
        </button>
      );
    });
  };

  useEffect(() => {
    const onbodyclick = event => {
      if (ref.current && ref.current.contains(event.target)) return;
      else setOpen(false);
    };
    document.body.addEventListener("click", onbodyclick);

    return () => {
      document.removeEventListener("click", onbodyclick);
    };
  }, []);

  return (
    <div ref={ref} className={classes.DdWrapper}>
      <div onClick={() => setOpen(!open)} className={classes.DdHeader}>
        <div className={classes.DdHeaderTitle}>{props.selected.value}</div>
        <i className={`caret ${open ? "down" : "up"} icon`} />
      </div>
      <div className={[classes.DdList, !open && classes.Hidden].join(" ")}>
        {displayOptions()}
      </div>
    </div>
  );
};

export default Dropdown;
