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
        items = AmazonItem()

        products = response.css('.s-widget-spacing-small .sg-col-inner')
        for prod in products:
            product_name = prod.css('.s-line-clamp-1 .a-color-base').css('::text').get()
            product_keywords = prod.css('.a-size-base-plus.a-text-normal').css('::text').get()
            product_link = prod.css('.a-link-normal::attr(href)').get()
            product_price = prod.css('.a-price-whole::text').get()
            product_image = prod.css('.s-image::attr(src)').get()
            product_rating = prod.css('.a-icon-alt').css('::text').get()
            if (product_rating != None):
                product_rating = product_rating[0:3]
            product_image_res = getsizes(str(product_image))

            items['product_root'] = "Amazon"
            items['product_link'] = 'https://www.amazon.de' + str(product_link)
            items['product_name'] = product_name
            items['product_keywords'] = product_keywords
            items['product_price'] = product_price
            items['product_image'] = product_image
            items['product_rating'] = product_rating
            items['product_image_res'] = product_image_res
            yield items

        next_page = 'https://www.amazon.de/s?k=damen+schmuck&page=' + str(AmazonProdSpider.page_number) + '&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=QRRIYW4AU9EF&qid=1642799319&sprefix=damen+schmuck%2Caps%2C111&ref=sr_pg_2'
        if AmazonProdSpider.page_number <= 3:
            AmazonProdSpider.page_number += 1
            yield response.follow(next_page, callback = self.parse)
