-- Insert data into product_category
INSERT INTO product_category (id, category_name) VALUES (1, 'Books');

-- Insert data into country
INSERT INTO country (id, code, name) VALUES (1, 'BR', 'Brazil');

-- Insert data into state
INSERT INTO state (id, name, country_id) VALUES (1, 'Acre', 1);

-- Insert data into product
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created) VALUES ('BOOK-TECH-1000', 'JavaScript - The Fun Parts', 'Learn JavaScript', 'changelog/images/placeholder.png', true, 100, 19.99, 1, NOW());
