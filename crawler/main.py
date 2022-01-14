import requests
from bs4 import BeautifulSoup

def schmuck_spyder(max_pages):
    url = 'https://headwatches.com/collections/moscow'
    source_code = requests.get(url)
    plain_text = source_code.text
    soup = BeautifulSoup(plain_text)
    for link in soup.findAll('div', {'class': 'grid-product__title'}):
        title = link.text
        print(title)
schmuck_spyder(1)