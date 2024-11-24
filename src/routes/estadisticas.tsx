import { createFileRoute } from '@tanstack/react-router'
import { useNewsData } from '../hooks/use-news-data'
import { News } from '../interfaces/news'
import { useMemo } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { toast } from 'sonner'

export const Route = createFileRoute('/estadisticas')({
  component: RouteComponent,
})

const columnHelper = createColumnHelper<News>()

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('title', {
    header: 'Título',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('category', {
    header: 'Categoría',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('date', {
    header: 'Fecha',
    cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('content', {
    header: 'Contenido',
    cell: (info) => <i>{info.getValue().slice(0, 100)}...</i>,
    footer: (info) => info.column.id,
  }),
]

function RouteComponent() {
  const { data, isLoading, error } = useNewsData()

  const tableData = useMemo(() => data || [], [data])

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (isLoading) {
    return <div className="text-center text-gray-600">Cargando noticias...</div>
  }

  if (error) {
    return <div className="text-center text-red-600">Error cargando noticias: {error.message}</div>
  }

  if (data) {
    toast.success("Datos cargados con éxito")
  }

  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Estadísticas de Noticias</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 text-sm text-gray-700">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}
