export interface CartItem {
  id: number
  name: string
  genre: string
  price: number
  imageUrl: string
  quantity: number
  isNew?: boolean;
}

export interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

export interface CartContextType {
  cart: CartState
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (itemId: number) => void
  clearCart: () => void
}

