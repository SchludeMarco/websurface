import type { Messages } from "./de";

const es: Messages = {
  meta: {
    title: "WebSurface — Ideas de apps para pymes",
    description:
      "WebSurface encuentra conceptos de apps adecuados para pequeñas y medianas empresas — según su sector o mediante un análisis de datos empresariales anonimizados.",
  },
  nav: {
    ideen: "Ideas de apps",
    analyse: "Análisis de datos",
    impressum: "Aviso legal",
    datenschutz: "Privacidad",
  },
  footer: {
    copyright: "© {year} WebSurface — Prototipo, no es una oferta productiva",
  },
  languageSwitcher: {
    label: "Seleccionar idioma",
  },
  themeToggle: {
    ariaLabel: "Cambiar entre modo claro y oscuro",
  },
  branchBadge: {
    none: "Aún no se ha seleccionado ningún sector",
    choose: "Elegir sector",
    selectedOne: "Sector seleccionado",
    selectedMany: "Sectores seleccionados",
    change: "Cambiar",
  },
  home: {
    eyebrow: "Prototipo — proyecto académico",
    title: "Ideas de apps adecuadas para su pyme",
    description:
      "WebSurface propone conceptos de apps prácticos y verificados — según su sector o, opcionalmente, mediante un análisis real de datos empresariales anonimizados. WebSurface no genera código de producción automático, sino resúmenes de concepto sólidos como base para la toma de decisiones.",
    ctaBranch: "Elegir sector",
    ctaAnalyse: "Analizar datos empresariales",
    sectorsTitle: "Los cuatro ámbitos clave de la pyme",
    sectors: [
      {
        name: "Servicios",
        detail: "TI y consultoría, limpieza/servicios de edificios, servicios financieros y de personal",
      },
      {
        name: "Comercio",
        detail: "Mayorista, minorista, comercio de vehículos",
      },
      {
        name: "Industria y manufactura",
        detail: "Ingeniería mecánica, metalurgia, ingeniería eléctrica",
      },
      {
        name: "Construcción y oficios",
        detail: "Construcción principal, acabados, oficios artesanales clásicos",
      },
    ],
    privacyTitle: "Privacidad y transparencia",
    privacyBodyPre:
      "En el análisis de datos opcional, los datos brutos se procesan exclusivamente en memoria y no se almacenan de forma permanente — solo se generan métricas agregadas. Las recomendaciones se generan mediante reglas y se etiquetan automáticamente como tales. Más detalles en la",
    privacyLinkText: "política de privacidad",
  },
  onboarding: {
    title: "¿Qué ámbitos clave afectan a su empresa?",
    description:
      "Seleccione uno o varios ámbitos clave de la pyme. Los subsectores son opcionales y solo afinan la descripción — la asignación de ideas se realiza actualmente a nivel de ámbito clave.",
    submit: "Mostrar ideas de apps",
  },
  ideen: {
    titleFiltered: "Ideas de apps adecuadas",
    titleAll: "Todas las ideas de apps",
    filteredBy: "Filtrado por: {names}",
    changeSelection: "Cambiar selección",
    noIdeas: "No se encontraron ideas para esta selección.",
    effort: {
      NIEDRIG: "Esfuerzo bajo",
      MITTEL: "Esfuerzo medio",
      HOCH: "Esfuerzo alto",
    },
    impact: {
      NIEDRIG: "Beneficio bajo",
      MITTEL: "Beneficio medio",
      HOCH: "Beneficio alto",
    },
  },
  analyse: {
    title: "Analizar datos empresariales",
    description:
      "Suba un archivo CSV con datos de ventas (columnas: fecha, categoría, producto, cantidad, ingresos). El archivo se procesa exclusivamente en la memoria del servidor y luego se descarta — solo se almacenan métricas agregadas, ningún dato individual.",
    noticePre:
      "Suba únicamente datos anonimizados sin referencia a personas (sin nombres, números de cliente, etc.). Más detalles en la",
    noticeLinkText: "política de privacidad",
    csvLabel: "Archivo CSV",
    sampleButton: "Usar datos de ejemplo (minorista ficticio)",
    selectedFile: "Seleccionado: {name} ({size} KB)",
    consentLabel: "Confirmo que estos datos están anonimizados y no contienen referencias a personas.",
    submitting: "Analizando…",
    submit: "Iniciar análisis",
    errorUnknownAnalysis: "Error desconocido durante el análisis.",
    errorUnknown: "Error desconocido.",
    automatedLabel: "Recomendación generada automáticamente",
    noRecommendation: "No se determinó ninguna recomendación",
    metricsTitle: "Métricas calculadas",
    rowCount: "Filas de datos",
    totalRevenue: "Ingresos totales",
    revenueByCategory: "Ingresos por categoría",
    seasonality: "Estacionalidad por categoría (factor mes máximo/mínimo)",
    rawDataNotice: "Los datos brutos no se almacenaron — solo las métricas agregadas mostradas arriba.",
  },
  impressum: {
    title: "Aviso legal",
    noticePre: "Nota (prototipo):",
    noticeBody:
      "Este proyecto es un prototipo académico/de portafolio sin actividad comercial real. Todos los datos marcados con",
    noticePost:
      "son marcadores de posición. Antes de un uso productivo real, deben sustituirse por datos reales y verificados — nada en esta página constituye una identificación real del proveedor.",
    sections: {
      provider: {
        title: "Información según el § 5 DDG (Ley alemana de Servicios Digitales)",
        lines: ["[Nombre de la empresa / forma jurídica]", "[Calle, número]", "[Código postal, ciudad]", "[País]"],
      },
      represented: {
        title: "Representado por",
        lines: ["[Nombre y apellidos de la dirección]"],
      },
      contact: {
        title: "Contacto",
        lines: ["Teléfono: [número de teléfono]", "Correo electrónico: [dirección de correo electrónico]"],
      },
      register: {
        title: "Registro mercantil",
        lines: [
          "Inscripción en el registro mercantil [si corresponde].",
          "Juzgado de registro: [juzgado de registro]",
          "Número de registro: [número de registro]",
        ],
      },
      vat: {
        title: "Número de identificación fiscal (IVA)",
        body: "Número de identificación a efectos del IVA según el § 27a de la Ley alemana del IVA: [NIF-IVA, si está disponible]",
      },
      responsible: {
        title: "Responsable del contenido según el § 18 (2) MStV",
        body: "No aplica — este sitio web no ofrece contenido periodístico-editorial.",
      },
      dispute: {
        title: "Resolución de litigios de la UE",
        bodyPre: "La Comisión Europea ofrece una plataforma de resolución de litigios en línea (ODR), disponible en",
        bodyUrl: "ec.europa.eu/consumers/odr",
        bodyPost:
          "WebSurface se dirige exclusivamente a empresas (B2B), por lo que no existe obligación legal de mencionarlo — no obstante, lo indicamos de forma transparente. No estamos obligados ni dispuestos a participar en procedimientos de resolución de litigios ante un organismo de arbitraje de consumo.",
      },
      liabilityContent: {
        title: "Responsabilidad por el contenido",
        body: "Como proveedor de servicios, somos responsables de nuestro propio contenido en estas páginas conforme a la legislación general. Sin embargo, no estamos obligados a supervisar la información de terceros transmitida o almacenada. Las obligaciones de eliminar o bloquear el uso de información conforme a la legislación general permanecen inalteradas.",
      },
      liabilityLinks: {
        title: "Responsabilidad por enlaces",
        body: "Esta app no contiene actualmente enlaces a contenido externo de terceros. Si en el futuro se incluyeran enlaces: los operadores de las páginas enlazadas son los únicos responsables de su contenido.",
      },
      copyright: {
        title: "Derechos de autor",
        body: "El contenido y las obras creados por los operadores en estas páginas están sujetos a la legislación alemana de derechos de autor. Las contribuciones de terceros (p. ej., bibliotecas de código abierto) están señaladas como tales.",
      },
    },
  },
  datenschutz: {
    title: "Política de privacidad",
    noticePre: "Nota (prototipo):",
    noticeBody:
      "Esta política describe de forma transparente el estado real de este prototipo — incluidos los puntos que aún faltan para una operación productiva real. No se afirma deliberadamente ningún mecanismo que no exista en el código.",
    sections: {
      controller: {
        title: "1. Responsable del tratamiento",
        bodyPre: "El responsable en el sentido del RGPD es el operador de esta aplicación, véase el",
        linkText: "aviso legal",
        bodyPost: "([datos de marcador de posición en el prototipo]).",
      },
      logs: {
        title: "2. Archivos de registro del servidor",
        body: "Al acceder a esta aplicación, el servidor de alojamiento procesa técnicamente de forma necesaria la dirección IP, el momento del acceso y el user agent para garantizar el funcionamiento (art. 6.1.f RGPD, interés legítimo en la seguridad operativa). Estos datos no se combinan con otras fuentes de datos.",
      },
      onboarding: {
        title: "3. Selección de sector (incorporación)",
        bodyPre: "Su selección de ámbitos clave/subsectores se transmite entre páginas como parámetro de URL y además se guarda en el",
        code: "localStorage",
        bodyPost:
          "de su navegador, para poder mostrarla en la parte superior en todas las páginas. Estos datos permanecen exclusivamente en su dispositivo y no se transmiten al servidor ni se almacenan con referencia personal en el servidor.",
      },
      analysis: {
        title: "4. Análisis de datos opcional (carga de CSV)",
        intro: "Si sube voluntariamente un archivo CSV para su análisis, se aplica lo siguiente:",
        items: [
          "El archivo se procesa exclusivamente en la memoria del servidor (lib/csv-analysis.ts) y luego se descarta — no se almacenan datos brutos ni filas individuales en disco.",
          "Solo se almacenan las métricas agregadas (p. ej., ingresos por categoría y mes) y la recomendación derivada de ellas — sin referencia personal.",
          "La base legal es su consentimiento (art. 6.1.a RGPD) mediante la casilla de confirmación al subir el archivo.",
          "Responsabilidad de la persona que realiza la carga: al subir el archivo, usted confirma que está anonimizado y no contiene referencias personales. No suba datos de clientes, nombres, números de cliente ni datos personales comparables. Si un archivo subido contuviera, no obstante, datos personales, la empresa que lo subió seguiría siendo responsable del tratamiento de datos — para la operación productiva sería necesario en ese caso un acuerdo de encargo de tratamiento (AVV) conforme al art. 28 RGPD, que no existe en la fase actual de prototipo.",
        ],
      },
      automated: {
        title: "5. Recomendaciones generadas automáticamente (art. 22 RGPD, Ley de IA de la UE)",
        body: "La recomendación de app tras un análisis se genera mediante una lógica basada en reglas, no de aprendizaje (no es un sistema de IA en el sentido de la Ley de IA de la UE en el estado de entrega de este prototipo). Se trata de una sugerencia para revisión humana, no de una decisión automatizada con efectos jurídicos en el sentido del art. 22 RGPD. Si en el futuro se conectara un modelo basado en IA/LLM, esto se añadiría aquí y se etiquetaría conforme a las obligaciones de transparencia de la Ley de IA de la UE.",
      },
      retention: {
        title: "6. Plazo de conservación",
        bodyPre: "En el estado actual de desarrollo, los resultados agregados del análisis se almacenan en la base de datos local y",
        emphasis: "no se eliminan automáticamente",
        bodyPost: "— aún no se ha implementado un proceso de eliminación. Para la operación productiva está previsto un plazo de eliminación automática (p. ej., 30 días), véase el README.",
      },
      cookies: {
        title: "7. Cookies y seguimiento",
        bodyPre: "Esta aplicación no utiliza cookies de análisis, marketing o seguimiento ni servicios de terceros. Solo se utilizan datos de sesión técnicamente necesarios y temporales del framework. Además, la app almacena su selección de sector, su preferencia de modo claro/oscuro y su selección de idioma de forma puramente local en el",
        code: "localStorage",
        bodyPost: "de su navegador o en una cookie puramente técnica para la selección de idioma (sin cookies de análisis o seguimiento, sin transmisión a terceros). Por lo tanto, no se requiere un banner de consentimiento de cookies conforme al § 25 TTDSG.",
      },
      hosting: {
        title: "8. Alojamiento",
        bodyPre: "En el entorno de desarrollo local, esta aplicación se ejecuta exclusivamente en su propio ordenador. Para la operación productiva está previsto un alojamiento en la UE (p. ej., región de AWS eu-central-1, Fráncfort), véase el directorio",
        code: "infra/",
        bodyPost: ".",
      },
      rights: {
        title: "9. Sus derechos",
        bodyPre: "Conforme a los art. 15–21 RGPD, usted tiene derecho de acceso, rectificación, supresión, limitación del tratamiento, portabilidad de los datos y oposición al tratamiento. Para ello, diríjase a la dirección de contacto indicada en el",
        linkText: "aviso legal",
        bodyPost: "para este fin. Además, tiene derecho a presentar una reclamación ante la autoridad de control de protección de datos competente.",
      },
    },
  },
};

export default es;
