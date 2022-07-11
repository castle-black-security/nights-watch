import { Member } from "./data";

export function checkError(error: any, message: string): boolean {
	if (!(error instanceof Error)) {
		return false;
	}

	return error.message === message;
}

export const membersFetcher = async (url: string): Promise<Member[]> => {
	const response = await fetch(url);
	const string = await response.text();
	const members = JSON.parse(string) as Member[];
	return members;
};
