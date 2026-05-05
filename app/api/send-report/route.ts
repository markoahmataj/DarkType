export async function POST() {
  return Response.json(
    {
      error: 'Email sending is coming soon. Use PDF download instead.',
    },
    { status: 503 }
  )
}