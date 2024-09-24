#### 1、view嵌套引起的内层margin-top对外层view起作用？
- 原因：盒子没有获得haslayout造成margin-top无效。
- 解决方法：
	- 方法一：在父层view加上`overflow: hidden`即可。
	- 方法二：把`margin-top`外边距改为`padding-top`内边距即可。

#### 2、