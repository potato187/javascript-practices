class Product {
	constructor({ name, price, quality }) {
		this.name = name;
		this.price = price;
		this.quality = quality;
	}
}

class ProductBuilder {
	constructor() {
		this.name = '';
		this.price = 0;
		this.quality = 0;
	}

	setName(name) {
		this.name = name;
		return this;
	}

	setPrice(price) {
		this.price = price;
		return this;
	}

	setQuality(quality) {
		this.quality = quality;
		return this;
	}

	build() {
		return new Product(this);
	}
}

const builder = new ProductBuilder();
const iphone = builder.setName('IPhone 15').setPrice(15000000).setQuality(10).build();
