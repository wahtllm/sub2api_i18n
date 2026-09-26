# Sub2API 多语言版

[Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) 的多语言 fork，镜像 `ghcr.io/wahtllm/sub2api_i18n`。

在官方功能（Claude / OpenAI / Gemini / Grok 订阅统一接入、配额分发、拼车共享）基础上，新增 **7 种界面语言**：

- English
- 简体中文
- 日本語
- Deutsch
- 한국어
- Español
- Português (Brasil)

首次访问按浏览器语言自动探测，也可在界面右上角语言菜单中随时切换。

## 与官方 1Panel 应用（sub2api）的差异

| 配置项 | 官方应用 | 本应用 |
|---|---|---|
| 镜像 | weishaw/sub2api | ghcr.io/wahtllm/sub2api_i18n |
| Web 端口默认值 | 8080 | **8085**（安装时可改） |
| Redis DB | 0 | **5**（避免与其他 1Panel 应用共享 Redis 时 key 冲突） |
| 数据库连接池 | 默认 256/128 | 50/10（适配 1Panel 共享 PostgreSQL 的 max_connections=100） |
| 健康检查启动等待 | 30s | 60s（首次安装自动初始化更稳） |

## 安装

1. 在服务器上执行：

```bash
git clone --depth 1 https://github.com/wahtllm/sub2api_i18n.git /tmp/sub2api_i18n
cp -r /tmp/sub2api_i18n/deploy/1panel/sub2api-i18n /opt/1panel/resource/apps/local/
```

2. 1Panel 面板 → 应用商店 → 本地应用 → **同步本地应用**
3. 找到"Sub2API 多语言版"点击安装，按表单选择已安装的 PostgreSQL / Redis 服务即可

> 前提：ghcr.io 镜像包已设为 public，服务器无需 docker login 即可拉取。

## 升级

上游发布新版本后，本仓库 merge 官方代码并推送，CI 自动构建新版本 tag 镜像；随后在本目录新增对应版本目录（如 `0.2.9/`），重新 `cp` + 同步本地应用，即可在面板中升级。`crossVersionUpdate: true`，数据（`./data` 卷、PostgreSQL、Redis）全部保留。
