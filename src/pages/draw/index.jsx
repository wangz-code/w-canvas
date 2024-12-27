import { Trash } from "@nutui/icons-react-taro";
import {
  Button,
  Cell,
  Popup,
  Space,
  FixedNav,
  Radio,
} from "@nutui/nutui-react-taro";
import { ScrollView, Slider, View } from "@tarojs/components";
import React, { useEffect, useRef, useState } from "react";
import { SignaturePad } from "taro-draw-pad";
import { Icon } from "../../components";
import "./index.css";
import { generateRGBColorList, generateCommonColors } from "../../utils";
import { Retweet } from "@nutui/icons-react-taro";

let cashWidth = 0;

function Index() {
  const signatureRef = useRef(0);
  const [visibleColor, setVisible] = useState(false);
  const [isSignature, setSignature] = useState(false);
  const [visibleNav, setNav] = useState(false);
  const [colorList, setPickerColor] = useState(generateCommonColors());
  const [lineWidth, setWidth] = useState(6);
  const colors = ["red", "black"];
  const [activeColor, setActiveColor] = useState(["red"]);

  const clean = () => {
    signatureRef.current.clear();
    setColor(activeColor);
  };

  const erase = () => {
    cashWidth = lineWidth;
    setWidth(20);
    setActiveColor("white");
  };
  const setColor = (color) => {
    if (cashWidth != 0) setWidth(cashWidth);
    if (visibleColor) setVisible(false);
    setActiveColor(color);
  };

  const setLineWidth = (e) => {
    setWidth(e.detail.value);
    cashWidth = e.detail.value;
  };

  const pickerColor = () => {
    setVisible(true);
  };
  useEffect(() => {
    signatureRef.current.padCurr.setCtx({
      penColor: activeColor || "black",
      strokeWidth: lineWidth,
      isSignature,
    });
  });
  const scrollStyle = {
    height: "100%",
  };
  return (
    <View className="nutui-react-demo">
      <FixedNav
        position={{ top: "15px" }}
        type="right"
        inactiveText="画笔"
        visible={visibleNav}
        onChange={() => setNav(!visibleNav)}
      >
        <View className="nut-fixednav-list">
          <View className="list-item">
            <Space>
              <Button
                type=""
                onClick={() => setSignature(true)}
                color={isSignature ? activeColor : ""}
                icon={<Icon name="i-huabi1" />}
                shape="round"
              />
              <Button
                type=""
                color={!isSignature ? activeColor : ""} 
                onClick={() => setSignature(false)}
                icon={<Icon name="i-huabi" />}
                shape="round"
              />
            </Space>
          </View>
          <View className="list-item">
            <Slider
              className="linewidth"
              step={1}
              max={20}
              value={lineWidth}
              showValue={true}
              onChange={(e) => setLineWidth(e)}
            />
          </View>
        </View>
      </FixedNav>
      <Cell>
        <Space>
          {colors.map((color) => (
            <View>
              <Button
                color={color}
                onClick={() => setColor(color)}
                icon={activeColor == color ? <Icon name="i-huabicaise" /> : ""}
                shape="round"
              />
            </View>
          ))}
          <View style={"margin-top:10rpx"} onClick={() => pickerColor()}>
            <Icon name="i-qicaihong" size={32} />
          </View>
          <Button
            type="default"
            icon={<Icon name="i-xiangpi" />}
            onClick={() => erase()}
          />
          <Button type="default" icon={<Trash />} onClick={() => clean()} />
        </Space>
      </Cell>
      <Popup
        visible={visibleColor}
        position="bottom"
        className="scroll-box"
        onClose={() => setVisible(false)}
      >
        <ScrollView
          className="box"
          style={scrollStyle}
          scrollY
          scrollWithAnimation
        >
          {colorList.map((color) => (
            <Button
              color={color}
              onClick={() => setColor(color)}
              shape="round"
            />
          ))}
        </ScrollView>
      </Popup>
      <SignaturePad className="signature-canvas" ref={signatureRef} />
    </View>
  );
}

export default Index;
