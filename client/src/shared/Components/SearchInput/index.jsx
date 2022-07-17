// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// const CssTextField = styled(TextField)({
//   '& label.Mui-focused': {
//     color: 'green',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: 'green',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'red',
//     },
//     '&:hover fieldset': {
//       borderColor: 'yellow',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: 'green',
//     },
//   },
// });

// const ValidationTextField = styled(TextField)({
//   '& input:valid + fieldset': {
//     borderColor: 'green',
//     borderWidth: 2,
//   },
//   '& input:invalid + fieldset': {
//     borderColor: 'red',
//     borderWidth: 2,
//   },
//   '& input:valid:focus + fieldset': {
//     borderLeftWidth: 6,
//     padding: '4px !important', // override inline-style
//   },
// });

// export default function CustomizedInputs() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         display: 'grid',
//         gridTemplateColumns: { sm: '1fr 1fr' },
//         gap: 2,
//       }}
//     >
//       <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
//       <ValidationTextField
//         label="CSS validation style"
//         required
//         variant="outlined"
//         defaultValue="Success"
//         id="validation-outlined-input"
//       />
//     </Box>
//   );
// }
import React, { useContext } from 'react';
import { Box, TextField } from '@mui/material'
import { CartContext } from '../../Context/CartContext';

function SearchInput() {
  const { setHandleFilterInstrument } = useContext(CartContext)
  return (
    <Box>
      <TextField
        sx={{ alignItems: 'center', justifyContent: 'center' }}
        onChange={(e) => setHandleFilterInstrument(e.target.value)}
        id="outlined-basic"
        label="Buscar"
        variant="outlined"
      />
    </Box>
  )
}

export default SearchInput;
