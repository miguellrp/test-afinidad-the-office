import '../styles/BoxContainer.css'

export default function BoxContainer ({ minWidth, maxWidth, width, padding, backgroundColor, margin, children }) {
  return (
    <div id='box-container' style={{ minWidth, maxWidth, width, padding, backgroundColor, margin }}>
      {children}
    </div>
  )
}
