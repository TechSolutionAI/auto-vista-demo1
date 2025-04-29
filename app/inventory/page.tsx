import { Suspense } from "react"
import { InventoryFilters } from "@/components/inventory-filters"
import { InventoryList } from "@/components/inventory-list"
import { InventorySkeleton } from "@/components/inventory-skeleton"

export default function InventoryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Vehicle Inventory</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <InventoryFilters />
        </div>
        <div className="md:col-span-3">
          <Suspense fallback={<InventorySkeleton />}>
            <InventoryList searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
