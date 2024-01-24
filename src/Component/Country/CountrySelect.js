// import React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import countries from '../../Utils/Countries .json'; 

// export default function CountrySelect() {
//   return (
//     <Autocomplete
//       id="country-select-demo"
//       sx={{ width: 200 }}
//       options={countries}
//       autoHighlight
//       getOptionLabel={(option) => option.phone}
//       renderOption={(props, option) => (
//         <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
//           {option.label} ({option.code}) +{option.phone}
//         </Box>
//       )}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="Choose a country"
//           inputProps={{
//             ...params.inputProps,
//             autoComplete: 'new-password',
//           }}
//         />
//       )}
//     />
//   );
// }
