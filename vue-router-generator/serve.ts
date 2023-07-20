import chokidar from 'chokidar';
import config from './config.json';
import { writeRoutesFile } from './route-generator';

const pagesDir = config.pagesDir;
const ignorePattern = config.ignorePattern;

const autoRouteWatcher = chokidar.watch(
  pagesDir,
  { ignored: ignorePattern } // ignore dotfiles
);

writeRoutesFile(config);

autoRouteWatcher
  .on('add', () => writeRoutesFile(config))
  .on('unlink', () => writeRoutesFile(config));

console.log('watching');
