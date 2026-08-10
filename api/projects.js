import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'GET') {
      const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      return res.status(200).json(data);
    }

    if (req.method === 'POST') {
      const proj = req.body;
      if (!proj.id) proj.id = Date.now().toString();
      const { data, error } = await supabase.from('projects').insert([proj]).select();
      if (error) throw error;
      return res.status(201).json(data[0]);
    }

    if (req.method === 'PUT') {
      const proj = req.body;
      const { data, error } = await supabase.from('projects').update(proj).eq('id', proj.id).select();
      if (error) throw error;
      return res.status(200).json(data[0]);
    }

    if (req.method === 'DELETE') {
      const { id } = req.query;
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) throw error;
      return res.status(200).json({ success: true });
    }

    res.status(455).end(`Method ${req.method} Not Allowed`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
