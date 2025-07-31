/**  配置文件读到的数据  */
export type ConfigOfFile = {
  /**  相对配置文件的目录  */
  base?: string;
  /**  监听的文件夹  */
  watch: string[];
  /**  跳过的文件  */
  skip?: string[];
  /**  code 执行的相对目录  */
  cwd?: string;
  /**  执行的命令  */
  code?: string;
  /**  启动的参数  */
  args?: string[];
  /**  执行对应目录中的钩子  */
  beforeRestart?: {
    [x: string]: string;
  };
};
