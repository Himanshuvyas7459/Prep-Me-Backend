const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

//LOCAL ROUTES
const authRoutes = require("./routes/authRoutes.js")
const questionRoutes = require("./routes/questionRoutes.js")
const connectDB = require("./config/db.js")

connectDB()

const app = express()

// MIDDLEWARE
app.use(cors({
  origin: "https://prep-me-lilac.vercel.app",
  credentials: true
}))
app.use(express.json())


// ROUTES
app.use("/api/auth", authRoutes)
app.use("/api/questions", questionRoutes)

app.get("/", (req, res) => {
    res.send("API running")
})

const PORT = process.env.PORT || 5000


// // 4. Correct Path Resolution for Nested Folders
// // Since this file is in /server, we go UP one level to reach the root, then into /client/dist
// const buildPath = path.resolve(__dirname, '../client/dist');

// // 5. Static File Serving & SPA Routing
// if (process.env.NODE_ENV === "production") {
//     // Serve static files from the build directory
//     app.use(express.static(buildPath));

//     // Express v5 requires a named parameter for wildcards (/*splat)
//     app.get('/*splat', (req, res) => {
//         res.sendFile(path.join(buildPath, 'index.html'), (err) => {
//             if (err) {
//                 // If index.html is missing, this provides a clearer error
//                 res.status(500).send("Build file index.html not found. Ensure you ran 'npm run build' in the client folder.");
//             }
//         });
//     });
// } else {
//     app.get("/", (req, res) => {
//         res.send("API is running... (Development Mode)");
//     });
// }



app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})


//  "dev": "vite",
//     "build": "vite build",
//     "lint": "eslint .",
//     "preview": "vite preview"

//    "server": "node server/server.js",
//     "client": "cd client && npm run dev",
//     "build": "npm install && cd client && npm install --legacy-peer-deps && npm run build",
//     "dev": "concurrently \"npm run server\" \"npm run client\"",
//     "prod" : "npm run server"