import requests
from bs4 import BeautifulSoup, SoupStrainer
import lxml


class ObjProducts:
    def __init__(self,id, link, image, price, rating):
        self.id = id
        self.link = link
        #self.name = name
        self.image = image
        self.price = price
        self.rating = rating
        
def amaz_damen():
    urlHome = "https://www.amazon.de/s?k=damen+schmuck&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3GVTPT1NU38C8&sprefix=damen+schmuck%2Caps%2C130&ref=nb_sb_noss"
    headers = {"User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0'}
    strainer1 = SoupStrainer('div',attrs={'class': 's-main-slot s-result-list s-search-results sg-row'})
    soupHome = BeautifulSoup(requests.get(urlHome, headers=headers).content, 'lxml', parse_only=strainer1)
    nextPage = soupHome.findAll("a",{"class":"s-pagination-item s-pagination-button"})
    products = []
    for product in soupHome.findAll("div",{"class":"s-card-container s-overflow-hidden s-expand-height s-include-content-margin s-latency-cf-section s-card-border"}):
          
    
    #while page <=0:
    #    url = "https://www.amazon.de/"+str(nextPage[page].get("href"))
    #    strainer2 = SoupStrainer('span',attrs={"class":"s-pagination-strip"})
    #    soup = BeautifulSoup(requests.get(url, headers=headers).content,'lxml', parse_only=strainer2)
    #    for numm in soup.findAll("a",{"class":"a-link-normal s-no-outline"}):
    #        products.append(numm.get("href").strip())
    #    page += 1
       
        #productName = productSoup.find("span",{"id":"productTitle"}).text.strip()
        productImage = productSoup.find("img",{"id":"landingImage"}).get("src").strip()
        productPrice = productSoup.find("span",{"class":"a-price"}).span.text.strip()
        productRating = productSoup.find("span",{"class":"a-icon-alt"}).text[0:3].strip()
        productInfo.append(ObjProducts(counter, productURL, productImage, productPrice, productRating))
        print(str(productInfo[counter].id) +" ====>   "+ productInfo[counter].link+" ====>   "+productInfo[counter].rating)
        print(" ")
        print(" ")
        counter += 1
amaz_damen()
