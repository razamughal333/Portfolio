// Talks to the Supabase database through two small SQL functions (get_likes, add_like).
// No extra package needed: Supabase accepts plain fetch requests.
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const key = import.meta.env.VITE_SUPABASE_KEY as string | undefined

export const likesConfigured = Boolean(url && key)

async function callFunction(name: 'get_likes' | 'add_like'): Promise<number> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 6000) // don't wait forever if the database is asleep
  try {
    const response = await fetch(`${url}/rest/v1/rpc/${name}`, {
      method: 'POST',
      headers: { apikey: key!, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: '{}',
      signal: controller.signal,
    })
    if (!response.ok) throw new Error(`Supabase ${name} failed: ${response.status}`)
    const value: unknown = await response.json()
    if (typeof value !== 'number') throw new Error('Unexpected response')
    return value
  } finally {
    clearTimeout(timer)
  }
}

export const getLikes = () => callFunction('get_likes')
export const addLike = () => callFunction('add_like')
