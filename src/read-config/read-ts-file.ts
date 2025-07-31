import { _p } from 'a-node-tools';
import { yellowPen } from 'color-pen';
import { readFileSync } from 'node:fs';
import { configFileStartName } from 'src/aided/config-file-start-name';
import { dog } from 'src/aided/dog';
import { hotData } from 'src/data-store';
import { getTextOfJsFile } from './get-text-of-fs-file';

/**  读取 ts 配置文件  */
export async function readTsFile() {
  try {
    const ts = (await import('typescript')).default;
    const sourceCode = readFileSync(hotData.configFileName).toString();

    const transpiledCode = ts.transpileModule(sourceCode, {
      compilerOptions: {
        target: ts.ScriptTarget.ES2015,
        module: ts.ModuleKind.ES2022,
      },
    });
    const resultText = transpiledCode.outputText;
    dog('读取的 ts 文本资源', resultText);
    if (resultText) return getTextOfJsFile(resultText);
  } catch (error) {
    dog.error('读取 ts 配置文件出现故障', error);
    _p(
      yellowPen`  从 '${configFileStartName}ts' 文件读取配置失败 
       请确保您已安装 typescript 
       
       `,
    );
  }
  return null;
}
