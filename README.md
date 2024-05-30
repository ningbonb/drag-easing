## 拖拽缓动组件
该组件提供了移动端的拖拽缓动方法。

### 安装
使用 [npm](https://www.npmjs.com/package/drag-easing) 安装：
```git
npm i drag-easing --save
```

导入 `drag-easing`
```javascript
import DragEasing from 'drag-easing';
```

### 使用

基础示例
```javascript
// 初始化
const de = new DragEasing({
    onDragging: (e)=>{
        // e.changeX 即为添加了缓动的拖拽 X 坐标
        // e.changeY 即为添加了缓动的拖拽 Y 坐标
    },
});
```

## 方法

- `new DragEasing();` - 初始化，可接受一个对象参数
- `destroy()` - 销毁实例

## 参数

### new DragEasing() 可选参数

- `element` - 绑定事件的元素，可以传选择器的名称，或者 `Element` ，默认为 `document`
- `elementOutsideRemoveEvent` - 手指划出绑定的元素区域之后，是否移除事件，默认 `true`
- `windowOutsideRemoveEvent` - 手指划出窗口之后，是否移除事件，默认 `true`
- `minX` - 设限 `x` 方向最小值，默认 `null` 不限制
- `maxX` - 设限 `x` 方向最大值，默认 `null` 不限制
- `minY` - 设限 `y` 方向最小值，默认 `null` 不限制
- `minY` - 设限 `y` 方向最大值，默认 `null` 不限制
- `easingRatio` - 缓动减缓的速率，默认 `0.1`
- `moveRatio` - 拖拽移动的速率，默认 `1`
- `onDragging` - 获取拖拽数据的回调函数

## 示例

-  示例代码
 ```javascript
import DragEasing from 'drag-easing';

// 初始化
const de = new DragEasing({
    // element: window.document,
    onDragging: (e)=>{
        // e.changeX 即为添加了缓动的拖拽 X 坐标
        // e.changeY 即为添加了缓动的拖拽 Y 坐标
    },
});
 ```
