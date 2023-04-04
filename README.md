# Github Project Management

專案主要架構為 React Typescript，使用 styled components 來撰寫 CSS，並以 Node.js 執行後端功能。專案資料來源為 Github Issues，使用者能夠登入自己的 Github 帳號，並授權應用程式存取資料，進而新增、修改和搜尋 issue。

### 安裝啟動專案

1. 複製專案

```shell
git clone https://github.com/PTPE/project_management.git
```

2. 選取專案目錄

```shell
cd project_management
```

3. 安裝專案套件

```shell
npm install
```

4. 啟動前端頁面

```shell
npm start
```

5. 開啟另一個 terminal，啟動後端伺服器

```shell
npm run server
```

### 技術架構

#### 前端

- React：18.2.0
- TypeSctipt : 16.13.2
- Styled Components：5.3.9

#### 後端

- Node.js：16.13.2
- Express.js：4.18.2

### 專案架構

#### Page

專案有三個個頁面，每一頁在 src/Page 有獨立資料夾：Homepage、IssuePage、RedirectPage。

#### Server

獨立的後端，向 Github 發送 API 請求，取得使用者資料使用權限。

#### Service

發送 API 請求和偵測頁面是否滑到底部的 function。

### 專案介紹

##### 第一頁：首頁

專案標題和引導使用者進 Github 登錄的按鈕。使用者按下按鈕後將會導入到 Github 頁面，驗證完後導入專案第二頁。
![](https://i.imgur.com/k8S0p8X.png)

##### 第二頁：重新導入至第三頁的中介

存取使用者資料的 token 和使用者名稱，存取完後自動導入第三頁。
![](https://i.imgur.com/zh1RYz4.png)

##### 第三頁：應用程式主要功能的頁面。

使用者可以在該頁面新增、修改並搜尋 issue。
![](https://i.imgur.com/gAwUq5d.png)

### Github API 使用範例

#### 取得使用者 Repository 存取權和 token

1.  取得 code
    點選下列網址，將導入至 Github 登入頁面；登入後將會重新導頁，其網址會附上 Github 給的 code。

    下列網址參數：
    CLIEND_ID：應用程式在 GitHub OAuth 註冊的識別碼
    scope：存取使用者的資料類別，本專案存取使用者的 repository，參數為 repo。
    認證完後，網址會附上 Github 給的 code。

```
https://github.com/login/oauth/authorize?client_id=${CLIENT_ID};scope=repo
```

2. 取得 token
   使用 code 以 post 方法向下列網址請求 API，以拿到 token。

```
https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}&redirect_uri=http://localhost:3000/redirect
```

#### 取得 Issue 資料

向下列網址請求 API。
網址參數：
is：搜尋 pull request 或 issue
search：用以篩選的字串內容
in: search 參數的字串內容要用以篩選的對象
labels: issue 的 label 篩選
user: 使用者名稱
per_page：每頁內容筆數
page：第幾頁的內容
sort：資料排序的標準
order：資料以升冪或降冪排序

```
https://api.github.com/search/issues?q=is:issue%20%20in:body+label:%22open%22,%22in%20progress%22,%22closed%22%20user:PTPE&per_page=10&page=1&order=desc
```

- #### Page

  專案有三個個頁面，每一頁在 src/Page 有獨立資料夾：Homepage、IssuePage、RedirectPage。

  1. #### Homepage
     ##### HomePage.tsx
     使用者點擊登入按鈕後，頁面將會引導至 Github 登入頁面。登入完成後將會導入 RedirectPage。
  2. #### RedirectPage
     ##### RedirectPage.tsx
     進入 RedirectPage 後，將會發送 API 請求至本專案的後端，由後端取得使用者的名稱和 token，再將名稱和 token 傳入 RedirectPage。以上流程完成後將會自動導入 IssuePage；若失敗，將導回 Homepage。
  3. #### IssuePage
     ##### IssuePage.tsx
     負責所有該頁 component 的 layout，並偵測頁面是否滑到底部。
     ##### SearchBar.tsx、TimeOrder.tsx、LabelFilter.tsx
     將使用者選取的篩選條件，儲存傳至 Issue.tsx 中。
     ##### FormModal.tsx
     編輯或新增 issue 資料。
     ##### Status.tsx
     編輯 issue 狀態。

- #### Server
  ##### ProxyServer.js
  建立獨立的後端，向 Github 發送 API 請求，取得使用者資料使用權限。
- #### Service
  ##### UpdateIssueHook.tsx
  新增、修改 Issue 資料發送 API 請求的 function。
  ##### UserAuthorizationHook.tsx
  發送 API 請求取得使用者存取權的 function。
  ##### DetectPageBottomHook.tsx
  偵測頁面是否滑到底部的 function。
