'use client';
import { useContactos } from '../hooks/useContactos';
import { ContactoForm } from '../components/ContactoForm';
import { ContactoLista } from '../components/ContactoLista';

export default function Home() {
  
  const { 
    contactos, name, setName, email, setEmail, 
    editingId, startEditing, deleteContacto, 
    handleSubmit, busqueda, setBusqueda, contactosFiltrados
  } = useContactos();

  return (
    <div className="min-h-screen bg-zinc-50 p-8 dark:bg-black font-sans text-zinc-900 dark:text-zinc-100">
      <main className="max-w-2xl mx-auto space-y-8">

      <title>Antonio Contactos</title>

        <header className="space-y-2" 
        style={{ textAlign: 'center' }}>
          <h1 className="text-3xl font-bold tracking-tight">Pagina de Contactos</h1>
          <p className="text-zinc-500">Administra tus contactos de forma rápida.</p>
        </header>

      <ContactoForm 
      onSubmit={handleSubmit}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      editingId={editingId}
    />

    <input 
      type="text"
      placeholder="Buscar por nombre o email..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      className="w-full p-2 border rounded-md dark:bg-zinc-800"
    />

    <ContactoLista 
      contactos={contactosFiltrados} 
      onEdit={startEditing}
      onDelete={deleteContacto}
    />
      </main>
    </div>
  );
}