class SmartPhone {
	constructor(payload) {
		this.name = payload.name;
		this.colors = payload.colors;
	}
}

class Electronic {
	constructor(payload) {
		this.brand = payload.brand;
		this.model = payload.model;
	}
}

class ProductFactory {
	static productRegistry = {};
	static registryProductType(type, classRef) {
		ProductFactory.productRegistry[type] = classRef;
	}

	static getProductClass(type) {
		const ProductClass = ProductFactory.productRegistry[type];
		if (!ProductClass) {
			throw new Error(`${type} is invalid type product.`);
		}
		return ProductClass;
	}

	static createProduct(type, payload) {
		const ProductClass = ProductFactory.getProductClass(type);
		return new ProductClass(payload);
	}
}

ProductFactory.registryProductType('smart_phone', SmartPhone);
ProductFactory.registryProductType('electronic', Electronic);

const Iphone = ProductFactory.createProduct('smart_phone', { name: 'Iphone 15 ProMax', colors: ['black', 'pink'] });
const WallFan = ProductFactory.createProduct('electronic', { brand: 'SENKO', model: 'TC1626' });

console.log(Iphone, WallFan);
