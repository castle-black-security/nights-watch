import fs from "fs";
import path from "path";

export interface Member {
	id: string;
	name: string;
	order: string;
	joined: string;
}

function readData(): Member[] {
	const fullPath = path.join(process.cwd(), "data", "data.json");
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const parsed = JSON.parse(fileContents) as Member[];
	return parsed;
}

function writeData(members: Member[]) {
	const fullPath = path.join(process.cwd(), "data", "data.json");
	const fileContents = JSON.stringify(members);
	fs.writeFileSync(fullPath, fileContents, "utf8");
}

export function getMembers(): Member[] {
	const members = readData();
	return members;
}

export function getMember(id: string): Member {
	const members = readData();

	for (const member of members) {
		if (member.id === id) {
			return member;
		}
	}

	console.log("throw");
	throw new Error("Member not found");
}

export function addMember(newMember: Member) {
	const members = readData();

	for (const member of members) {
		if (member.id === newMember.id) {
			throw new Error("Duplicate member found");
		}
	}

	members.push(newMember);
	writeData(members);
}

export function removeMember(id: string) {
	const members = readData();

	for (const [index, member] of Object.entries(members)) {
		if (member.id === id) {
			members.splice(Number.parseInt(index), 1);
			writeData(members);
			return;
		}
	}

	throw new Error("Member not found");
}
