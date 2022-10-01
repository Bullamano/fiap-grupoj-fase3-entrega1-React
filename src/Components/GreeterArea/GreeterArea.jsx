import React from 'react';
import Box from '@mui/material/Box';
import './GreeterArea.css';

/**
 * Área com informações sobre o site em si, sua função e funcionalidades
 * @returns Área com informações para o usuário
 */
const GreeterArea = () => {
    return (
        <Box className='Greeter-box'>
            {/* Texto de boas-vindas */}
            <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolore aliquam dolorum
                ipsum ratione? Voluptatibus corrupti ullam
                facilis veniam perferendis enim, rerum, ipsa
                expedita velit commodi eum? Doloremque eaque
                autem natus!</p>
        </Box>
    );
};

export default GreeterArea;