import * as util from 'util';
import * as child_process from 'child_process';
import * as fs from 'fs';

const exec = util.promisify(child_process.exec);

await exec('rm dist');

await exec('cp {schema.json,README.md,LICENSE,CHANGELOG.md} dist');

const packageJSONFile = await fs.promises.readFile('package.json');

const packageJSON = JSON.parse(await fs.promises.readFile('package.json'));
