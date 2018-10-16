# 使用文档

##初始化

```js
let DC = window.dateConvert;
let dateFun = new DC()
```
##转换

```js
中间的 ‘-’连接符号可以自定义 年月日等位置也可以调换 
（y表示年 ；M表示月；d表示日；h表示小时；m表示分钟；s表示秒；w表示星期）
======================================
字母个数为显示的数字个数
-----------------------------
使用方法：
	let dateVal = dateFun.convert(date, format);

示例：

常用转换格式简写（需要年月日/需要年月日时分秒）
let dateVal1 = dateFun.convert(new Date(), 'y-m-d');
let dateVal2 = dateFun.convert(new Date(), 'y-m-d h:m:s');
常规方法示例
let dateVal3 = dateFun.convert(1323122444323, 'yyyy-MM-dd hh:mm:ss w');
let dateVal4 = dateFun.convert(new Date(), 'yyyy-MM-dd hh:mm:ss w');
let dateVal5 = dateFun.convert(new Date(), 'yyyy-MM-dd hh:mm:ss');
let dateVal6 = dateFun.convert(new Date(), 'yyyy-MM-dd');
document.write(dateVal1)
document.write(dateVal2)
document.write(dateVal3)
document.write(dateVal4)
document.write(dateVal5)
document.write(dateVal5)
```