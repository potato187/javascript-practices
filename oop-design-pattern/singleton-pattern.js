let instance = null;

class Singleton {
	constructor() {
		if (!instance) {
			instance = this;
		} else {
			return instance;
		}
	}
}

const SingletonA = new Singleton();
const SingletonB = new Singleton();

console.log(SingletonA == SingletonB);
