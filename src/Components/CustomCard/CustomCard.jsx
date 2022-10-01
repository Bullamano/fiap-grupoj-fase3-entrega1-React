import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//TODO complementar CustomCard com as outras possíveis propriedades

/**
 * Cards com as informações de cada procedimento
 * @param {String} title Título do procedimento
 * @param {String} steps Passo-a-passo de um procedimento
 * @returns Card contendo as informações fornecidas do procedimento
 */
const CustomCard = ({ title, steps }) => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Title
                        </Typography>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Steps
                        </Typography>
                        <Typography variant="body2">
                            {steps}
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                </React.Fragment>
            </Card>
        </Box>
    );
};

export default CustomCard;