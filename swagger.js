const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Blog API',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://3.12.162.138', // Cambia la URL base aquí
            },
        ],
    },
    apis: ['./routes/suaggerRoutes.js']
};


const swaggerSpec = swaggerJSDoc(options);
const swaggerDocs = (app, port) => {
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api/v1/docs.js', (req, res) => {
        res.setHeader('Content-type', 'application/json');
        res.send(swaggerSpec);
    });
    console.log(`Docs are available at http://localhost:${port}/api/v1/docs`);
};

module.exports = swaggerDocs;
