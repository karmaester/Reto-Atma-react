import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Collapse, IconButton } from "@material-ui/core";

export const Title = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className="title-container">
          <h1 className="title">
            Baja de peso <br /> y transforma tu
            <span className="title-text"> vida.</span>
          </h1>
          <Scroll to="place-to-visit">
            <IconButton>
              <ExpandMoreIcon className="go-down" />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};
