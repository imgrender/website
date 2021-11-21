---
id: getting-started
title: 快速开始
description: Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.
slug: /getting-started
---

# 快速开始
imgrender 是一个图片渲染服务，通过一个API，根据配置动态渲染图片，快速生成不同内容的图片。

渲染模板配置简单，特别适合拥有不同分享海报的应用，快速、动态地生成分享海报。

## 基础
HTTP 接口地址如下：
```bash
POST https://api.imgrender.cn/open/v1/pics
```

## 认证
为防止 API 被滥用，需使用 `API_KEY` 进行认证。

在请求时，`请求头`中需添加 `Authorization` 字段，并按以下示例添加 `API_KEY`：

```
Authorization: Apikey xxxx.xxxx
```

将 `xxxx.xxxx` 替换为真实有效的 API_KEY，即可通过验证。

:::danger
这里提供一个可用于调试的公开 API_KEY：
```bash
183666749185461475.PLbfIpBpeMkpgbj1Tr+177Mv3Jo3wIIySyf8V5ZeDhs=
```

👉 公开 API_KEY 不定时失效、更新，仅推荐用于调试！正式使用时，请添加开发者公众号留言免费获取独立、私有 API_KEY。

![imgrender开发者](/img/mp_qrcode.jpg)
:::

## 请求内容
请求头中除了签名认证的内容以外，需要添加`Content-Type:application/json`，渲染配置使用 `JSON` 格式在 `Body` 中传递。

如何编写渲染配置，请参考[蓝图](/docs/blueprint)。下面是参考示例：

```json
{
    "width": 640,
    "height": 1034,
    "backgroundColor": "#d04c44",
    "blocks": [
        {
            "x": 25,
            "y": 25,
            "width": 590,
            "height": 820,
            "borderColor": "#ffe6c0",
            "borderWidth": 2
        }
    ],
    "texts": [
        {
            "text": "帅帅气气",
            "x": 320,
            "y": 187,
            "font": "jiangxizhuokai",
            "fontSize": 18,
            "lineHeight": 18,
            "color": "#ffe6c0",
            "width": 320,
            "textAlign": "center"
        }
    ],
    "images": [],
    "lines": []
}
```
## 响应
响应内容会按照以下`JSON`格式返回

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "url": "https://davinci.imgrender.cn/6e31cfcd683a36d0522a8cc34e244379.jpg?sign=xxx",
    "expireAt": "2021-06-21 15:20:21"
  }
}
```

- ` code `：错误码，当错误码为 `0` 时，表示处理成功，其他值表示存在一定的问题。
- `message`：提示信息，与`code`相对应，更多提示信息可查看[错误码列表](#错误码)。
- `data` ：返回的数据。当 `code` 为 `0` 时，返回有效时长为`5分钟`的图片链接。`url` 为图片链接，`expireAt` 为图片链接过期时间。

## HTTP 状态码
- `200`：处理成功。
- `400`: 请求失败。
- `401`：请求未通过认证。
- `500`：系统错误，出现这个状态一般是服务出现问题。


## 错误码
- `0`: 成功，无错误产生。
- `10001`: 系统发生预期之外的错误
- `10103`: 参数错误，请检查 HTTP 请求是否正确。
- `10104`：请求签名信息有误，请检查请求是否正确添加验证信息。
- `20101`: 图片加载失败，请检查图片组件中的图片链接是否可正常访问。
- `20102`: 图片解析失败，可能图片格式不正确，推荐使用 `jpg / png` 格式的图片。
- `20103`: 字体加载失败，请检查文本组件的字体配置。
- `20104`: 字体解析失败，一般不会出现。
- `20105`: 图片渲染错误，在渲染海报的过程中，出现一些预期之外的错误。
- `20106`: 渲染配置错误，出现该错误说明图片渲染配置存在问题，请根据提示信息排查。
