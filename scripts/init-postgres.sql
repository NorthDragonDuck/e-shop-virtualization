-- Create product_category table
CREATE TABLE product_category (
    id BIGSERIAL PRIMARY KEY,
    category_name VARCHAR(255)
);

-- Create product table
CREATE TABLE product (
    id BIGSERIAL PRIMARY KEY,
    sku VARCHAR(255),
    name VARCHAR(255),
    description VARCHAR(255),
    unit_price DECIMAL(13,2),
    image_url VARCHAR(255),
    active BOOLEAN DEFAULT true,
    units_in_stock INT,
    date_created TIMESTAMP,
    last_updated TIMESTAMP,
    category_id BIGINT NOT NULL REFERENCES product_category(id)
);

-- Create country table
CREATE TABLE country (
    id SMALLINT PRIMARY KEY,
    code VARCHAR(2),
    name VARCHAR(255)
);

-- Create state table
CREATE TABLE state (
    id SMALLINT PRIMARY KEY,
    name VARCHAR(255),
    country_id SMALLINT NOT NULL REFERENCES country(id)
);

-- Create address table
CREATE TABLE address (
    id BIGSERIAL PRIMARY KEY,
    city VARCHAR(255),
    country VARCHAR(255),
    state VARCHAR(255),
    street VARCHAR(255),
    zip_code VARCHAR(255)
);

-- Create customer table
CREATE TABLE customer (
    id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255)
);

-- Create orders table
CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    order_tracking_number VARCHAR(255),
    total_price DECIMAL(19,2),
    total_quantity INT,
    billing_address_id BIGINT REFERENCES address(id),
    customer_id BIGINT REFERENCES customer(id),
    shipping_address_id BIGINT REFERENCES address(id),
    status VARCHAR(128),
    date_created TIMESTAMP,
    last_updated TIMESTAMP
);

-- Create order_item table
CREATE TABLE order_item (
    id BIGSERIAL PRIMARY KEY,
    image_url VARCHAR(255),
    quantity INT,
    unit_price DECIMAL(19,2),
    order_id BIGINT NOT NULL REFERENCES orders(id),
    product_id BIGINT NOT NULL REFERENCES product(id)
);
