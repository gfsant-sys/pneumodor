// api/records.js — lê e salva registros no Supabase
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY;

async function supabase(path, method = 'GET', body = null) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1${path}`, {
    method,
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': method === 'POST' ? 'return=representation' : '',
    },
    body: body ? JSON.stringify(body) : null,
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Supabase error: ${err}`);
  }
  return res.status === 204 ? null : res.json();
}

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'GET') {
      // Load all records
      const data = await supabase('/records?order=ts.asc&limit=10000');
      return res.status(200).json(data);
    }

    if (req.method === 'POST') {
      const record = req.body;
      // Ensure id is set
      if (!record.id) record.id = Date.now();
      const data = await supabase('/records', 'POST', record);
      return res.status(200).json(data);
    }

    res.status(405).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
