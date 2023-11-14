#
from Crypto.Cipher import DES
from Crypto.Util.Padding import unpad
import binascii
import json
import requests
# https://www.endata.com.cn/BoxOffice/BO/Year/index.html

def fn(a, b, c):
    if 0 == b:
        return a[c:]
    ret = '' + a[:b]
    ret += a[b + c:]
    return ret


def shell(data):
    a = int(data[-1], 16) + 9
    b = int(data[a], 16)
    data = fn(data, a, 1)
    a = data[b: b+8]
    data = fn(data, b, 8)


    des = DES.new(key=a.encode("utf-8"), mode=DES.MODE_ECB)
    ming = des.decrypt(binascii.a2b_hex(data))
    ming = unpad(ming, 8).decode("utf-8")
    return ming[:ming.rindex("}")+1]


def get_data(year):
    # while 1: # 新手小白们, 注意, 这里尽量不要这么干..
    for i in range(5):  # 优雅一些...
        url = "https://www.endata.com.cn/API/GetData.ashx"
        data = {
            "year": str(year),
            "MethodName": "BoxOffice_GetYearInfoData"
        }
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
        }
        resp = requests.post(url, data=data, headers=headers)
        try:
            ret = shell(resp.text)
            ret = json.loads(ret)
            return ret
        except binascii.Error as e:
            # 重新请求即可. 没必要去处理数据(出现频率并不高)
            continue


print(get_data(2009))
print(get_data(2010))
# 后面就是汪峰的事情了..
#
# import binascii
#
# s = "我爱你"
#
# bs = s.encode("utf-8")
#
# print(bs)  # 9个字节
# print(len(bs))
#
# hex_str = binascii.b2a_hex(bs).decode()
# print(hex_str)
# print(len(hex_str))  # 18位
