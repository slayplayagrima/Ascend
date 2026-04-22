import http from "http";
import app from "./app.js";
import { Server } from "socket.io";

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// 🔹 Connection handler
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const stocks = ["RELIANCE", "TCS", "INFY", "HDFCBANK", "ICICIBANK"];

// base prices (so they don't jump randomly)
let marketState = {
  RELIANCE: 2450,
  TCS: 3900,
  INFY: 1500,
  HDFCBANK: 1650,
  ICICIBANK: 1080,
};

setInterval(() => {
  const updates = stocks.map((symbol) => {
    // simulate small price movement
    const change = (Math.random() - 0.5) * 10;

    marketState[symbol] += change;

    return {
      symbol,
      price: Number(marketState[symbol].toFixed(2)),
    };
  });

  io.emit("market:update", updates);

}, 2000);

// 🔹 TEST EVENT (VERY IMPORTANT)
setInterval(() => {
  io.emit("test", {
    msg: "socket working",
    time: new Date().toLocaleTimeString(),
  });
}, 3000);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});