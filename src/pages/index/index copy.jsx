/*
 * @Author: wangqz
 * @Date: 2024-12-25
 * @LastEditTime: 2024-12-25
 * @Description: content
 */
import React, { useState } from "react";
import { View } from "@tarojs/components";
import {
  Button,
  ConfigProvider,
  TextArea,
  Dialog,
  Grid,
  Image,
  Cell,
} from "@nutui/nutui-react-taro";
import enUS from "@nutui/nutui-react-taro/dist/locales/en-US";
import zhCN from "@nutui/nutui-react-taro/dist/locales/zh-CN";
import "./index.css";
import Taro from "@tarojs/taro";
function Img(props) {
  return (
    <>
      <Image src={props.src} width={200} height={200} />
    </>
  );
}

function Index() {
  const [locale, setLocale] = useState(zhCN);
  const nav = [
    [
      "/pages/draw/index",
      "绘图",
      "https://img.tukuppt.com/png_preview/00/27/82/NpX0eIMJ3o.jpg!/fw/780",
    ],
  ];
  const navTo = (url) => () => Taro.navigateTo({ url });

  // const localeKey = locale === zhCN ? "zhCN" : "enUS";
  // const [visible, setVisible] = useState(false);
  // const [translated] = useState({
  //   zhCN: {
  //     welcome: "欢迎使用 NutUI React 开发 Taro 多端项目。",
  //     button: "使用英文",
  //     open: "点击打开",
  //   },
  //   enUS: {
  //     welcome:
  //       "Welcome to use NutUI React to develop Taro multi-terminal projects.",
  //     button: "Use Chinese",
  //     open: "Click Me",
  //   },
  // });
  // const handleSwitchLocale = () => {
  //   setLocale(locale === zhCN ? enUS : zhCN);
  // };
  return (
    <ConfigProvider locale={locale}>
      <View className="nutui-react-demo">
        <Grid>
          {nav.map((item) => (
            <Grid.Item onClick={navTo(item[0])} text={item[1]}>
              <Img src={item[2]} />
            </Grid.Item>
          ))}
        </Grid>
      </View>
    </ConfigProvider>
  );
}

export default Index;
