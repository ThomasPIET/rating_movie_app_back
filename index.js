const app = require('express')();
const axios = require('axios');
const PORT = 3000;
require('dotenv').config();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/search', async (req, res) => {
    const query = req.query.query;
    console.log(`You searched for: ${query}`);

    try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: process.env.TMDB_API_KEY,
                query: query,
                language: 'fr-FR',
                page: 1,
                sort_by: 'popularity.desc'
            }
        });

        const results = response.data.results;

        if (results.length === 0) {
            return res.status(404).json({message: 'Nothing found.'});
        }

        return res.json(results);
    } catch (error) {
        console.error('Error while fetching data from TMDb:', error);
        if (!res.headersSent) {
            return res.status(500).json({error: 'Error while fetching data from TMDb'});
        }
    }
});

app.get('/popular', async (req, res) => {
    console.log('You requested popular movies.');
    try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                api_key: process.env.TMDB_API_KEY,
                language: 'fr-FR',
                page: 1,

            }
        });

        const results = response.data.results;

        return res.json(results);
    } catch (error) {
        console.error('Error while fetching data from TMDb:', error);
        if (!res.headersSent) {
            return res.status(500).json({error: 'Error while fetching data from TMDb'});
        }
    }
});
