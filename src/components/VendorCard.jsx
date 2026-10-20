function VendorCard() {
  // TODO: replace with a real stall from YOUR own mahallah
  const vendor = {
    name: 'Kafe Mahallah Ali',
    location: 'Mahallah Ali, Block C',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
  }

  return (
    <div className="card vendor-card">
      <div className="thumb">{vendor.name.charAt(0)}</div>
      <div className="vendor-info">
        <strong>{vendor.name}</strong>
        <br/>
        <small>{vendor.location}</small>
        <br/>
        <small>Open: {vendor.openHours}</small>
        <br/>
        <span className={vendor.isOpen ? 'status open' : 'status closed'}> {vendor.isOpen ? 'Open now' : 'Closed'}</span>
      </div>
    </div>
  )
}

export default VendorCard
