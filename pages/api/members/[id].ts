import type { NextApiRequest, NextApiResponse } from "next";

import { getMember } from "../../../lib/data";
import { checkError } from "../../../lib/utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		if (req.method != "GET") {
			return res.status(405).end();
		}

		const id = req.query.id as string;
		const member = getMember(id);

		return res.status(200).json(member);
	} catch (error) {
		if (checkError(error, "Member not found")) {
			return res.status(404).end();
		} else {
			return res.status(400).end();
		}
	}
}
