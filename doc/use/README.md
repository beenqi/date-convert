# 使用文档

## 引用js文件

```js
release/bundle.js
```
## 初始化

```js
let DC = window.dateConvert;
let dateFun = new DC()
```
## 1、转换

```js


使用方法：
	
let dateVal = dateFun.convert(date, format);
-----------------------------
中间的 ‘-’连接符号可以自定义 年月日等位置也可以调换 
（y表示年 ；M表示月；d表示日；h表示小时；m表示分钟；s表示秒；w表示星期）
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

## 2、获取一定时间段前的日期

```js
使用方法：

let dateVal = dateFun.getAppointDate(type, num, format);  		
-----------------------------
type 代表单位 'w' 代表周；'m'代表月；'y' 代表年
num是一个正整数 默认1
format 是需要获得的时间格式 同 convert方法中format参数 ,默认精确到秒
如传入（'y', 2,'yyyy-MM'）表示获取两年前的时间 返回年月



示例：
获取2周前的时间
let dateVal7 = dateFun.getAppointDate('w',2);
获取3个月前的时间
let dateVal8 = dateFun.getAppointDate('m',3,'yyyy-MM-dd hh:mm');
获取5年前的时间
let dateVal9 = dateFun.getAppointDate('y',5);

document.write('2周前的时间： ' + dateVal7)
document.write('3个月前的时间： ' + dateVal8)
document.write('获取5年前的时间： ' + dateVal9)
```