import scrapy
from ..items import ChristItem
from urllib import request as ulreq
from PIL import ImageFile
 
def getsizes(uri):
    # get file size *and* image size (None if not known)
    file = ulreq.urlopen(uri)
    size = file.headers.get("content-length")
    if size: 
        size = int(size)
    p = ImageFile.Parser()
    while True:
        data = file.read(1024)
        if not data:
            break
        p.feed(data)
        if p.image:
            return size, p.image.size
            break
    file.close()
    return(size, None)

class ChristSpider(scrapy.Spider):
    name = 'christ_prod'
    page_number = 2
    start_urls = ['https://www.christ.de/category/damenschmuck/index.html']
    

    def parse(self, response):
        items = ChristItem()
       # product_name = response.xpath('/html/body/main/section/div/div[2]/div[6]/div/meta[2]').attrib['content']
        rating = []
        products_rating = response.css('.product-tile')
        for rates in products_rating:
            rat = rates.css('.product-tile__rating span').css('::text').get()
            rating.append(rat)
        #items['product_name'] = product_name
        ii = -1
        products = response.css('.product-tile__image::attr(href)').getall()
        for links in products:
            ii += 1
            new_url = "https://www.christ.de" + str(links)
            yield scrapy.Request(new_url, callback=self.parse_eachProduct, meta={'rating': rating[ii]})

        next_page = 'https://www.christ.de/category/damenschmuck/index.html?page=' + str(ChristSpider.page_number) + '#product-grid'
        if ChristSpider.page_number <= 3:
            ChristSpider.page_number += 1
            yield response.follow(next_page, callback = self.parse)
            
    def parse_eachProduct(self, response):
        items = ChristItem()
        

        product_link = response.url
        product_name = response.css('.d-lg-inline-block').css('::text').get()
        product_keywords = response.css('.mb-xs').css('::text').get()
        product_price = response.css('.price meta:nth-child(2)::attr(content)').get()
        product_image = response.css('.gallery__thumbs-button::attr(src)').get()
        if (product_image == None):
            product_image = response.css('.swiper-slide-thumb-active::attr(src)').get()
        product_image_res = getsizes(str(product_image))
        
        


        items['product_root'] = "Christ"
        items['product_link'] = product_link
        items['product_name'] = product_name
        items['product_keywords'] = product_keywords
        items['product_price'] = product_price
        items['product_image'] = product_image
        items['product_image_res'] = product_image_res
        items['product_rating'] = response.meta.get('rating')
        return items

        

        
            
        
