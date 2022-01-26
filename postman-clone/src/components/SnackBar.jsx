
import { Snackbar } from "@mui/material"

const SnackBar = ({ errorMsg, error, setError }) => {

    const handleClose = () => {
        setError(false);
    }

    return (
        <Snackbar
            open={error}
            autoHideDuration={3000}
            onClose={handleClose}
            message={errorMsg}
        />
    )
}

export default SnackBar;