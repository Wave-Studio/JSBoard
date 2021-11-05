import { Server } from "socket.io";
import { readdir } from "fs";

export default function handle(
	_req: unknown,
	res: {
		socket: {
			server: {
				io: unknown;
			};
		};
		status: (arg0: number) => { json: (arg0: unknown) => void };
		end: () => void;
	}
) {
	if (res.socket.server?.io == undefined) {
		// @ts-ignore typings mayhem
		const io = new Server(res.socket.server);

		readdir("./pages/api/socketModules", async (err, files) => {
			for (const file of files) {
				if (/.*.(ts|tsx)/i.test(file)) {
					const { Module } = await import(`./socketModules/${file}`);
					Module(io);
				}
			}
		});

		res.socket.server.io = io;
	}
	res.end();
}
