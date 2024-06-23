import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(3000, () => console.log('Server running on http://localhost:3000'));

export default app;