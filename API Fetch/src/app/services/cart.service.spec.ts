import { CartService } from './cart.service';
import { Product } from '../models/product';

const product: Product = {
  id: 1, title: 'Test product', description: 'Description', thumbnail: '/product.png',
  price: 12.35, stock: 3, category: 'test', rating: 4, images: [],
};

describe('CartService', () => {
  let cart: CartService;

  beforeEach(() => { cart = new CartService(); });

  it('updates existing quantities without duplicating products and recalculates totals', () => {
    cart.setProduct(product, 1);
    cart.setProduct(product, 2);
    cart.setProduct({ ...product, id: 2, price: 0.1 }, 3);
    expect(cart.items()).toHaveLength(2);
    expect(cart.totalQuantity()).toBe(5);
    expect(cart.totalPrice()).toBe(25);
  });

  it('limits quantities to stock in both the detail and cart flows', () => {
    cart.setProduct(product, 100);
    cart.changeQuantity(product.id, 1);
    expect(cart.items()[0].quantity).toBe(3);
    cart.setProduct({ ...product, id: 2, stock: 0 }, 1);
    cart.setProduct({ ...product, id: 3 }, Number.NaN);
    expect(cart.items()).toHaveLength(1);
  });

  it('removes items at zero and supports explicit removal', () => {
    cart.setProduct(product, 1);
    cart.changeQuantity(product.id, -1);
    expect(cart.items()).toEqual([]);
    cart.setProduct(product, 2);
    cart.remove(product.id);
    expect(cart.totalQuantity()).toBe(0);
    expect(cart.totalPrice()).toBe(0);
  });
});
