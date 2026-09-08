const FOOTER_COLS = [
  ['Product', 'Universities'],
  ['Company', 'Investors', 'Contact'],
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="nav-logo" style={{ fontSize: '2rem' }}>
          UPARK
        </div>
        <div className="footer-links">
          {FOOTER_COLS.map((col, i) => (
            <div key={i} className="footer-col">
              {col.map((label) => (
                <a key={label} href="#">
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 UPark. All rights reserved.</div>
        <div className="footer-legal">
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
            Privacy
          </a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
