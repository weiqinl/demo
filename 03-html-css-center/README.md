CSS中的居中，在工作中，会经常遇到。它可以分为水平居中和垂直居中，以下是几种实现居中的方式。

[git查看源码][1]
[配合在线预览，效果更佳][2]

以下例子中，涉及到的CSS属性值。

```

    .parent-frame {

      width: 200px;

      height: 200px;

      border: 1px solid red;

    }

    .child-frame {

      width: 100px;

      height: 100px;

      border: 1px dotted blue;

    }

```





## 1: text-align:center，水平居中

块状元素，水平居中

```

  <div class="parent-frame">

    子元素水平居中

    <i style="display:block; text-align: center;color: blue">块状元素，水平居中</i>

  </div>

```

## 2：margin: 0 auto，水平居中

水平居中。上下外边框距为0，左右外边距浏览器会自动计算平分

```

  <div class="parent-frame">

    子元素水平居中

    <i class="child-frame" style="display: block;margin: 0 auto">块状元素，水平居中</i>

  </div>

```

## 3：line-height值，垂直居中

垂直居中。line-height属性，设置行间的距离（行高）。不允许使用负值。
单行文本的元素才适用，多行元素中不适用这种方法。元素内容是单行，并且其高度是固定不变的，

```
  <div class="parent-frame">
    <div style="line-height: 200px;">line-height值=父height值</div>
  </div>
```
## 4：  使用float属性，配合relative定位，实现水平居中

给父元素设置float，然后将父元素整体向右移动50%，再将子元素整体向左移动50%，来实现水平居中。

记得将父元素清除浮动。

```

  <div class="parent-frame">

    <div style="float: left; position: relative; left: 50%; clear: both;" >

      <div style="position: relative; left: -50%">虽然宽度不同weiqinl</div>

    </div>

    <div style="float: left; position: relative; left: 50%; clear: both;">

      <div style="position: relative; left: -50%">但一样</div>

    </div>

    <div style="float: left; position: relative; left: 50%; clear: both;">

      <div style="position: relative; left: -50%">水平居中了</div>

    </div>

    <div style="float: left; position: relative; left: 50%; clear: both;">

      <div style="position: relative; left: -50%">使用float属性，记得清楚浮动</div>

    </div>

  </div>

```


## 5：使用table布局，默认垂直居中

table默认垂直居中vertical-align:middle。如果还想要水平居中，那就是行内元素，添加属性text-align: center

```

  <table class="parent-frame">

    <tr>

      <td>

        table默认垂直居中[vertical-align: middle]

      </td>

      <td style="text-align:center;">

        水平居中添加text-align:center

      </td>

    </tr>

  </table>

```

## 6:  仿table，display:table-cell。并使用vertical-align属性,实现垂直居中

该属性设置元素的垂直对齐方式。

定义行内元素的基线相对于该元素所在行的基线的垂直对齐。在表单元格中，这个属性会设置单元格框中的单元格的对齐方式。

```

  <div class="parent-frame" style="display: table-cell;vertical-align: middle">

    <div>仿table: display:table-cell垂直居中vertical-align:middle</div>

  </div>

```

## 7: 使用absolute绝对定位，配合margin使用，实现水平垂直居中

相对应于relative的绝对定位absolute，需要定宽。同时，top/bottom应该相等，并且相加不超过定宽度。 right/left也应该相等，并且相加不超过定宽。

再配合margin： auto使用

```

  <div class="parent-frame" style="position: relative">

    利用绝对定位，配合margin:auto自动计算外边距。

    <div class="child-frame" style="position: absolute; top: 0;right: 0; bottom: 0; left: 0;margin: auto;">

      定宽元素,需要确定的尺寸。relative是为了给子元素定位用。

    </div>

  </div>

```

## 8: 使用absolute绝对定位，配合margin的负值(negative margins)来实现水平垂直居中。

negative margins负边距，会使结构塌陷，利用这个特点来实现。

```

  <div class="parent-frame" style="position: relative;">

    利用绝对定位，配合margin的负值来实现居中。

    <div class="child-frame" style="position: absolute; top: 50%; left: 50%; margin-top: -51px; margin-left: -51px;">

      负边距来实现，水平垂直居中。需要知道该元素的具体大小

    </div>

  </div>

```

## 9: 使用absolute绝对定位，配合translate 移动转换，实现水平垂直居中

使用百分比来绝对定位一个元素，并配合使用translate，将元素移动定位居中。

```

  <div class="parent-frame" style="position: relative;">

    利用绝对定位，配合translate移动到水平垂直居中。

    <div class="child-frame" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">

      不需知具体大小。支持IE9+及现代浏览器

    </div>

  </div>

```

## 10： 使用flex布局,设置其属性justify-content，align-items都为center，实现水平垂直居中

 父元素使用flex布局,并定义两个属性值justify-content，align-items都为center，那么就定义为水平垂直居中

justify-content属性定义了项目在主轴上的对齐方式。align-items属性定义项目在交叉轴上如何对齐。

```

  <div class="parent-frame" style="display: flex; justify-content: center; align-items: center">

    <div class="child-frame">使用flex布局，justify-content属性定义了项目在主轴上的对齐方式。</div>

    <div class="child-frame">

      align-items属性定义项目在交叉轴上如何对齐。 两个属性都居中，则水平、垂直居中对齐

    </div>

  </div>

```

## 11: 利用flex布局，配合margin：auto使用，实现水平垂直居中。

父元素使用flex布局，子元素使用margin: auto

```

  <div class="parent-frame" style="display: flex;">

    <div style=" margin: auto;">父元素使用flex布局，子元素配合margin:auto使用</div>

  </div>

```

[git查看源码][1]

[在线预览][2]


[1](https://github.com/weiqinl/demo)
[2](https://github.com/weiqinl/demo)

[完]