import { FormEvent } from "react";
import useSWR, { useSWRConfig } from "swr";
import { v4 as uuid } from "uuid";

import Input from "../components/Input";
import Layout from "../components/Layout";
import { getMembers, Member } from "../lib/data";
import { membersFetcher } from "../lib/utils";

interface NewMemberForm extends HTMLFormElement {
	memberName: HTMLInputElement;
	order: HTMLInputElement;
	joined: HTMLInputElement;
}

const HomePage = ({ members }: { members: Member[] }) => {
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		const target = event.target as NewMemberForm;
		const newMember: Member = {
			id: uuid(),
			name: target.memberName.value,
			order: target.order.value,
			joined: target.joined.value
		};

		target.reset();
	};

	return (
		<Layout title="Member List">
			<h1>Night's Watch Member List:</h1>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Order</th>
						<th>Joined</th>
					</tr>
				</thead>
				<tbody>
					{members.map((member: Member) => (
						<tr key={member.id}>
							<td>{member.name}</td>
							<td>{member.order}</td>
							<td>{member.joined}</td>
							<td>
								<button onClick={() => {}}>Remove</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<hr />

			<form onSubmit={handleSubmit}>
				<Input label="Name" name="memberName" />
				<Input label="Order" name="order" />
				<Input label="Joined" name="joined" />
				<button type="submit">Create</button>
			</form>
		</Layout>
	);
};

export async function getServerSideProps() {
	const members = getMembers();
	return {
		props: {
			members: members
		}
	};
}

export default HomePage;
