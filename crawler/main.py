import requests
from bs4 import BeautifulSoup


url = "https://www.amazon.de/s?k=schmuck+damen&sprefix=Schmuck+%2Caps%2C74&ref=nb_sb_ss_ts-doa-p_1_8"
headers = {"User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0'}


source_code = requests.get(url, headers=headers)
soup = BeautifulSoup(source_code.content, 'html.parser')
for numm in soup.findAll("div",{"class":"a-row a-size-base a-color-secondary"}):
    print(numm.h5)
#for link in soup.findAll('div', {'class': 'grid-product__title'}):
#    title = link.text
#    print(title)
# sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20
