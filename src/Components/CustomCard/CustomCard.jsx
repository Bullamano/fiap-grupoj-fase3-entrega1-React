import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './CustomCard.css';

//TODO complementar CustomCard com as outras possíveis propriedades

/**
 * Cards com as informações de cada procedimento
 * @param {String} title Título do procedimento
 * @param {String} imageUrl URL da imagem a ser mostrada no procedimento
 * @returns Card contendo as informações fornecidas do procedimento
 */
const CustomCard = ({ title, imageUrl }) => {

    if (title.length > 50) {
        title = title.substring(0, 50) + '...';
    }

    return (
        <Box className='Outer-box'>
            <Card className='Custom-card'>
                <React.Fragment>
                    <CardContent>
                        <div className='Card-container'>
                            <img className='Card-image' src={imageUrl} alt={'Imagem de: ' + title} />
                            <Box className='Title-box'>
                                <Typography className='Title-text' variant="h5" component="div">
                                    {title}
                                </Typography>
                            </Box>
                        </div>
                    </CardContent>
                </React.Fragment>
            </Card>
        </Box>
    );
};

export default CustomCard;