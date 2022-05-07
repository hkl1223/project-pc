# 轮播图属性
|  属性   | 说明  |   类型   | 是否必填  | 默认值 |
|  ----   | ----  |  ----   |  ----  |  ----  | 
| sliders  | 数据 |    Array[] |  true  |    []     |
| duration | 过渡时间 |Number |  -  |    2000   |
| initial  | 初始展示哪一项 |Number |  -  |    0   |
| autoplay | 是否开启自动轮播 |Boolean |  -  |    true   |

>  **sliders的数据最好不低于5条。**

### 示例

1.引用：在当前使用的文件里面引入

     import Carousel from "../../components/carousel/carousel.vue"; 

2.使用：

     <Carousel :sliders="list" :duration="2000" :initial="0" :autoplay="true" /> 


3.示例：
## 轮播图:

![](https://s1.ax1x.com/2022/05/07/OQee1O.md.png)

<br/>

# 瀑布流属性
|  属性   | 说明  |   类型   | 是否必填  | 默认值 |
|  ----   | ----  |  ----   |  ----  |  ----  |
| list  | 数据 |    Array[] |  true |    []     |


### 示例

1.引用：在当前使用的文件里面引入

    import Waterfalls from "../../components/waterfalls/waterfalls.vue"; 

2.使用：list传参

    <Waterfalls :list="list" /> 

3.示例：
## 瀑布流:

![](https://s1.ax1x.com/2022/05/07/OQeZ9K.md.png)



