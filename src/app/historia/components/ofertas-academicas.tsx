import { useEffect, useState } from 'react'

const OfertasAcademicas = ({ programas }: { programas?: string }) => {
  const [programa1, programa2] = programas?.split('-') ?? ['Seleccione una oferta académica', 'Seleccione una subcategoria']

  const [selectedOferta, setSelectedOferta] = useState<string>('Seleccione una oferta académica')
  const [selectedSubcategoria, setSelectedSubcategoria] = useState<string>('Seleccione una subcategoria')

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setSelectedOferta(`${programa1}-`)
    setSelectedSubcategoria(programa2)
    setLoading(false)
  }, [programa1, programas, programa2])

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOferta(event.target.value)
  }

  if (loading) return <div>Loading...</div>

  return (
    <>
      <select className='h-8 my-auto rounded' onChange={handleSelectChange} name='programa1' defaultValue={selectedOferta} required>
        {programa1.includes('Seleccione') && <option value=''>{selectedOferta}</option>}
        {ofertas.map((oferta, index) => (<option key={index} value={oferta.nombre}>{oferta.nombre}</option>))}
      </select>
      <select name='programa2' required defaultValue={selectedSubcategoria}>
        {selectedSubcategoria?.includes('Seleccione') && <option value='selectedSubcategoria'>{selectedSubcategoria}</option>}
        {ofertas.find((oferta) => (oferta.nombre === (selectedOferta)))?.subcategorias.map((subcategoria, index) =>
          (<option key={index}>{subcategoria}</option>))}
      </select>
    </>
  )
}

export default OfertasAcademicas

const ofertas = [
  {
    nombre: 'Ciencias de la Salud-',
    subcategorias: [
      'Enfermería',
      'Terapia Ocupacional',
      'Fisioterapia',
      'Nutrición y Dietética',
      'Enfermería Oncológica',
      'Enfermería Materno Perinatal',
      'Enfermería para el Cuidado del Paciente en Estado Crítico',
      'Auditoria en Salud',
      'Gerencia de la Seguridad y Salud en el Trabajo',
      'Administración en Salud',
      'En Regencia de Farmacia',
      'En Radiodiagnóstico y Radioterapia',
      'Laboral en Auxiliar en Enfermería',
      'Laboral en Auxiliar en Enfermería fines de semana',
      'Curso preuniversitario Facultad de Ciencias de la Salud'
    ]
  },
  {
    nombre: 'Ciencias Contables, Económicas y Administrativas-',
    subcategorias: [
      'Mercadeo',
      'Contaduría Pública',
      'Administración de Negocios Internacionales',
      'Alta Gerencia',
      'Gerencia Tributaria',
      'Gerencia y Asesoría Financiera',
      'Gerencia y Auditoria Tributaria',
      'Administración'
    ]
  },
  {
    nombre: 'Educación-',
    subcategorias: [
      'Licenciatura en Teología',
      'Literatura',
      'Matemáticas',
      'Educación Infantil',
      'Educación Básica Primaria',
      'Pedagogía - Pasto (N)',
      'Pedagogía - Pitalito (H)',
      'Pedagogía - Valledupar (C)',
      'Pedagogía - Mocoa (P)',
      'Doctorado en Pedagogía',
      'Curso Programa de Pedagogía para Profesionales No Licenciados'
    ]
  },
  {
    nombre: 'Humanidades y Ciencias Sociales-',
    subcategorias: [
      'Derecho',
      'Trabajo Social',
      'Comunicación Social',
      'Psicología',
      'En Familia (Modalidad Virtual)'
    ]
  },
  {
    nombre: 'Ingeniería-',
    subcategorias: [
      'Ingeniería Mecatrónica',
      'Ingeniería Civil',
      'Ingeniería de Sistemas',
      'Ingeniería Ambiental',
      'Ingeniería de Procesos',
      'Sistemas Integrados de Gestión',
      'Maestría en Ciencias Ambientales',
      'Curso preuniversitario Facultad de Ingeniería'
    ]
  }
]
