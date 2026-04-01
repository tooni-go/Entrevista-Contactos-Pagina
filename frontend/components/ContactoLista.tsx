interface ListaProps {
    contactos: any[];
    onEdit: (contacto: any) => void;
    onDelete: (id: number) => void;
  }
  
  export function ContactoLista({ contactos, onEdit, onDelete }: ListaProps) {
    return (
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Lista de Contactos</h2>
        <div className="grid gap-3">
          {contactos.map((c) => (
            <div key={c.id} className="flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-lg dark:bg-zinc-900 dark:border-zinc-800">
              <div>
                <p className="font-medium text-black dark:text-white">{c.name}</p>
                <p className="text-sm text-zinc-500">{c.email}</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => onEdit(c)}
                  className="text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-md text-sm font-medium"
                >
                  Editar
                </button>
                <button 
                  onClick={() => onDelete(c.id)}
                  className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-md text-sm font-medium"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          {contactos.length === 0 && (
            <p className="text-zinc-500 italic text-center py-8">No hay contactos que coincidan.</p>
          )}
        </div>
      </section>
    );
  }