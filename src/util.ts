/** 获取时间 */
export function getTime() {
  const now = new Date();
  return [now.toLocaleTimeString(), now.toLocaleDateString()];
}
