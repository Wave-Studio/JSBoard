import { Server } from 'socket.io';
import { readdir } from 'fs';

export default async function handle(req: any, res: any) {
	if (res.socket.server?.io == undefined) {
		const io = new Server(res.socket.server);

		readdir('./pages/api/socketModules', async (err, files) => {
            
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
