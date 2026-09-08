/** Smooth-scroll to the beta form and focus the university select, mirroring
    the source design's `scrollToForm()` helper. */
export function scrollToForm() {
  document
    .getElementById('join-beta')
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.setTimeout(() => {
    document.getElementById('university')?.focus()
  }, 800)
}
