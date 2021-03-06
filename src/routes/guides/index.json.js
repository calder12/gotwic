import fm from 'front-matter';
import glob from 'glob';
import {fs} from 'mz';
import path from 'path';

export async function get(req, res) {
  // List the Markdown files and return their filenames
  const guides = await new Promise((resolve, reject) =>
      glob('static/_guides/*.md', (err, files) => {
      if (err) return reject(err);
      return resolve(files);
    }),
  );
console.log(guides)
  // Read the files and parse the metadata + content
  const guidesFrontMatter = await Promise.all(
    guides.map(async guide => {
      const content = (await fs.readFile(guide)).toString();
      // Add the slug (based on the filename) to the metadata, so we can create links to this blog guide
      return {...fm(content).attributes, slug: path.parse(guide).name};
    }),
  );

  // Sort by reverse date, because it's a blog
  guidesFrontMatter.sort((a, b) => (a.title > b.title ? 1 : -1));

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  // Send the list of blog guides to our Svelte component
  res.end(JSON.stringify(guidesFrontMatter));
}