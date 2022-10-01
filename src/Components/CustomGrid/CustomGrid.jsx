import React from 'react';
import Grid from '@mui/material/Grid';
import CustomCard from '../CustomCard/CustomCard';

/**
 * Grid customizada para receber componentes CustomCard
 * que preenchem a tela com os procedimentos
 * @param {object} cards Objeto contendo as propriedades:
 * - 'title' (string com o título do procedimento)
 * - 'steps' (passo-a-passo)
 * @returns Grid de CustomCard com informações de procedimentos
 */
const CustomGrid = ({ cards }) => {
    return (
        <Grid className='Custom-grid' justifyContent={'center'} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {cards.map(card =>
                <Grid classname='Custom-item' item>
                    <CustomCard title={card.title} steps={card.steps} />
                </Grid>
            )}
        </Grid>
    );
};

export default CustomGrid;