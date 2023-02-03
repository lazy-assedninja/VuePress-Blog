---
title: Ktor - 開發筆記
date: 2021-07-10
tags:
- Backend
- Ktor
categories:
- Note
---

::: tip
Ktor 框架工具推薦及簡介。
:::

<!-- more -->

::: warning
已將文章轉移至 [Medium](https://henryhuang1219.medium.com/ktor-開發筆記-2c21bbc80444)，可利用連結來閱讀完整文章，感謝您的體諒。
:::

[//]: # (## Engine)

[//]: # (可以通過兩種方式創建和運行 Ktor 服務器應用程序：使用 [EmbeddedServer]&#40;https://ktor.io/docs/engines.html#embeddedServer&#41; 在代碼中設置參數，或使用 [EngineMain]&#40;https://ktor.io/docs/engines.html#EngineMain&#41; 從外部`application.conf`文件加載配置。)

[//]: # ()
[//]: # (將敏感資訊和程式碼分開，是一個資安上要特別注意的地方，這裡推薦使用 EngineMain，並將配置加進`PROJECT/src/main/resources/application.conf`&#40;[HOCON]&#40;https://github.com/lightbend/config/blob/master/HOCON.md#hocon-human-optimized-config-object-notation&#41;&#41;中。)

[//]: # (```)

[//]: # (ktor {)

[//]: # (    deployment {)

[//]: # (        port = 8080)

[//]: # (        port = ${?PORT})

[//]: # (    })

[//]: # (    application {)

[//]: # (        modules = [ me.lazy_assedninja.application.ApplicationKt.module ])

[//]: # (    })

[//]: # (    database {)

[//]: # (        user = "lazy-assedninja")

[//]: # (        password = "000000")

[//]: # (    })

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # ()
[//]: # (## Routing)

[//]: # (Routing 是用於處理 Server 接到的請求。)

[//]: # ()
[//]: # (最基本的使用方式如下：)

[//]: # (```kotlin)

[//]: # (routing {)

[//]: # (    get&#40;"/hello"&#41; {)

[//]: # (        // ...)

[//]: # (    })

[//]: # (})

[//]: # (```)

[//]: # (還有提供類似群組的功能：)

[//]: # (```kotlin)

[//]: # (routing {)

[//]: # (    route&#40;"/user"&#41; {)

[//]: # (        get { )

[//]: # (            // ...)

[//]: # (        })

[//]: # ()
[//]: # (        post&#40;"login"&#41; { )

[//]: # (            // ...)

[//]: # (        })

[//]: # (    })

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # ()
[//]: # (## ORM 框架)

[//]: # (Exposed 是一個 Kotlin 的 ORM framework，可以透過 Exposed 在 Ktor 中串接資料庫。)

[//]: # ()
[//]: # (這時就可以將資料庫配置從 [Engine]&#40;#engine&#41; 提到的`application.conf`中取出，設置資料庫。)

[//]: # (```kotlin)

[//]: # (val user = environment.config.property&#40;"ktor.database.user"&#41;.getString&#40;&#41;)

[//]: # (val password = environment.config.property&#40;"ktor.database.password"&#41;.getString&#40;&#41;)

[//]: # (Database.connect&#40;"jdbc:h2:mem:test", driver = "org.h2.Driver", user = user, password = password&#41;)

[//]: # ()
[//]: # (routing { )

[//]: # (    // ... )

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # ()
[//]: # (### DSL & DAO)

[//]: # (Exposed 提供2種 API 分別是 [DSL&#40;Domain Specific Language&#41;]&#40;https://github.com/JetBrains/Exposed/wiki/DSL&#41; 和 [DAO&#40;Data Access Object&#41;]&#40;https://github.com/JetBrains/Exposed/wiki/DAO&#41;。)

[//]: # (DSL 類似 Kotlin 所提供具有類型安全性的 SQL 語法，而 DAO 則與帶有 Kotlin 特定 API 的 ORM 框架較為相似， 可針對需求來選擇合適的 API。)

[//]: # (這裡選擇使用 DSL 來開發，避免一張表分別需要建立 Table、Entity 和 DTO，如果表的數量增多，Class 數量將會成倍數成長；如果表的數量不多，便可考慮使用 DAO，享受方便快速的編程體驗。)

[//]: # ()
[//]: # ()
[//]: # (## 序列化)

[//]: # (Ktor提供幾種序列化的方式`kotlinx.serialization`、`Gson`和`Jackson`，可針對使用需求來選擇合適的轉換器，這裡推薦使用`kotlinx.serialization`。)

[//]: # (支援最多種格式之外，只需在 Class 加上 `@Serializable`，便完成轉換所需配置。)

[//]: # (```kotlin)

[//]: # (@Serializable)

[//]: # (data class Customer&#40;val id: Int, val firstName: String, val lastName: String&#41;)

[//]: # (```)

[//]: # (::: warning)

[//]: # (使用前須在`build.gradle`設置 plugins 和 dependencies 外，還需要註冊 json converter。)

[//]: # (:::)

[//]: # ()
[//]: # ()
[//]: # (## 參考)

[//]: # ([Content negotiation and serialization]&#40;https://ktor.io/docs/serialization.html#receive_data&#41;<br>)

[//]: # ([最好用的非同步網頁框架！開始用 Ktor 寫 Kotlin Server]&#40;https://ithelp.ithome.com.tw/users/20120550/ironman/2950&#41;<br>)