'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/hooks/use-cart'
import { ChevronRight, ShoppingBag, Lock } from 'lucide-react'

export default function CheckoutPage() {
  const { cart, itemCount, subtotal, total, isLoading } = useCart()

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount / 100)

  const hasItems = cart?.items && cart.items.length > 0

  return (
    <>
      <div className="border-b">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">Checkout</span>
          </nav>
        </div>
      </div>

      <div className="container-custom py-8 lg:py-12">
        <h1 className="text-h2 font-heading font-semibold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16">
          {/* Form */}
          <div className="space-y-8">
            {/* Contact */}
            <section>
              <h2 className="text-xs uppercase tracking-widest font-semibold mb-4">Contact</h2>
              <input
                type="email"
                placeholder="Email address"
                className="w-full border-b border-foreground/20 bg-transparent px-0 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
              />
            </section>

            {/* Shipping */}
            <section>
              <h2 className="text-xs uppercase tracking-widest font-semibold mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border-b border-foreground/20 bg-transparent px-0 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border-b border-foreground/20 bg-transparent px-0 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="col-span-2 border-b border-foreground/20 bg-transparent px-0 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border-b border-foreground/20 bg-transparent px-0 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Postal code"
                  className="border-b border-foreground/20 bg-transparent px-0 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="State / Province"
                  className="border-b border-foreground/20 bg-transparent px-0 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  className="border-b border-foreground/20 bg-transparent px-0 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                />
              </div>
            </section>

            {/* Shipping Method */}
            <section>
              <h2 className="text-xs uppercase tracking-widest font-semibold mb-4">Shipping Method</h2>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-4 border rounded-sm cursor-pointer hover:border-foreground transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="shipping" defaultChecked className="accent-foreground" />
                    <div>
                      <p className="text-sm font-medium">Standard Shipping</p>
                      <p className="text-xs text-muted-foreground">5-7 business days</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">Free</span>
                </label>
                <label className="flex items-center justify-between p-4 border rounded-sm cursor-pointer hover:border-foreground transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="shipping" className="accent-foreground" />
                    <div>
                      <p className="text-sm font-medium">Express Shipping</p>
                      <p className="text-xs text-muted-foreground">2-3 business days</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">$12.00</span>
                </label>
              </div>
            </section>

            {/* Payment */}
            <section>
              <h2 className="text-xs uppercase tracking-widest font-semibold mb-4">Payment</h2>
              <div className="border rounded-sm p-6 text-center text-muted-foreground">
                <Lock className="h-5 w-5 mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-sm">Payment integration coming soon</p>
                <p className="text-xs mt-1">Stripe, PayPal, and more</p>
              </div>
            </section>

            {/* Place Order */}
            <button
              disabled
              className="w-full bg-foreground text-background py-4 text-sm font-semibold uppercase tracking-wide opacity-50 cursor-not-allowed"
            >
              Place Order
            </button>
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-24 border rounded-sm p-6">
              <h2 className="text-xs uppercase tracking-widest font-semibold mb-6">Order Summary</h2>

              {isLoading ? (
                <div className="space-y-3 animate-pulse">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex gap-3">
                      <div className="h-16 w-14 bg-muted rounded-sm" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3 w-2/3 bg-muted rounded" />
                        <div className="h-3 w-1/3 bg-muted rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : !hasItems ? (
                <div className="text-center py-8">
                  <ShoppingBag className="mx-auto h-8 w-8 text-muted-foreground/40" strokeWidth={1.5} />
                  <p className="mt-3 text-sm text-muted-foreground">Your bag is empty</p>
                  <Link href="/products" className="mt-3 inline-block text-sm font-semibold underline underline-offset-4">
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.items?.map((item: any) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="relative h-16 w-14 flex-shrink-0 overflow-hidden bg-muted rounded-sm">
                          {item.thumbnail ? (
                            <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
                          ) : (
                            <div className="flex h-full items-center justify-center text-muted-foreground/30">
                              <ShoppingBag className="h-4 w-4" />
                            </div>
                          )}
                          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[9px] font-bold text-background">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.title}</p>
                          {item.variant?.title && item.variant.title !== 'Default' && (
                            <p className="text-xs text-muted-foreground">{item.variant.title}</p>
                          )}
                        </div>
                        <p className="text-sm font-medium">{formatPrice(item.unit_price)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-muted-foreground">Calculated</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span className="font-semibold">Total</span>
                      <span className="font-heading text-lg font-semibold">{formatPrice(total)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
