import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {
    throw new Error("FORCE ERROR TEST 🚀");
});
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
