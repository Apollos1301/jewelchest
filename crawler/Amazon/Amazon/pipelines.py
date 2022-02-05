# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import mysql.connector

class AmazonPipeline:
    def __init__(self):
        self.create_connection()
        self.create_table()

    def create_connection(self):
        self.conn = mysql.connector.connect(
            host = 'localhost',
            user = 'root',
            passwd = 'Baghali619?btin',
            database = 'myprods'
        )
        self.curr = self.conn.cursor()

    def create_table(self):
        self.curr.execute("""DROP TABLE IF EXISTS products""")
        self.curr.execute("""create table products(
            link text,
            name text,
            price text,
            rating text,
            image text,
            keywords text
        )""")


    def process_item(self, item, spider):
        self.store_db(item)
        return item

    def store_db(self, item):
        self.curr.execute("""insert into products values (%s,%s,%s,%s,%s,%s)""",(
            item['product_link'][0],
            item['product_name'][0],
            item['product_price'][0],
            item['product_rating'][0],
            item['product_image'][0],
            item['product_keywords'][0]
        ))
        self.conn.commit()
