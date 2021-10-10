import io from 'socket.io-client';
import { useState, useEffect } from 'react';

export default function handle() {
	const [socketState, setSocketState] = useState(0);
    useEffect(()=> {
        fetch("/api/socketio").finally(()=>{
            const socket = io();
            socket.on('update', (time) => {
                setSocketState(time);
            });
        })
    }, [])

	return (
		<>
			<div className="text-white">
				<h2>Socketio</h2>
				<h2>Last message: {socketState}</h2>
			</div>
		</>
	);
}
