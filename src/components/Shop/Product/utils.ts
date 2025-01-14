import Pocketbase from "@/libs/pocketbase";

export function parseFile(collectionID: string, recordID: string, fileName: string): string {
	return `${Pocketbase.baseURL}/api/files/${collectionID}/${recordID}/${fileName}`;
}