/*
 * @Author: wangqz
 * @Date: 2024-12-26
 * @LastEditTime: 2024-12-26
 * @Description: content
 */
import { IconFont } from "@nutui/icons-react-taro";

export function Icon({ name, size }) {
  if (!name) return <></>;
  const [prefix, n] = name.split("-");
  return (
    <IconFont
      fontClassName="iconfont"
      size={size}
      classPrefix={prefix}
      name={n}
    />
  );
}
