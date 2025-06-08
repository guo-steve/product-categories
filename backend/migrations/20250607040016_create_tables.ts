import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.raw(
    `
-- Create category table with self-referencing hierarchy
CREATE TABLE category (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    parent_id BIGINT REFERENCES category(id) ON DELETE CASCADE
);

--- Create attribute value type
CREATE TABLE attribute_value_type (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

-- Create attribute table for global/direct/inherited attributes
CREATE TABLE attribute (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    attribute_value_type_id BIGINT NOT NULL REFERENCES attribute_value_type(id) ON DELETE CASCADE,
    created_on TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_on TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Junction table linking attributes to categories (direct links only)
CREATE TABLE attribute_link (
    attribute_id BIGINT NOT NULL REFERENCES attribute(id) ON DELETE CASCADE,
    category_id BIGINT NOT NULL REFERENCES category(id) ON DELETE CASCADE,
    PRIMARY KEY (attribute_id, category_id)
);

-- Create product table linked to leaf categories
CREATE TABLE product (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id BIGINT NOT NULL REFERENCES category(id) ON DELETE CASCADE
);

-- Store product attribute values
CREATE TABLE product_attribute_value (
    product_id BIGINT NOT NULL REFERENCES product(id) ON DELETE CASCADE,
    attribute_id BIGINT NOT NULL REFERENCES attribute(id) ON DELETE CASCADE,
    value JSONB NOT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_on TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (product_id, attribute_id)
);
    `,
  )
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema
    .dropTableIfExists('product_attribute_value')
    .dropTableIfExists('product')
    .dropTableIfExists('attribute_link')
    .dropTableIfExists('attribute')
    .dropTableIfExists('attribute_value_type')
    .dropTableIfExists('category')
}
