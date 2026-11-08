import { createClient } from '@supabase/supabase-js';
import { defaultProjects } from './portfolio.js';

const supabase = process.env.SUPABASE_URL && process.env.SUPABASE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
  : null;

function normalizeProject(p) {
  if (!p) return null;
  const titre = p.titre || p.title || 'Projet';
  const rawSlug = p.slug || p.id || (titre ? titre.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : 'projet');
  const slug = String(rawSlug);
  const categorie = p.categorie || p.category || 'Développement';
  const image = p.image || p.image_upload || p.imageUrl || 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80';
  const live = p.live || p.lien || p.demoUrl || '';
  const github = p.github || p.githubUrl || '';
  const description = p.description || p.resume || '';
  const resume = p.resume || p.description || '';
  const architecture_details = p.architecture_details || '';

  let techList = [];
  if (Array.isArray(p.technologies_liste) && p.technologies_liste.length) {
    techList = p.technologies_liste;
  } else if (Array.isArray(p.technologies) && p.technologies.length) {
    techList = p.technologies;
  } else if (typeof p.technologies === 'string' && p.technologies.trim()) {
    techList = p.technologies.split(',').map(s => s.trim());
  }

  return {
    ...p,
    id: p.id || slug,
    titre,
    title: titre,
    slug,
    categorie,
    category: categorie,
    image,
    imageUrl: image,
    live,
    demoUrl: live,
    github,
    githubUrl: github,
    description,
    resume,
    architecture_details,
    technologies_liste: techList,
    technologies: Array.isArray(p.technologies) ? p.technologies.join(', ') : (p.technologies || techList.join(', ')),
    couleur_primaire: p.couleur_primaire || '#6366f1',
    couleur_secondaire: p.couleur_secondaire || '#a855f7',
    annee: p.annee || '2025',
    est_mis_en_avant: p.est_mis_en_avant !== undefined ? p.est_mis_en_avant : (p.featured !== undefined ? p.featured : true)
  };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'GET') {
      const projects = defaultProjects.map(p => normalizeProject(p));
      return res.status(200).json(projects);
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

    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
