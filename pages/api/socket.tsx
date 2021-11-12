import { Server } from "socket.io";
import { readdir } from "fs";

export default async function handle (
	_req: unknown,
	res: {
		socket: {
			server: {
				io: unknown;
			};
		};
		status: (arg0: number) => { json: (arg0: unknown) => void };
		end: () => void;
	},
) {
	 //This causes a memory leak
	if (res.socket.server?.io == undefined || process.env.NODE_ENV == "development") {
		// @ts-ignore typings mayhem
		const io = new Server(res.socket.server);

		await readdir("./pages/api/socketModules", async (err, files) => {
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
