const express=require("express");
const app=express();
const aiRoutes=require("./routes/ai.routes");
const cors=require("cors");
const healthRoute = require('./routes/health.route')

app.use(cors({
    origin:"https://ai-code-reviewer-beryl-nine.vercel.app"
}))

app.use(express.json());
app.use("/ai",aiRoutes);
app.use('/health',healthRoute)


module.exports=app