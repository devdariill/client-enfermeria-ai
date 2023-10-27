import { useState } from 'react'

const OfertasAcademicas = () => {
  const ofertas = [
    {
      nombre: 'Ciencias de la Salud',
      subcategorias: [
        'Enfermería',
        'Terapia Ocupacional',
        'Fisioterapia',
        'Nutrición y Dietética',
        'Enfermería Oncológica',
        'Enfermería Materno Perinatal',
        'Enfermería para el Cuidado del Paciente en Estado Crítico',
        'Auditoria en Salud (Convenio CES de Medellín)',
        'Gerencia de la Seguridad y Salud en el Trabajo (Convenio CES de Medellín)',
        'Administración en Salud',
        'En Regencia de Farmacia',
        'En Radiodiagnóstico y Radioterapia',
        'Laboral en Auxiliar en Enfermería',
        'Laboral en Auxiliar en Enfermería fines de semana',
        'Curso preuniversitario Facultad de Ciencias de la Salud'
      ]
    },
    {
      nombre: 'Ciencias Contables, Económicas y Administrativas',
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
      nombre: 'Educación',
      subcategorias: [
        'Licenciatura en Teología - NUEVO',
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
      nombre: 'Humanidades y Ciencias Sociales',
      subcategorias: [
        'Derecho',
        'Trabajo Social',
        'Comunicación Social',
        'Psicología',
        'En Familia (Modalidad Virtual)'
      ]
    },
    {
      nombre: 'Ingeniería',
      subcategorias: [
        'Ingeniería Mecatrónica',
        'Ingeniería Civil',
        'Ingeniería de Sistemas',
        'Ingeniería Ambiental',
        'Ingeniería de Procesos',
        'Sistemas Integrados de Gestión - NUEVO',
        'Maestría en Ciencias Ambientales (Convenio Universidad Tecnológica de Pereira)',
        'Curso preuniversitario Facultad de Ingeniería'
      ]
    }
  ]

  const [selectedOferta, setSelectedOferta] = useState<string>('')

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOferta(event.target.value)
  }

  return (
    <>
      <select className='h-8 my-auto rounded' value={selectedOferta} onChange={handleSelectChange}>
        <option value=''>Seleccione una oferta académica</option>
        {ofertas.map((oferta, index) => (
          <option key={index} value={oferta.nombre}>
            {oferta.nombre}
          </option>
        ))}
      </select>
      {
      selectedOferta
        ? (
          <select name='programa'>
            <option value=''>Seleccione una subcategoria</option>
            {ofertas
              .find((oferta) => oferta.nombre === selectedOferta)
              ?.subcategorias.map((subcategoria, index) => (
                <option key={index} value={subcategoria}>
                  {subcategoria}
                </option>
              ))}
          </select>
          )
        : (<div />)
}
    </>
  )
}

export default OfertasAcademicas
