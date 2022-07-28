import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({redirect,pokemonId, pokemonName, pokemonAvatarUrl}) {
    
    /*const handleClick = (pokemonId) => {        
        
    }*/
  
    return (
        <Card sx={{ maxWidth: 200, margin: 2}}>
            <CardMedia
                component="img"
                image={pokemonAvatarUrl}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pokemonName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description going to be here.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => redirect(`/pokemon/${pokemonId}`) }>Details</Button>
            </CardActions>
        </Card>
    );
}