const commanders = [
		{
			title: "Andrea",
			slug: "andrea",
			acquisition: "pay",
			type: "Defensive",
			class: "Infantry",
			economicBonus: ["None"],
			militaryBonus: ["Infantry Attack", "Infantry Health", "Infantry Defense"],
			html: `<p>This is Andrea, isn't she cool?</p>`
		},
		{
			title: "Arslan",
			slug: "arslan",
			acquisition: "free",
			type: "Single Target Attack",
			class: "Spearmen",
			economicBonus: ["Wood Production"],
			militaryBonus: ["Spearmen Health", "Spearmen Attack"],
			html: ``
		},
		{
			title: "Arya Stark",
			slug: "arya-stark",
			acquisition: "free",
			type: "Single Target Attack",
			class: "Infantry",
			economicBonus: "Wood production",
			militaryBonus: "Total Attack & Infantry Defense",
			html: ``
		},
		{
			title: "Barrett",
			slug: "barrett",
			acquisition: "free",
			type: "Area Attack",
			class: "Infantry",
			economicBonus: "Stone Production",
			militaryBonus: "Infantry Health & Defense",
			html: ``
		},
		{
			title: "Cersei Lannister",
			slug: "cersei-lannister",
			acquisition: "pay",
			type: "Area Attack",
			class: "Bowmen",
			economicBonus: "None",
			militaryBonus: "Total Attack, Health & Defense",
			html: ``
		},
		{
			title: "Chris",
			slug: "chris",
			acquisition: "free",
			type: "Defense & Disable",
			class: "Infantry",
			economicBonus: "Construction Speed",
			militaryBonus: "Infantry Attack & Defense",
			html: ``
		},
		{
			title: "Daenerys Targaryen",
			slug: "daenerys-targaryen",
			acquisition: "pay",
			type: "Area Attack",
			class: "Spearmen",
			economicBonus: "None",
			militaryBonus: "Total Attack, Health & Defense",
			html: ``
		},
		{
			title: "Feis",
			slug: "feis",
			acquisition: "free",
			type: "Attack & Defense",
			class: "Infantry",
			economicBonus: "Gold Production",
			militaryBonus: "Infantry Attack & Defense",
			html: ``
		},
		{
			title: "Gorrell",
			slug: "gorrell",
			acquisition: "free",
			type: "Defense & Disable",
			class: "Spearmen",
			economicBonus: "Iron production",
			militaryBonus: "Spearmen Attack & Defense",
			html: ``
		},
		{
			title: "Haley",
			slug: "haley",
			acquisition: "free",
			type: "Attack & Defense",
			class: "Infantry",
			economicBonus: "Increase Motivation limit",
			militaryBonus: "Wall Defense & Infantry Attack",
			html: ``
		},
		{
			title: "Jaime Lannister",
			slug: "jaime-lannister",
			acquisition: "pay",
			type: "Area Attack",
			class: "Spearmen",
			economicBonus: "None",
			militaryBonus: "Total Attack, Spearmen Health and Defense",
			html: ``
		},
		{
			title: "Jeane",
			slug: "jeane",
			acquisition: "free",
			type: "Support & Healing",
			class: "Cavalry",
			economicBonus: "Construction Speed & Grain Production",
			militaryBonus: "Cavalry Defense",
			html: ``
		},
		{
			title: "Jon Snow",
			slug: "jon-snow",
			acquisition: "pay",
			type: "Attack & Defense",
			class: "Infantry",
			economicBonus: "None",
			militaryBonus: "Total Defense, Attack & Health",
			html: ``
		},
		{
			title: "Kevin",
			slug: "kevin",
			acquisition: "pay",
			type: "Defense & Disable",
			class: "Cavalry",
			economicBonus: "Training speed",
			militaryBonus: "Total Health & Total Attack",
			html: ``
		},
		{
			title: "Kravas",
			slug: "kravas",
			acquisition: "free",
			type: "Attack & CC",
			class: "Bowmen",
			economicBonus: "Fortification construction",
			militaryBonus: "Fortification defense & Bowmen attack",
			html: ``
		},
		{
			title: "Laena Waters",
			slug: "laena-waters",
			acquisition: "pay",
			type: "Attack & Defense",
			class: "Cavalry",
			economicBonus: "None",
			militaryBonus: "Cavalry Attack, Health & Defense",
			html: ``
		},
		{
			title: "Leila Mormont",
			slug: "leila-mormont",
			acquisition: "pay",
			type: "Attack & Defense",
			class: "Cavalry",
			economicBonus: "None",
			militaryBonus: "Cavalry Attack, Health & Defense",
			html: ``
		},
		{
			title: "Margaery Tyrell",
			slug: "margaery-tyrell",
			acquisition: "pay",
			type: "Support & Healing",
			class: "Spearmen",
			economicBonus: "Research Speed",
			militaryBonus: "Total Attack & Health",
			html: ``
		},
		{
			title: "Melisandre",
			slug: "melisandre",
			acquisition: "pay",
			type: "Area Attack",
			class: "Bowmen",
			economicBonus: "None",
			militaryBonus: "Bowmen Attack & Defense",
			html: ``
		},
		{
			title: "Mengo",
			slug: "mengo",
			acquisition: "free",
			type: "Attack & Defense",
			class: "Cavalry",
			economicBonus: ``,
			militaryBonus: "Wall Defense, Cavalry Attack & Defense",
			html: ``
		},
		{
			title: "Meranda",
			slug: "meranda",
			acquisition: "pay",
			type: "Area Attack",
			class: "Spearmen",
			economicBonus: "None",
			militaryBonus: "Spearmen Attack, Health and Defense",
			html: ``
		},
		{
			title: "Merrel Peake",
			slug: "merrel-peake",
			acquisition: "free",
			type: "Single Target Attack",
			class: "Cavalry",
			economicBonus: "Iron production",
			militaryBonus: "Cavalry Health & Attack",
			html: ``
		},
		{
			title: "Petyr Baelish",
			slug: "petyr-baelish",
			acquisition: "pay",
			type: "Area Attack",
			class: "Cavalry",
			economicBonus: "None",
			militaryBonus: "Total Attack, Health & Defense",
			html: ``
		},
		{
			title: "Raymond",
			slug: "raymond",
			acquisition: "pay",
			type: "Area Attack",
			class: "Cavalry",
			economicBonus: "Research Speed, Training Speed & Gold Production",
			militaryBonus: "None",
			html: ``
		},
		{
			title: "Robb Stark",
			slug: "robb-stark",
			acquisition: "free",
			type: "Defense & Disable",
			class: "Cavalry",
			economicBonus: "Gold Production",
			militaryBonus: "Cavalry defense & health",
			html: ``
		},
		{
			title: "Robert",
			slug: "robert",
			acquisition: "free",
			type: "Area Attack (Line)",
			class: "Bowmen",
			economicBonus: "Iron Production",
			militaryBonus: "Fortification Durability & Bowmen Defense",
			html: ``
		},
		{
			title: "Russell",
			slug: "russell",
			acquisition: "free",
			type: "Attack & Defense",
			class: "Cavalry",
			economicBonus: "Stone Production, Construction Speed",
			militaryBonus: "Cavalry Attack",
			html: ``
		},
		{
			title: "Sabrina",
			slug: "sabrina",
			acquisition: "pay",
			type: "Single Target Attack",
			class: "Bowmen",
			economicBonus: "Construction, Research & Training Speed",
			militaryBonus: "None",
			html: ``
		},
		{
			title: "Sandor Clegane",
			slug: "sandor-clegane",
			acquisition: "pay",
			type: "Area Attack",
			class: "Infantry",
			economicBonus: "Training Speed",
			militaryBonus: "Total Attack & Health",
			html: ``
		},
		{
			title: "Sansa",
			slug: "sansa",
			acquisition: "free",
			type: "Support & Healing",
			class: "Bowmen",
			economicBonus: "Fortification Durability",
			militaryBonus: "Bowmen Attack & Health",
			html: ``
		},
		{
			title: "Seg",
			slug: "seg",
			acquisition: "pay",
			type: "Defense & CC",
			class: "Infantry",
			economicBonus: "Training Speed",
			militaryBonus: "Total Attack & Defense",
			html: ``
		},
		{
			title: "Sheila",
			slug: "sheila",
			acquisition: "free",
			type: "Single Target Attack",
			class: "Bowmen",
			economicBonus: "Grain production",
			militaryBonus: "Bowmen Attack & Fortifications Attack",
			html: ``
		},
		{
			title: "Simon Blackmyre",
			slug: "simon-blackmyre",
			acquisition: "pay",
			type: "Support & Healing",
			class: "Bowmen",
			economicBonus: "Research Speed",
			militaryBonus: "Total Attack & Defense",
			html: ``
		},
		{
			title: "Sinara",
			slug: "sinara",
			acquisition: "pay",
			type: "Single Target Attack",
			class: "Infantry",
			economicBonus: "None",
			militaryBonus: "Total Attack, Infantry Health & Defense",
			html: ``
		},
		{
			title: "Soren",
			slug: "soren",
			acquisition: "free",
			type: "Area Attack (Line)",
			class: "Bowmen",
			economicBonus: "Research Speed, Gold production & Fortification Construction",
			militaryBonus: "None",
			html: ``
		},
		{
			title: "Theon Greyjoy",
			slug: "theon-greyjoy",
			acquisition: "pay",
			type: "Single Target Attack",
			class: "Bowmen",
			economicBonus: "None",
			militaryBonus: "Total Attack, Bowmen Health & Defense",
			html: ``
		},
		{
			title: "Tyrion Lannister",
			slug: "tyrion-lannister",
			acquisition: "free",
			type: "Support",
			class: "Infantry",
			economicBonus: "Research Speed",
			militaryBonus: "Total Attack & Defense",
			html: ``
		},
		{
			title: "Varys",
			slug: "varys",
			acquisition: "free",
			type: "Area Attack (Line)",
			class: "Spearmen",
			economicBonus: "Research speed",
			militaryBonus: "Spearmen Attack & Fortifications Defense",
			html: ``
		}
];

commanders.forEach(commander => {
	commander.html = commander.html.replace(/^\t{3}/gm, '');
});

export default commanders;
