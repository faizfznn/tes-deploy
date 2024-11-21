const http = require('http');
const url = require('url');

// Data ruangan yang tersedia
const rooms = [
    { name: 'GKM 4.1', availableTimes: ['12:00 - 16:00'], date: '2024-01-12' },
    { name: 'Gedung F Ruang 3', availableTimes: ['14:00 - 18:00'], date: '2024-01-12' },
    // Tambahkan ruangan lain jika diperlukan
];

// Fungsi untuk memeriksa ketersediaan ruangan
function checkAvailability(requestDate, requestTime) {
    return rooms.filter(room => {
        return room.date === requestDate && room.availableTimes.includes(requestTime);
    });
}

// Membuat server
const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;

    // Memeriksa apakah ada parameter yang diperlukan
    if (req.method === 'GET' && query.date && query.time) {
        const availableRooms = checkAvailability(query.date, query.time);

        if (availableRooms.length > 0) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(availableRooms));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Tidak ada ruangan yang tersedia pada waktu tersebut.' }));
        }
    } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Bad Request: Silakan berikan parameter tanggal dan waktu.' }));
    }
});

// Menjalankan server pada port 8000
const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});