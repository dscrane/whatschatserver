const Message = require("../models/message");

const socketConfig = (io) => {
  io.on("connection", (socket) => {
    socket.on("join", ({ room, username }) => {
      socket.join(room);
      socket.broadcast.to(room).emit("system-message", {
        author: "systemManager",
        message: `${username} has joined`,
        chatroomId: room,
      });
    });

    socket.on("leave", ({ room, username }) => {
      socket.leave(room);
      io.to(room).emit("system-message", {
        author: "systemManager",
        message: `${username} has left`,
        chatroomId: room,
      });
    });

    socket.on("message", async (message) => {
      try {
        const newMessage = new Message(message);
        const returnMessage = { _id: newMessage._id, ...message };
        io.sockets.in(message.chatroomId).emit("return-message", returnMessage);
        await newMessage.save();
      } catch (e) {
        console.log(e);
      }
    });
  });
};

module.exports = socketConfig;
