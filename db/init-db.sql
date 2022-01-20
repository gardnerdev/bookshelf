GRANT ALL PRIVILEGES ON DATABASE postgres TO postgres;

DROP SCHEMA public CASCADE;
CREATE SCHEMA public;


CREATE TYPE rating_type as ENUM('0', '1', '2', '3', '4', '5');
CREATE TYPE category_type as ENUM('drama', 'history', 'romance', 'lifestyle', 'business', 'gardening');

CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR (255),
    description VARCHAR (255),
    price DECIMAL(12,2),
    image_url VARCHAR (255),
    rating rating_type,
    caregory category_type,
    pages INT
);
