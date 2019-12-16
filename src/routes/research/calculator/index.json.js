import researches from './_researches.js';

const contents = JSON.stringify(researches.map(research => {
	return {
		id: research.ID,
		tree: research.tree,
		research: research.research,
		level: research.level,
		seconds: research.seconds,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
