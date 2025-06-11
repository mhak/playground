export default function Comment() {
  return (
    <>
    {/* @ts-expect-error "test" */}
    <hyvor-talk-comments
      website-id="13446"
      page-id=""
    />
    </>
  )
}