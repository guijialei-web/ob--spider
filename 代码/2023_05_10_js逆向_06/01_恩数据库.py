import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")

import execjs
import requests

f = open("en.js", mode="r", encoding="utf-8")
js_code = f.read()
f.close()

js = execjs.compile(js_code)

url = "https://www.endata.com.cn/API/GetData.ashx"
data = {
    "year": "2014",
    "MethodName": "BoxOffice_GetYearInfoData"
}

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
}
resp = requests.post(url, data=data, headers=headers)

ret = js.call("shell", resp.text)
print(ret)
# 剩下的事情就是汪峰了.
