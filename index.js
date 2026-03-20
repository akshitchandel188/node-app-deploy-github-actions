import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {
    return res.json({
  msg: "Hello World",
  version: "v3 🚀",
  time: new Date()
});
})
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
