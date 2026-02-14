"use server";

import { getDb } from "@/db";
import { usersTable } from "@/db/schema";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const { env } = await getCloudflareContext({ async: true });
const db = getDb(env);

// actions 

export async function createUser(
    name: string
) {
    try {
        await db.insert(usersTable).values({ 
            name: name 
        });
    } catch (error) {
        console.error("Error creating user");
        throw error;
    }
}

export async function getUsers() {
    try {
        const users = await db.select().from(usersTable);
        return users;
    } catch (error) {
        console.error("Error fetching users");
        throw error;
    }
}