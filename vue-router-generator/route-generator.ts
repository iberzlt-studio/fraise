import { generateRoutes } from 'vue-route-generator';
import fs from 'fs';

export function writeRoutesFile(config: Config) {
  let code = generateRoutes({
    pages: config.pagesDir,
    importPrefix: config.pagesImportPrefix,
    ...config.generatorConfig,
  });

  code = '/* eslint-disable */\n' + code;

  const generatedRoutesFile = config.outDir + '/generated-routes.ts';

  if (!fs.existsSync(generatedRoutesFile)) {
    fs.writeFileSync(generatedRoutesFile, '');
  }

  if (
    fs.existsSync(generatedRoutesFile) &&
    fs.readFileSync(generatedRoutesFile, 'utf8').trim() === code.trim()
  ) {
    return;
  }

  fs.writeFileSync(generatedRoutesFile, code);
}

interface Config {
  pagesDir: string;
  routePrefix: string;
  ignorePattern: string;
  outDir: string;
  pagesImportPrefix: string;
  generatorConfig: generalConfig;
}

interface generalConfig {
  nested: boolean;
}
