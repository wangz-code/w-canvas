import { Edit, Trash } from "@nutui/icons-react-taro";
import { Button, Cell, Space } from "@nutui/nutui-react-taro";
import { Slider, Text, View } from "@tarojs/components";
import { useDidShow } from "@tarojs/taro";
import { SignaturePad } from "taro-draw-pad";
import React, { useRef } from "react";
import "./index.css";
import { useState } from "react";
import { Icon } from "../../components";
import { useEffect } from "react";

let cashWidth = 0;

function Index() {
  const signatureRef = useRef(0);
  const [lineWidth, setWidth] = useState(10);
  const colors = ["red", "blue", "yellow"];
  const [activeColor, setActiveColor] = useState(["blue"]);

  const clean = () => {
    signatureRef.current.clear();
    setColor("red");
  };
  const erase = () => {
    cashWidth = lineWidth;
    setWidth(20);
    setActiveColor("white");
  };
  const setColor = (color) => {
    if (cashWidth != 0) setWidth(cashWidth);
    setActiveColor(color);
  };
  const setLineWidth = (e) => {
    setWidth(e.detail.value);
  };

  useEffect(() => {
    signatureRef.current.padCurr.setCtx({
      penColor: activeColor || "black",
      strokeWidth: lineWidth,
    });
  });
  return (
    <View className="nutui-react-demo">
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
          <Button type="default">..</Button>
          <Button
            type="default"
            icon={<Icon name="i-xiangpi" />}
            onClick={() => erase()}
          ></Button>
          <Button type="default" icon={<Trash />} onClick={() => clean()} />
        </Space>
        <Slider
          style={"width:100%"}
          step={1}
          max={20}
          value={lineWidth}
          showValue={true}
          onChange={(e) => setLineWidth(e)}
        />
      </Cell>
      <SignaturePad className="signature-canvas" ref={signatureRef} />
    </View>
  );
}

export default Index;
