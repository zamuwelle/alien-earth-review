const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDirectory, 'entry.txt');
// Let the alien's tourist verdict reveal a familiar human habit.
const entry = 'Earth: 4 stars. The locals invented an invisible network to connect everyone, then use it to send each other pictures of lunch.';

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, entry, 'utf8');
