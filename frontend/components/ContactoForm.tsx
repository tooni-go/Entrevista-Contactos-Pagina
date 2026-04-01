interface FormProps {
    onSubmit: (e: React.FormEvent) => void;
    name: string;
    setName: (val: string) => void;
    email: string;
    setEmail: (val: string) => void;
    editingId: number | null;
  }
  
  export function ContactoForm({ onSubmit, name, setName, email, setEmail, editingId }: FormProps) {
    return (
      <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-xl border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 shadow-sm">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Nombre</label>
          <input 
            className="px-3 py-2 rounded-md border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-black"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Ej: Antonio"
            required 
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Email</label>
          <input 
            className="px-3 py-2 rounded-md border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-black"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="ejemplo@correo.com"
            required 
          />
        </div>
        <button 
        type="submit" 
        className="bg-black text-white dark:bg-white dark:text-black p-2 rounded-md font-medium hover:opacity-90 transition-opacity">
          {editingId ? 'Actualizar Contacto' : 'Guardar Contacto'}
        </button>
      </form>
    );
  }