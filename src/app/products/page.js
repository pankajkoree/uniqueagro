import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/data'

export default function ProductsPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(p => <ProductCard key={p.id} {...p} />)}
      </div>
    </div>
  )
}
