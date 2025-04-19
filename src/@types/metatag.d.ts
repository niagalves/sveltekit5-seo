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
		jsonLd?: {
			image?: Omit<OgProps, 'secureUrl' | 'type'>;
			author?: {
				name?: string;
			};
			publisher?: {
				name?: string;
				logo?: Omit<OgProps, 'secureUrl' | 'type'>;
			};
		};
		og: {
			fbAppId?: string;
			siteName: string;
			type: string;
			image: {
				alt?: string;
			} & OgProps;
			video?: OgProps;
			audio?: Omit<OgProps, 'width' | 'height'>;
		};
		x?: {
			siteId?: string;
			creator?: string;
			creatorId?: string;
			card?: string;
			site?: string;
			image?: {
				url?: string;
				alt?: string;
			};
			player?: {
				url?: string;
				width?: string;
				height?: string;
				stream?: string;
			};
		};
	};
};
