const app = require('./server');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.get('/search', (req, res) => {
    const query = req.query.query;
    console.log(`You searched for: ${query}`);

    const results = [
        { id: 1, name: `Movie 1` },
        { id: 2, name: `Movie 2` },
        { id: 3, name: `Inception` },
        { id: 4, name: `Interstellar` },
    ];

    const filteredResults = results.filter((result) => {
        return result.name.toLowerCase().includes(query.toLowerCase());

    });

    res.json(filteredResults);
});