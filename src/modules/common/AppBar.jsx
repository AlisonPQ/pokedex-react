import { AppBar, Toolbar, Typography } from '@mui/material';

const PokemonAppBar = ({label}) => {
    return (
        <div>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        {label}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default PokemonAppBar;
