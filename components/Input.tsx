import React, { ReactNode } from "react";

const Input = ({ label, name }: { label: string; name: string }) => (
	<>
		<label htmlFor={name}>{`${label}:`}</label>
		<br />
		<input id={name} name={name} />
		<br />
	</>
);

export default Input;
