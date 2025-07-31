import { writeJsonFile } from 'a-node-tools';
import { configFileStartName } from 'src/aided/config-file-start-name';

/** 新增配置文件  */
export function createJsonConfigFile(cwd: string) {
  writeJsonFile(configFileStartName + 'json', {
    base: '..',
    watch: ['${cwd}'],
    skip: ['dist', '.eg'],
    cwd: '.',
    code: 'node  ./index.js',
    args: ['-v'],
    beforeRestart: Object.fromEntries([[cwd, 'npm run build']]),
  });
}
