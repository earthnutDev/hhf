/** 热重启配置 */
export interface DefineOptions {
  /**  监听文件的相对目录  */
  base: string;
  /**  执行的相对位置  */
  cwd: string;
  /** 热重启监听文件 */
  watch: string[];
  /** 跳过不监听的文件夹 */
  skip: string[];
  /**  执行的 code 码，要被热启动的原命令 */
  code: string | null | undefined;
  /** 配置热更新启动参数 */
  args: string[];
  /** 移除旧的打包文件 */
  remove: boolean;
  /** 热启动前需要执行的操作  */
  beforeRestart: { [x: string]: string };
}
