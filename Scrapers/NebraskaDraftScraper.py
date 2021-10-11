from bs4 import BeautifulSoup # parse html
import requests # get url data
from pprint import pprint # because pretty :)

query = "mid century modern living room chair".replace(" ","+") # trying this query for now
# query = input("Enter your query:  ").replace(" ","+") # uncomment to run this instead

urlparts = ["https://www.nfm.com/", "search?q=", "&lang=en_US&sz=12"] # set default number of returned items to 12
# by default the query will sort by 'recommended', which is best for our purposes
url = urlparts[0] + urlparts[1] + query + urlparts[2]
print(url)

soup = BeautifulSoup(requests.get(url).text,features="html.parser") # soup parses requests' return
itemDict = {}
rawTitles = soup.find_all("div", {"class": "pdp-link"}) # raw: titles can be extracted from this tagset
rawLinks = soup.find_all("div", {"class": "image-container"}) # raw: links can be extracted from this tagset
for num in range(min(len(rawLinks), len(rawTitles))): # makes sure it doesn't go above returned number, max 12
    itemDict[rawTitles[num].a.contents[0]] = urlparts[0] + rawLinks[num].a.get("href") # title : link
pprint(itemDict)