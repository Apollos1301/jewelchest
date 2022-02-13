from numpy import product
import scrapy
from ..items import AmazonItem
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

class AmazonProdSpider(scrapy.Spider):
    name = 'amazon_prod'
    page_number = 2
    start_urls = [
        'https://www.amazon.de/s?k=damen+schmuck&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=QRRIYW4AU9EF&sprefix=damen+schmuck%2Caps%2C111&ref=nb_sb_noss_1'
        ]

    def parse(self, response):
        

        products = response.css('.s-widget-spacing-small .sg-col-inner')
        for prod in products:
            link = prod.css('.a-link-normal::attr(href)').get()
            new_url = 'https://www.amazon.de' + str(link)
            product_image = prod.css('.s-image::attr(src)').get()
            product_rating = prod.css('.a-icon-alt').css('::text').get()
            if (product_rating != None):
                product_rating = product_rating[0:3]
            product_image_res = getsizes(str(product_image))
            yield scrapy.Request(new_url, callback=self.parse_eachProduct,meta={'rating': product_rating, 'image': product_image, 'img_res': product_image_res})
        next_page = 'https://www.amazon.de/s?k=damen+schmuck&page=' + str(AmazonProdSpider.page_number) + '&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=QRRIYW4AU9EF&qid=1642799319&sprefix=damen+schmuck%2Caps%2C111&ref=sr_pg_2'
        if AmazonProdSpider.page_number <= 3:
            AmazonProdSpider.page_number += 1
            yield response.follow(next_page, callback = self.parse)


    def parse_eachProduct(self, response):
        items = AmazonItem()

        product_info_section = response.css('#technicalSpecifications_section_1')

        infos = product_info_section.css('tr')
        for info in infos:
            infos = info.css('th').css('::text').get().strip().lower()
            if(infos == "marke"):
                product_name = info.css('td').css('::text').get().strip()
            if(infos == "material"):
                product_material = info.css('td').css('::text').get().strip()
                #product_name = info.css('td').css('::text').get().strip()
        product_keywords = response.css('#productTitle').css('::text').get().strip()
        price = response.css('.a-offscreen').css('::text').get()
        product_price = price.replace("€","")
        


        items['product_root'] = "Amazon"
        items['product_link'] = response.url
        items['product_name'] = product_name
        items['product_keywords'] = product_keywords
        items['product_price'] = product_price
        items['product_image'] = response.meta.get('image')
        items['product_rating'] = response.meta.get('rating')
        items['product_image_res'] = response.meta.get('img_res')
        items['product_marke'] = product_name
        items['product_material'] = product_material
        items['product_farbe'] = None
        return items

        
