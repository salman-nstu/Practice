const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname)); // Serve HTML, CSS, JS files

// In-memory data storage (Replace with database like SQLite or MongoDB for production)
let tasks = [];
let totalVisitors = new Set();
let taskIdCounter = 1;

// GET /api/tasks - Retrieve all posted tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks.slice().reverse()); // Return newest first
});

// POST /api/tasks - Submit a new task
app.post('/api/tasks', (req, res) => {
    const { text, name, country } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Task text is required' });
    }

    const newTask = {
        id: taskIdCounter++,
        text: text,
        city: name || 'Anonymous',
        country: country !== 'Unknown' ? country : 'Parts Unknown',
        created_at: new Date().toISOString()
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// GET /api/stats - Retrieve live statistics
app.get('/api/stats', (req, res) => {
    const sessionId = req.query.session;
    if (sessionId) {
        totalVisitors.add(sessionId);
    }

    res.json({
        currentlyProcrastinating: Math.floor(Math.random() * 50) + 10, // Simulated active user count
        totalPostponed: tasks.length,
        totalVisitors: totalVisitors.size
    });
});

// GET /api/weekly - Retrieve most neglected task (Hall of Shame)
app.get('/api/weekly', (req, res) => {
    if (tasks.length === 0) {
        return res.json({ count: 0 });
    }
    // Returns the latest task as an example highlight
    const topTask = tasks[tasks.length - 1];
    res.json({
        text: topTask.text,
        count: Math.floor(Math.random() * 20) + 5
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});