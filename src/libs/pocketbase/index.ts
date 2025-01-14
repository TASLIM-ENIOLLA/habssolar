import PocketBase from "pocketbase";

const pocketbase = new PocketBase(process.env.backendURL);

pocketbase.autoCancellation(false);

export default pocketbase;
