import { Server } from "socket.io";
import mongoose from "mongoose";
import connect from "../../../lib/db";
import { UserSchema } from "./user";

export const Module = (io: Server) => {
  io.on("connection", (socket) => {
    socket.on("navbar", async (data: { token: string }) => {
      const r = await navAuth(data.token);
      console.log(r);
      socket.emit("navbar", r);
    });
  });
};

const User = mongoose.models.user || mongoose.model("user", UserSchema);

async function navAuth(
  token: string
): Promise<{
  loggedIn: boolean;
  username?: string;
  id?: number;
  dash?: boolean;
}> {
  if (!token) return { loggedIn: false };
  await connect();
  const user = await User.findOne({ "activity.token": token });
  if (!user) return { loggedIn: false };
  return {
    loggedIn: true,
    username: user.account.username,
    id: user.id,
    dash: user.activity.rank.includes(0),
  };
}
