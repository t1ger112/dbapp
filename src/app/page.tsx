"use client";

import Image from "next/image";
import { createUser, getUsers } from "../../actions/backend";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			
			<h1 className="text-4xl font-bold text-center">DB test App</h1>
			<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" 
				onClick={ async () => {
					const res = await createUser("John Doe" + Math.floor(Math.random() * 10000));
				}}
			>
				add user
			</button>
			
			<button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
				onClick={ async () => {
					const res = await getUsers();
					console.log(res);
				}}
			>
				get users
			</button>
		</div>
	);
}
