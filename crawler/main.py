import requests
from bs4 import BeautifulSoup

class ObjProducts:
    def __init__(self,id, link, name, image, price, rating):
        self.id = id
        self.link = link
        self.name = name
        self.image = image
        self.price = price
        self.rating = rating
        
def amaz_damen():
    urlHome = "https://www.amazon.de/s?k=damen+schmuck&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3GVTPT1NU38C8&sprefix=damen+schmuck%2Caps%2C130&ref=nb_sb_noss"
    headers = {"User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0'}
    soupHome = BeautifulSoup(requests.get(urlHome, headers=headers).content, 'html.parser')
    nextPage = soupHome.findAll("a",{"class":"s-pagination-item s-pagination-button"})
    products = []
    for numm in soupHome.findAll("a",{"class":"a-link-normal s-no-outline"}):
            products.append(numm.get("href").strip())
    page = 0
    while page <=0:
        url = "https://www.amazon.de/"+str(nextPage[page].get("href"))
        soup = BeautifulSoup(requests.get(url, headers=headers).content,'html.parser')
        for numm in soup.findAll("a",{"class":"a-link-normal s-no-outline"}):
            products.append(numm.get("href").strip())
        page += 1
        
    products= list(dict.fromkeys(products))
    productInfo = []
    productID = 0
    counter = 0
    for link in products:
        productURL = "https://www.amazon.de/"+str(link)
        productSoup = BeautifulSoup(requests.get(productURL, headers=headers).content,'html.parser')
        productName = productSoup.find("span",{"id":"productTitle"}).text.strip()
        productImage = productSoup.find("img",{"id":"landingImage"}).get("src").strip()
        productPrice = productSoup.find("span",{"class":"a-price"}).span.text.strip()
        productRating = productSoup.find("span",{"class":"a-icon-alt"}).text[0:3].strip()
        productInfo.append(ObjProducts(productID, productURL, productName, productImage, productPrice, productRating))
        productID += 1
        #print(productInfo[counter].price +" ====>   "+ productInfo[counter].link+" ====>   "+productInfo[counter].rating)
        print(productInfo[counter].image)
        print(" ")
        print(" ")
        counter += 1
amaz_damen()
