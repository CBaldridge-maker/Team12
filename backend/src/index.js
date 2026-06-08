const { app } = require('@azure/functions');

// 'getStaticData' is the name of your function endpoint
app.http('getStaticData', {
    methods: ['GET'], // We only need GET if we are just fetching data
    authLevel: 'anonymous', // Allows anyone to access the URL without a key
    handler: async (request, context) => {
        context.log(`API hit: "${request.url}"`);
        
        // Define your static JSON response
        const myData = {
            success: true,
            message: "Hello from your serverless backend!",
            items: [
                { id: 1, name: "Chromebook" },
                { id: 2, name: "GitHub Actions" },
                { id: 3, name: "Azure Functions" }
            ]
        };
        
        // Return the JSON
        // Using 'jsonBody' automatically formats it and sets the correct headers
        return { 
            status: 200,
            jsonBody: myData 
        };
    }
});
