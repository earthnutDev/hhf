import { _p, fileExist } from 'a-node-tools';
import { ArgsMapItemType, question } from 'a-command';
import { noExtension } from './no-extension';
import { createConfigFile } from './create-config-file';
import { dog } from 'src/aided/dog';
import { configFileStartName } from 'src/aided/config-file-start-name';

/**  初始化配置文件 */
export async function initConfig(data: ArgsMapItemType<'js' | 'json' | 'ts'>) {
  // 初始化 js 配置文件
  return (
    (data.js && (await testFileExist('js'), 1)) ||
    // 初始化 json 配置文件
    (data.json && (await testFileExist(), 1)) ||
    // 初始化 ts 配置文件
    (data.ts && (await testFileExist('ts'), 1)) ||
    // 未传传输，自动检测并配置文件
    (await noExtension())
  );
}

/** 测试文件是否存在  */
async function testFileExist(extension: string = 'json') {
  const fileName = `${configFileStartName}${extension}`,
    fileInfo = fileExist(fileName);
  const fileIsExist = fileInfo && fileInfo?.isFile();
  dog('文件是否存在', fileExist);

  // 判断是否存在，不存在则直接创建
  if (!fileIsExist) createConfigFile(extension);
  else {
    ///存在则询问是否覆盖
    const temporaryArr = ['覆盖', '跳过创建'];
    const result = await question({
      text: '文件已经存在，是否覆盖',
      tip: temporaryArr,
      resultText: '这一行不该有呀',
      private: true,
    });
    if (result == temporaryArr[0]) createConfigFile(extension);
    else {
      _p('好的，即将为您退出');
      return setTimeout(() => process.exit(), 800);
    }
  }
}
