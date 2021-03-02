import React from "react";
import Homefront, {
	HomefrontContainer,
	HomefrontImage,
	HomefrontPane,
	HomefrontSubTitle,
	HomefrontTitle,
} from "./components/homefront";
import homefrontData from "./fixtures/jumbo.json";

export default function App() {
	return (
		<HomefrontContainer>
			{homefrontData.map((chunks) => {
				return (
					<Homefront key={chunks.id} direction={chunks.direction}>
						<HomefrontPane>
							<HomefrontTitle>{chunks.title}</HomefrontTitle>
							<HomefrontSubTitle>{chunks.subTitle}</HomefrontSubTitle>
						</HomefrontPane>
						<HomefrontPane>
							<HomefrontImage src={chunks.image}></HomefrontImage>
						</HomefrontPane>
					</Homefront>
				);
			})}
		</HomefrontContainer>
	);
}
