/*
 * @Author: wangqz
 * @Date: 2024-12-27
 * @LastEditTime: 2024-12-27
 * @Description: content
 */

export function generateRGBColorList(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      colors.push(`rgb(${r}, ${g}, ${b})`);
    }
    return colors;
  }



  export function generateColorGroups() {
    const colorGroups = {
        red: [],
        orange: [],
        yellow: [],
        green: [],
        blue: [],
        purple: [],
    };

    // 生成颜色
    for (let i = 0; i < 1000; i++) {
        const randomGroup = Math.floor(Math.random() * Object.keys(colorGroups).length);
        let color;

        switch (randomGroup) {
            case 0: // Red
                color = `rgb(${Math.floor(Math.random() * 256)}, 0, 0)`;
                colorGroups.red.push(color);
                break;
            case 1: // Orange
                color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 128)}, 0)`;
                colorGroups.orange.push(color);
                break;
            case 2: // Yellow
                color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0)`;
                colorGroups.yellow.push(color);
                break;
            case 3: // Green
                color = `rgb(0, ${Math.floor(Math.random() * 256)}, 0)`;
                colorGroups.green.push(color);
                break;
            case 4: // Blue
                color = `rgb(0, 0, ${Math.floor(Math.random() * 256)})`;
                colorGroups.blue.push(color);
                break;
            case 5: // Purple
                color = `rgb(${Math.floor(Math.random() * 128)}, 0, ${Math.floor(Math.random() * 256)})`;
                colorGroups.purple.push(color);
                break;
            default:
                break;
        }
    }

    return colorGroups;
}


export function generateCommonColors() {
    const colors = [];
    
    // 常用基础颜色（可以根据需要添加更多颜色）
    const baseColors = [
        "Red", "Green", "Blue", "Yellow", "Cyan", "Magenta", 
        "Black", "Brown", "Orange", "Purple",
        "Pink", "Teal", "Navy", "Olive", "Lime", "Maroon", 
        "Coral", "Gold", "Silver"
    ];

    const variations = 20; // 每种颜色的变化数量

    baseColors.forEach(baseColor => {
        const rgb = getRGBFromColorName(baseColor);
        if (rgb) {
            for (let i = 0; i < variations; i++) {
                const variation = Math.floor(255 / variations) * i;
                const newColor = `rgb(${Math.min(rgb.r + variation, 255)}, ${Math.min(rgb.g + variation, 255)}, ${Math.min(rgb.b + variation, 255)})`;
                colors.push(newColor);
            }
        }
    });

    return colors.slice(0, 1000); // 确保只返回1000个颜色
}

// 将颜色名称转为 RGB 对象
function getRGBFromColorName(colorName) {
    const colors = {
        "Red": { r: 255, g: 0, b: 0 },
        "Green": { r: 0, g: 255, b: 0 },
        "Blue": { r: 0, g: 0, b: 255 },
        "Yellow": { r: 255, g: 255, b: 0 },
        "Cyan": { r: 0, g: 255, b: 255 },
        "Magenta": { r: 255, g: 0, b: 255 },
        "Black": { r: 0, g: 0, b: 0 },
        "White": { r: 255, g: 255, b: 255 },
        "Gray": { r: 128, g: 128, b: 128 },
        "Brown": { r: 165, g: 42, b: 42 },
        "Orange": { r: 255, g: 165, b: 0 },
        "Purple": { r: 128, g: 0, b: 128 },
        "Pink": { r: 255, g: 192, b: 203 },
        "Teal": { r: 0, g: 128, b: 128 },
        "Navy": { r: 0, g: 0, b: 128 },
        "Olive": { r: 128, g: 128, b: 0 },
        "Lime": { r: 0, g: 255, b: 0 },
        "Maroon": { r: 128, g: 0, b: 0 },
        "Coral": { r: 255, g: 127, b: 80 },
        "Gold": { r: 255, g: 215, b: 0 },
        "Silver": { r: 192, g: 192, b: 192 },
    };

    return colors[colorName] || null;
}
