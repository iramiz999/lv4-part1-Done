import { Box, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography'

const NotFound = () => {
    const theme = useTheme()
    return (
        <Box>
            <Typography color={theme.palette.error.main} variant="h4">
Not Found Requested Page
            </Typography>
        </Box>
    );
}

export default NotFound;
