# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class AmazonItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()

    product_root = scrapy.Field()
    product_link = scrapy.Field()
    product_name = scrapy.Field()
    product_price = scrapy.Field()
    product_rating = scrapy.Field()
    product_image = scrapy.Field()
    product_image_res = scrapy.Field()
    product_keywords = scrapy.Field()
    product_marke = scrapy.Field()
    product_material = scrapy.Field()
    product_farbe = scrapy.Field()
    



    pass

class ChristItem(scrapy.Item):
    product_root = scrapy.Field()
    product_link = scrapy.Field()
    product_name = scrapy.Field()
    product_price = scrapy.Field()
    product_rating = scrapy.Field()
    product_image = scrapy.Field()
    product_image_res = scrapy.Field()
    product_keywords = scrapy.Field()
    product_marke = scrapy.Field()
    product_material = scrapy.Field()
    product_farbe = scrapy.Field()

    pass