import commanders from './_commanders.js';

const contents = JSON.stringify(commanders.map(commander => {
	return {
		title: commander.title,
		slug: commander.slug,
		class: commander.class,
		type: commander.type,
		acquisition: commander.acquisition,
		militaryBonus: commander.militaryBonus
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}