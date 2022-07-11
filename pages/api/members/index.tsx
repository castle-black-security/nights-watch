import type { NextApiRequest, NextApiResponse } from "next";

import { getMembers } from "../../../lib/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method != "GET") {
			return res.status(405).end();
		}

		const members = getMembers();

		return res.status(200).json(members);
	} catch (error) {
		return res.status(400).end();
	}
}
