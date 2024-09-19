import Image from "next/image";
import type React from "react";

interface Props {
	className?: string;
}

export const MyInfoBlock: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<div>
				<Image
					src={
						"https://i.pinimg.com/736x/94/c3/67/94c36724d7cf4dc3abf21eebd6b92ba6.jpg"
					}
					width={150}
					height={150}
					alt="avatar"
				/>
			</div>
		</div>
	);
};
