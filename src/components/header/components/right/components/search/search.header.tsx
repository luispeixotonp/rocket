import React from "react";

import { Magnify } from 'mdi-material-ui'
import { IconButton } from "@mui/material";

const SearchHeader = () => {
  return (
    <IconButton color='inherit' aria-haspopup='true' aria-controls='customized-menu'>
      <Magnify />
    </IconButton>
  )
}

export default SearchHeader;

