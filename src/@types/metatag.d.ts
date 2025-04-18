type OgProps = {
	url?: string;
	secureUrl?: string;
	type?: string;
	width?: string;
	height?: string;
};

type Metatag = {
	metatag: {
		title: string;
		description: string;
		keywords?: string[];
		author?: string;
		follow?: boolean;
		language?: string;
		og: {
			fbAppId?: string;
			siteName: string;
			type: string;
			image: {
				alt?: string;
			} & OgProps;
			video: OgProps;
			audio: Omit<OgProps, 'width' | 'height'>;
		};
	};
};
