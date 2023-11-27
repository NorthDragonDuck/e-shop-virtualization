-- Insert data into product_category
INSERT INTO product_category (slug, category_name) VALUES
    ('gym-books', 'GYM BOOKS'),
    ('equipment', 'EQUIPMENT'),
    ('clothes', 'CLOTHES'),
    ('gear', 'GEAR'),
    ('shoes', 'SHOES');


-- Insert data into country
INSERT INTO country (id, code, name) VALUES
    (1, 'BR', 'Brazil'),
    (2, 'US', 'Lithuania'),
    (3, 'NG', 'Nigeria'),
    (4, 'IR', 'Ireland'),
    (5, 'SE', 'Sweden');

-- Insert data into state
INSERT INTO state (id, name, country_id) VALUES
    (1, 'Acre', 1),
    (2, 'Kaunas', 2),
    (3, 'Lagos', 3),
    (4, 'Dublin', 4),
    (5, 'Stockholm', 5);

-- Insert data into product
-- Insert data into product for each category with SKUs generated from the product name
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_slug, date_created) VALUES
-- GYM BOOKS

    ('fitness-fundamentals', 'Fitness Fundamentals', 'A guide to fundamental gym workouts', './assets/images/products/fitness-fundamentals.png', true, 150, 29.99, 'gym-books', NOW()),
    ('body-building-basics', 'Body Building Basics', 'Learn about body building techniques', './assets/images/products/body-building-basics.png', true, 100, 39.99, 'gym-books', NOW()),
    ('yoga-for-beginners', 'Yoga for Beginners', 'Start your journey with yoga', './assets/images/products/yoga-for-beginners.png', true, 200, 19.99, 'gym-books', NOW()),

-- EQUIPMENT
    ('pro-treadmill', 'Pro Treadmill', 'High-end treadmill for professionals', './assets/images/products/pro-treadmill.png', true, 30, 799.99, 'equipment', NOW()),
    ('set-of-dumbbells', 'Set of Dumbbells', 'A set of variable-weight dumbbells', './assets/images/products/set-of-dumbbells.png', true, 200, 49.99, 'equipment', NOW()),
    ('eco-friendly-yoga-mat', 'Eco-friendly Yoga Mat', 'Eco-friendly yoga mat', './assets/images/products/yoga-mat.png', true, 150, 19.99, 'equipment', NOW()),

-- CLOTHES
    ('comfortable-mens-tshirt', 'Comfortable Men’s T-Shirt', 'Comfortable men’s workout t-shirt', './assets/images/products/men-tshirt.png', true, 200, 15.99, 'clothes', NOW()),
    ('stylish-womens-tank-top', 'Stylish Women’s Tank Top', 'Stylish women’s tank top', './assets/images/products/women-tanktop.png', true, 150, 25.99, 'clothes', NOW()),
    ('workout-leggings', 'Workout Leggings', 'Flexible and durable workout leggings', './assets/images/products/leggings.png', true, 100, 35.99, 'clothes', NOW()),

-- GEAR
    ('durable-workout-gloves', 'Durable Workout Gloves', 'Durable leather workout gloves', './assets/images/products/workout-gloves.png', true, 150, 19.99, 'gear', NOW()),
    ('supportive-weightlifting-belt', 'Supportive Weightlifting Belt', 'Supportive weightlifting belt', './assets/images/products/weightlifting-belt.png', true, 75, 29.99, 'gear', NOW()),
    ('heavy-duty-lifting-straps', 'Heavy-Duty Lifting Straps', 'Heavy-duty lifting straps', './assets/images/products/lifting-straps.png', true, 200, 9.99, 'gear', NOW()),

-- SHOES
    ('lightweight-mens-running-shoes', 'Lightweight Men’s Running Shoes', 'Lightweight men’s running shoes', './assets/images/products/men-running-shoes.png', true, 100, 59.99, 'shoes', NOW()),
    ('breathable-womens-running-shoes', 'Breathable Women’s Running Shoes', 'Breathable women’s running shoes', './assets/images/products/women-running-shoes.png', true, 100, 59.99, 'shoes', NOW()),
    ('versatile-training-shoes', 'Versatile Training Shoes', 'Versatile training shoes', './assets/images/products/trainer-shoes.png', true, 150, 49.99, 'shoes', NOW());
;