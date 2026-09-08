/** Pinned split: drivers on the left, providers on the right, UPARK between. */
export default function TwoSidesSection() {
  return (
    <div className="two-sides-sec">
      <div className="ts-sticky">
        <h2 className="t-h1">One parking network.</h2>
        <div className="ts-panels">
          <div className="ts-panel driver">
            <h3 className="t-h2">Drivers</h3>
            <p className="t-body-l" style={{ marginTop: '1rem' }}>
              Find parking when and where you need it.
            </p>
          </div>
          <div className="ts-panel provider">
            <h3 className="t-h2">Providers</h3>
            <p className="t-body-l" style={{ marginTop: '1rem' }}>
              Make available parking accessible.
            </p>
          </div>
          <div className="ts-center-logo">UPARK</div>
        </div>
      </div>
    </div>
  )
}
