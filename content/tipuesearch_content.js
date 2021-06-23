var tipuesearch = {"pages": [{'title': 'About', 'text': 'This is  https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n', 'tags': '', 'url': 'About.html'}, {'title': '小組成員', 'text': 'wcm2021-ag2 40923105 web \xa0 | \xa0 40923105 repo \xa0 | \xa0 grp web \xa0 | \xa0 grp repo 40923104 web \xa0 | \xa0 40923104 repo \xa0 | \xa0 grp web \xa0 | \xa0 grp repo 40923107 web \xa0 | \xa0 40923107 repo \xa0 | \xa0 grp web \xa0 | \xa0 grp repo 40923110 web \xa0 | \xa0 40923110 repo \xa0 | \xa0 grp web \xa0 | \xa0 grp repo 40923102 web \xa0 | \xa0 40923102 repo \xa0 | \xa0 grp web \xa0 | \xa0 grp repo 40923106 web \xa0 | \xa0 40923106 repo \xa0 | \xa0 grp web \xa0 | \xa0 grp repo \n', 'tags': '', 'url': '小組成員.html'}, {'title': '每周上課進度', 'text': '', 'tags': '', 'url': '每周上課進度.html'}, {'title': 'W1-W2', 'text': '網際內容管理課程簡介 從\xa0 http://a.kmol.info:88 \xa0 取下 Python 3.9.1 版的可攜程式系統， 下載 kmol2021_spring_v1 和\xa0 kmol2021_spring_v2 \n', 'tags': '', 'url': 'W1-W2.html'}, {'title': 'W3', 'text': '分組，自選組員，至多六個人一組 \n 第二組組員：40923102、40923104、40923105、40923106、40923107、40923110 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '1.處理前三週遇到的問題 \n 2.簡要說明網際內容管理課程開課緣由, 以及課程目標. 其次說明 wcm2021 Topic0 專案執行目的. \n 3.說明如何從特定主機, 利用 requests 送出 post 參數後取回 html, 並以 bs4 解讀後利用指令要求 firefox 檢視傳回資料. \n 下面為教室使用範例 \n 綜一館0810: \n import requests\nimport bs4\n# for os.environ and os.system\nimport os\n# for geting html file path\nimport pathlib\n \n# for pythn 3.9\n\n \n\'\'\'\nurl:  \'jclassroom_ajax.php\',\ndata: { pselyr: pselyr, pselclssroom: pselclssroom },\n\'\'\'\nsemester = \'1092\'\nclassroomno = \'BGA0810\'\ncolumn = True\n \nif semester == None:\n    semester = \'1092\'\nif classroomno == None:\n    # BGA0810 電腦輔助設計室\n    classroomno = \'BGA0810\'\n     \nheaders = {\'X-Requested-With\': \'XMLHttpRequest\'}\n \nurl = \'https://qry.nfu.edu.tw/jclassroom_ajax.php\'\npost_var = {\'pselyr\': semester, \'pselclssroom\': classroomno}\n \nresult = requests.post(url, data = post_var, headers = headers)\n \nsoup = bs4.BeautifulSoup(result.content, \'lxml\')\n \n# 先除掉所有 anchor\nfor a in soup.findAll(\'a\'):\n    # bs3 語法\n    #a.replaceWithChildren()\n    # bs4 語法, 將標註與內容拆開\n    a.unwrap()\n \n# 根據輸出設定, 取出 class=\'tbcls\' 的 table 資料\ntable = soup.find(\'table\', {\'class\': \'tbcls\'})\n \n# 重建 table, 設定邊線為 1 pixel\noutput = "<table border=\'1\'>"\n \nfor i in table.contents:\n    # 利用 replace 復原  \n    output += str(i).replace("&nbsp", " ")\noutput += "</table>"\n#print(output)\n \n# 將 output 寫入 w1_classroom.html\nfileName = "w1_classroom.html"\nwith open(fileName, "w", encoding="utf-8") as file:\n    file.write(output)\n# 利用 os.system() 以 default browser 開啟 w1_class_local.html\nfilePath = pathlib.Path(__file__).parent.absolute()\n#print(filePath)\n# set firefox as default browser and start url to open html file\nos.system("start file:///" + str(filePath) + "\\\\" + fileName) \n 接下來再按Tools，再按Go就會在瀏覽器打開教室使用時間表 \n \n 然後只要把程式碼裡的"BGA0810"改為想要找的教室代碼， 按Tools，再按Go就會在瀏覽器打開你要找的教室使用時間表。 \n 以下為範例: \n \n 下面為程式碼 \n import requests\nimport bs4\n# for os.environ and os.system\nimport os\n# for geting html file path\nimport pathlib\n\n# for pythn 3.9\n\n\n\'\'\'\nurl: \'jclassroom_ajax.php\',\ndata: { pselyr: pselyr, pselclssroom: pselclssroom },\n\'\'\'\nsemester = \'1092\'\nclassroomno = \'BGA0640\'\ncolumn = True\n\nif semester == None:\nsemester = \'1092\'\nif classroomno == None:\n# BGA0810 電腦輔助設計室\nclassroomno = \'BGA0810\'\n\nheaders = {\'X-Requested-With\': \'XMLHttpRequest\'}\n\nurl = \'https://qry.nfu.edu.tw/jclassroom_ajax.php\'\npost_var = {\'pselyr\': semester, \'pselclssroom\': classroomno}\n\nresult = requests.post(url, data = post_var, headers = headers)\n\nsoup = bs4.BeautifulSoup(result.content, \'lxml\')\n\n# 先除掉所有 anchor\nfor a in soup.findAll(\'a\'):\n# bs3 語法\n#a.replaceWithChildren()\n# bs4 語法, 將標註與內容拆開\na.unwrap()\n\n# 根據輸出設定, 取出 class=\'tbcls\' 的 table 資料\ntable = soup.find(\'table\', {\'class\': \'tbcls\'})\n\n# 重建 table, 設定邊線為 1 pixel\noutput = "<table border=\'1\'>"\n\nfor i in table.contents:\n# 利用 replace 復原\noutput += str(i).replace("&nbsp", " ")\noutput += "</table>"\n#print(output)\n\n# 將 output 寫入 w1_classroom.html\nfileName = "w1_classroom.html"\nwith open(fileName, "w", encoding="utf-8") as file:\nfile.write(output)\n# 利用 os.system() 以 default browser 開啟 w1_class_local.html\nfilePath = pathlib.Path(__file__).parent.absolute()\n#print(filePath)\n# set firefox as default browser and start url to open html file\nos.system("start file:///" + str(filePath) + "\\\\" + fileName) \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '老師教我們如何更新cmsimde。 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '建立一個Heroku帳號並到 http://a.kmol.info:88/ 下載heroku.7z。 \n 步驟一 : \xa0 ( 建立 Heroku 帳號 ) 進入 \xa0 https://heroku.com ，利用學校信箱登記一個 Heroku 帳號，登記後要進入學校信箱進行確認後才能開通 Heroku 帳號。 \n Heroku 只允許免費建立五個應用程式,，且每個程式的 最大容量 為 500MB。 \n 步驟二 : \xa0 ( 建立 Heroku app ) 登入 Heroku 後, 先以 s + 學號 建立第一個 app，完成後, 將可至 https://s學號.herokuapp.com 連線取得網站最初內容。 \n 步驟三 : \xa0 (下載 Heroku CLI) 從 \xa0 http://a.kmol.info:88/heroku.7z \xa0 下載 Heroku.7z，解壓縮至隨身碟 Y: 所在位置或者是 Hybrid 設定的位置。 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '\n 設定Heroku同步github。 \n 須先完成上週的步驟一到步驟三，才能繼續接下來的動作。 \n 步驟四 : \xa0 ( 修改命令搜尋路徑 ) 修改隨身系統的啟動批次檔案， 讓 Windows 的命令視窗中可以執行 heroku.exe，或稱作"設法將 heroku.exe 所在目錄位置，設為 Windows 搜尋路徑之一"再重新啟動隨身碟的start_ipv4.bat。 \n 步驟五 : \xa0 ( 測試 heroku 執行 ) 在命令列輸入 heroku version 若回應所使用的版本表示上述路徑設定已經成功。 \n 步驟六 : \xa0 ( 設定 heroku 代理主機 ) 先前我們已經知道網路的應用包含 client 與 server，不同 client 採用不同的 proxy 設定與 server 連線，其中 firefox 作為 WWW 網路協定的 client，有其自己的網路 Proxy 設定，也可以直接使用操作系統的 Proxy 設定。 \n Chrome 作為 WWW 網路協定的 client，目前 Windows 下的最新版，只能使用操作系統的 Proxy 設定。 \n 而 git 作為 git client 與 github server 連線的 Proxy 設定，則寫在 y:\\home_ipv6 下的 .giconfig 中，\xa0 以 git config --global http.proxy "http://your_proxy:port" 進行設定。 \n 相同的道理 heroku cli 作為 \xa0 https://heroku.com \xa0 伺服器的 client 端, 也有其 Proxy 的設定方式, 也就是在 start_ipv6.bat 中加入: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n REM  for   heroku login \n set HTTP_PROXY=http: //[2001:288:6004:17::53]:3128 \n set HTTPS_PROXY=http: //[2001:288:6004:17::53]:3128 \n \n \n \n \n \n \n \n 步七驟 : \xa0 ( 設定同步倉儲 ) 利用 Heroku 同步 Github Pages 上的網站內容，只需透過 git remote add (Heroku 指令為 heroku git:remote -a heroku_倉儲_名稱，之後只要在 heroku login 狀態下，可以直接利用 git push) 在近端設定一個連線到 Heroku 倉儲的代號，就能在每次更新 Github Pages 倉儲後，順便將內容同步至 Heroku。網際內容管理課程將使用兩種 Heroku app 設定，也就是靜態網頁與動態網頁: \n 靜態網頁 - 採用 php 方式部署, 讓 Heroku 將靜態網頁視為 PHP 程式, 利用 index.php 跳轉到 index.html \n 動態網頁 - 讓 Heroku 執行 cmsimde/wsgi.py 的方式進行雲端伺服. \n 步驟八 : \xa0 ( 以 git 進行提交推送 ) 利用 heroku git:remote -a 設定的同步倉儲其推送名稱內定為 "heroku"，使用者只要使用 git push heroku 就可將改版內容推送到對應的 Heroku app 倉儲。 \n 指令操作步驟: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n # 以 interactive 模式登入 Heroku, 完成後產生 y:\\home_ipv6\\_netrc \n heroku login  - i \n # 針對已經登入的 Heroku 帳號下的 taiwan-01 app, 設為此倉儲的 remote 同步倉儲, 且在倉儲中會自建名稱為 heroku 的 remoate site. \n heroku git:remote  - a taiwan - no1 \n \n \n \n \n \n \n \n 上述步驟完成後的 Heroku 網站: \xa0 https://taiwan-no1.herokuapp.com \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '老師講解如何從學校主機拉出課表。 \n 綜一館0810: \n import requests\nimport bs4\n# for os.environ and os.system\nimport os\n# for geting html file path\nimport pathlib\n\n# for pythn 3.9\n\n\n\'\'\'\nurl: \'jclassroom_ajax.php\',\ndata: { pselyr: pselyr, pselclssroom: pselclssroom },\n\'\'\'\nsemester = \'1092\'\nclassroomno = \'BGA0830\'\ncolumn = True\n\nif semester == None:\nsemester = \'1092\'\nif classroomno == None:\n# BGA0810 電腦輔助設計室\nclassroomno = \'BGA0810\'\n\nheaders = {\'X-Requested-With\': \'XMLHttpRequest\'}\n\nurl = \'https://qry.nfu.edu.tw/jclassroom_ajax.php\'\npost_var = {\'pselyr\': semester, \'pselclssroom\': classroomno}\n\nresult = requests.post(url, data = post_var, headers = headers)\n\nsoup = bs4.BeautifulSoup(result.content, \'lxml\')\n\n# 先除掉所有 anchor\nfor a in soup.findAll(\'a\'):\n# bs3 語法\n#a.replaceWithChildren()\n# bs4 語法, 將標註與內容拆開\na.unwrap()\n\n# 根據輸出設定, 取出 class=\'tbcls\' 的 table 資料\ntable = soup.find(\'table\', {\'class\': \'tbcls\'})\n\n# 重建 table, 設定邊線為 1 pixel\noutput = "<table border=\'1\'>"\n\nfor i in table.contents:\n# 利用 replace 復原\noutput += str(i).replace("&nbsp", " ")\noutput += "</table>"\n#print(output)\n\n# 將 output 寫入 w1_classroom.html\nfileName = "w1_classroom.html"\nwith open(fileName, "w", encoding="utf-8") as file:\nfile.write(output)\n# 利用 os.system() 以 default browser 開啟 w1_class_local.html\nfilePath = pathlib.Path(__file__).parent.absolute()\n#print(filePath)\n# set firefox as default browser and start url to open html file\nos.system("start file:///" + str(filePath) + "\\\\" + fileName) \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '打期中的期望成績和報告自己小組的倉儲內容。 \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '1.到\xa0 http://a.kmol.info:88/ 下載 robodk_kmol.7z。 \n 2.到\xa0 https://sqlitebrowser.org/dl/ 下載 DB Browser for SQlite - .zip(no installer) for 64-bit 。 \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '1.到\xa0 http://a.kmol.info:88/ 下載robodk522_portable 。 \n 2.執行\xa0 robodk \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': 'OBS+Youtube 測試直播 \n 步驟一:建立一個頻道之後點選「你的頻道」。 \n \n 步驟二:進入頻道之後再點選「進行直播」。 \n \n 步驟三:因為是第一次啟用直播功能，所以它會說目前無法使用直播功能，這個時候只要點選啟用進行手機認證，再過24小時之後就可以啟用此功能了。 \n \n 步驟四:過了24小時之後隨時都可以直播。 \n \n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '第一周遠距教學 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '在線上表單上找到自己的組別，並填上學號和github account。 \n 建立分組網站連結。 \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '1.線上表單填寫--學期自評分數、課程遭遇問題、課程至今學習心得 \n 2.老師講解同學提出的問題 \n 3.小組錄製討論影片並放到分組網站上 \n 下面是影片連結 \n 處理組員麥克風問題 \n 分組連結網站編輯 \n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': 'fossil 網站 \n 錄製fossil操作影片 \n W16 fossil 操作影片 \n 小組討論影片: \n https://youtu.be/vZg9ktF6GQk \n https://youtu.be/b4gaPmvRxHM \n https://youtu.be/qg9JmMrDFNw \n', 'tags': '', 'url': 'W16.html'}, {'title': 'W17', 'text': '利用Google Meet 向老師及同學展示自己的倉儲，並讓其他同學評分。 \n', 'tags': '', 'url': 'W17.html'}, {'title': '網路環境', 'text': '這學期全程使用筆電操作，使用手機的網路讓筆電連線，因此是用 ipv4.bat 。 \n', 'tags': '', 'url': '網路環境.html'}, {'title': 'Heroku 網站', 'text': '建立一個Heroku帳號並到 http://a.kmol.info:88/ 下載heroku.7z。 \n 步驟一 : \xa0 ( 建立 Heroku 帳號 ) 進入 \xa0 https://heroku.com ，利用學校信箱登記一個 Heroku 帳號，登記後要進入學校信箱進行確認後才能開通 Heroku 帳號。 \n Heroku 只允許免費建立五個應用程式,，且每個程式的 最大容量 為 500MB。 \n 步驟二 : \xa0 ( 建立 Heroku app ) 登入 Heroku 後, 先以 s + 學號 建立第一個 app，完成後, 將可至 https://s學號.herokuapp.com 連線取得網站最初內容。 \n 步驟三 : \xa0 (下載 Heroku CLI) 從 \xa0 http://a.kmol.info:88/heroku.7z \xa0 下載 Heroku.7z，解壓縮至隨身碟 Y: 所在位置或者是 Hybrid 設定的位置。 \n 設定Heroku同步github。 \n 步驟四 : \xa0 ( 修改命令搜尋路徑 ) 修改隨身系統的啟動批次檔案， 讓 Windows 的命令視窗中可以執行 heroku.exe，或稱作"設法將 heroku.exe 所在目錄位置，設為 Windows 搜尋路徑之一"再重新啟動隨身碟的start_ipv4.bat。 \n 步驟五 : \xa0 ( 測試 heroku 執行 ) 在命令列輸入 heroku version 若回應所使用的版本表示上述路徑設定已經成功。 \n 步驟六 : \xa0 ( 設定 heroku 代理主機 ) 先前我們已經知道網路的應用包含 client 與 server，不同 client 採用不同的 proxy 設定與 server 連線，其中 firefox 作為 WWW 網路協定的 client，有其自己的網路 Proxy 設定，也可以直接使用操作系統的 Proxy 設定。 \n Chrome 作為 WWW 網路協定的 client，目前 Windows 下的最新版，只能使用操作系統的 Proxy 設定。 \n 而 git 作為 git client 與 github server 連線的 Proxy 設定，則寫在 y:\\home_ipv6 下的 .giconfig 中，\xa0 以 git config --global http.proxy "http://your_proxy:port" 進行設定。 \n 相同的道理 heroku cli 作為 \xa0 https://heroku.com \xa0 伺服器的 client 端, 也有其 Proxy 的設定方式, 也就是在 start_ipv6.bat 中加入: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n REM \xa0 for \xa0 heroku login \n set HTTP_PROXY=http: //[2001:288:6004:17::53]:3128 \n set HTTPS_PROXY=http: //[2001:288:6004:17::53]:3128 \n \n \n \n \n \n \n \n 步七驟 : \xa0 ( 設定同步倉儲 ) 利用 Heroku 同步 Github Pages 上的網站內容，只需透過 git remote add (Heroku 指令為 heroku git:remote -a heroku_倉儲_名稱，之後只要在 heroku login 狀態下，可以直接利用 git push) 在近端設定一個連線到 Heroku 倉儲的代號，就能在每次更新 Github Pages 倉儲後，順便將內容同步至 Heroku。網際內容管理課程將使用兩種 Heroku app 設定，也就是靜態網頁與動態網頁: \n 靜態網頁 - 採用 php 方式部署, 讓 Heroku 將靜態網頁視為 PHP 程式, 利用 index.php 跳轉到 index.html \n 動態網頁 - 讓 Heroku 執行 cmsimde/wsgi.py 的方式進行雲端伺服. \n 步驟八 : \xa0 ( 以 git 進行提交推送 ) 利用 heroku git:remote -a 設定的同步倉儲其推送名稱內定為 "heroku"，使用者只要使用 git push heroku 就可將改版內容推送到對應的 Heroku app 倉儲。 \n 指令操作步驟: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n # 以 interactive 模式登入 Heroku, 完成後產生 y:\\home_ipv6\\_netrc \n heroku login \xa0 - i \n # 針對已經登入的 Heroku 帳號下的 taiwan-01 app, 設為此倉儲的 remote 同步倉儲, 且在倉儲中會自建名稱為 heroku 的 remoate site. \n heroku git:remote \xa0 - a taiwan - no1 \n \n \n \n \n \n \n \n 上述步驟完成後的 Heroku 網站: \xa0 https://taiwan-no1.herokuapp.com \n', 'tags': '', 'url': 'Heroku 網站.html'}, {'title': '網路直播', 'text': '步驟一:建立一個頻道之後點選「你的頻道」。 \n \n 步驟二:進入頻道之後再點選「進行直播」。 \n \n 步驟三:因為是第一次啟用直播功能，所以它會說目前無法使用直播功能，這個時候只要點選啟用進行手機認證，再過24小時之後就可以啟用此功能了。 \n \n 步驟四:過了24小時之後隨時都可以直播。 \n \n', 'tags': '', 'url': '網路直播.html'}, {'title': 'RoboDK 執行', 'text': '', 'tags': '', 'url': 'RoboDK 執行.html'}]};