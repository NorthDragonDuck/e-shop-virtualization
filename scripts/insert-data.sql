-- Insert data into product_category
INSERT INTO product_category (id, category_name) VALUES
    (1, 'Gym Books'),
    (2, 'Equipments'),
    (3, 'Wears'),
    (4, 'Gears'),
    (5, 'Shoes');


-- Insert data into country
INSERT INTO country (id, code, name) VALUES
    (1, 'BR', 'Brazil'),
    (2, 'US', 'Lithuania'),
    (3, 'NG', 'Nigeria'),
    (4, 'IR', 'Ireland'),
    (5, 'SWE', 'Sweden');

-- Insert data into state
INSERT INTO state (id, name, country_id) VALUES
    (1, 'Acre', 1),
    (2, 'Kaunas', 2),
    (3, 'Lagos', 3),
    (4, 'Dublin', 4),
    (5, 'Stockholm', 5);

-- Insert data into product
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id, date_created) VALUES
    ('BOOK-GYM-1000', 'Just do it! - The Fun Parts', 'Learn JavaScript', './images/book.png', true, 100, 19.99, 1, NOW()),
    ('ELEC-Bicycle-2000', 'Smart XYZ', 'High-end max leg-day', './images/bike.png', true, 50, 699.99, 2, NOW()),
    ('CLOTH-TSHIRT-3000', 'liverpool T-Shirt', 'LFC Jersey', './images/jersey.png', true, 200, 12.99, 3, NOW()),
    ('Helmet', 'dirt-bike helmet T-Shirt', 'Helmet lightweight', './images/helmet.png', true, 200, 12.99, 3, NOW()),
    ('Adidas', 'Adidas 360', 'Adidas Macro X5', './images/shoes.png', true, 200, 12.99, 3, NOW());

;
