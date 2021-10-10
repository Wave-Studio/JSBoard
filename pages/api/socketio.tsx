import { Server } from "socket.io";

export default function handle(req, res) {
    if (!res.socket.server.io) {
        const io = new Server(res.socket.server);
        io.on("connection", (socket) => {
            console.log("New user joined", socket.id);
            socket.on("disconnect", () => {
                console.log("User left", socket.id)
            })
        })
        setInterval(()=>{
            io.emit("update", Date.now())
        }, 1000)
        res.socket.server.io = io
    }
    res.end();
}