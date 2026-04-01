import { useEffect, useState } from 'react';

export function useContactos() {
  const [contactos, setContactos] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  const fetchContactos = async () => {
    const res = await fetch('http://localhost:3000/contactos');
    const data = await res.json();
    setContactos(data);
  };

  useEffect(() => {
    fetchContactos();
  }, []);

  const contactosFiltrados = contactos.filter((c: any) => {
    const nombre = c.name.toLowerCase();
    const mail = c.email.toLowerCase();
    const term = busqueda.toLowerCase();

    return nombre.includes(term) || mail.includes(term);
  });

  const startEditing = (contacto: any) => {
    setEditingId(contacto.id);
    setName(contacto.name);
    setEmail(contacto.email);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteContacto = async (id: number) => {
    await fetch(`http://localhost:3000/contactos/${id}`, { method: 'DELETE' });
    fetchContactos();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]{3,}\.[^\s@]{2,6}$/;

    if (cleanName.length < 2) {
      alert('El nombre es demasiado corto o está vacío.');
      return;
    }

    if (!emailRegex.test(cleanEmail)) {
      alert('El formato del email no es válido.');
      return;
    }

    const url = editingId
      ? `http://localhost:3000/contactos/${editingId}`
      : 'http://localhost:3000/contactos';
    const method = editingId ? 'PATCH' : 'POST';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: cleanName, email: cleanEmail }),
    });
    
    setEditingId(null);
    setName('');
    setEmail('');
    fetchContactos();
  };

  return {
    contactos,
    name,
    setName,
    email,
    setEmail,
    busqueda,
    setBusqueda,
    contactosFiltrados,
    editingId,
    startEditing,
    deleteContacto,
    handleSubmit,
  };
}
