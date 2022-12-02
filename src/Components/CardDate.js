import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
        if (focused) {
            return 'e.g., 07/2024';
        }

        return 'Enter in mm/yyyy format';
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
}

export default function CardDate() {
    return (
        <Box component="form" noValidate autoComplete="off">
            <FormControl sx={{ width: '95%' }}>
                <OutlinedInput placeholder="MM/YYYY" />
                <MyFormHelperText />
            </FormControl>
        </Box>
    );
}