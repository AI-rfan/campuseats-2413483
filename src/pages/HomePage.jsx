import VendorCard from '../components/VendorCard.jsx'
import { ErrorMessage, Loading } from '../components/Status.jsx'
import { useVendors } from '../hooks/useVendor.js'

function HomePage() {
  const { vendors, loading, error, reload } = useVendors()

  if (loading) return <Loading message="Loading vendors..." />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  return (
    <>
      <h2 className="section-title">Choose a vendor</h2>
      <div className="vendor-grid">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </>
  )
}

export default HomePage
