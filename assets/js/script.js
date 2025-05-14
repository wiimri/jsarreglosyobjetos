const propiedades_venta = [
  {
    nombre: "Casa Moderna",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4kykXuTgKDt0kmjRt3vwnzIsHj59XLR-08A&s",
    descripcion: "Hermosa casa moderna en barrio tranquilo.",
    ubicacion: "Vitacura, Santiago",
    habitaciones: 4,
    costo: 15000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Departamento Centro",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion: "Cómodo departamento en pleno centro.",
    ubicacion: "Centro, Santiago",
    habitaciones: 2,
    costo: 800000,
    smoke: true,
    pets: false
  },
  {
    nombre: "Loft Creativo",
    src: "https://content.revistainteriores.es/medio/2024/11/19/loft-en-brasil-de-dos-plantas-y-madera_8f508c4d_241119153811_1280x794.webp",
    descripcion: "Ideal para artistas y creativos.",
    ubicacion: "Lastarria, Santiago",
    habitaciones: 1,
    costo: 600000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Casa Familiar",
    src: "https://images.adsttc.com/media/images/603a/f47a/f91c/8143/8d00/0203/newsletter/family-house-with-atrium-senaa-alex-shoots-buildings-01.jpg?1614476386",
    descripcion: "Espaciosa casa con patio amplio.",
    ubicacion: "Maipú, Santiago",
    habitaciones: 3,
    costo: 850000,
    smoke: true,
    pets: true
  }
];

const propiedades_alquiler = [
  {
    nombre: "Depto Compacto",
    src: "https://images.adsttc.com/media/images/6456/b87f/8c76/f501/7c64/0540/newsletter/apartamento-lucas-petit-minimo-arquitetura-e-design_1.jpg?1683404956",
    descripcion: "Perfecto para estudiantes o parejas.",
    ubicacion: "Providencia, Santiago",
    habitaciones: 1,
    costo: 600000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Casa Temporal",
    src: "https://panel.construproductos.com/images/posts/60888c9a38964.jpg",
    descripcion: "Alquiler por temporada.",
    ubicacion: "Las Condes, Santiago",
    habitaciones: 3,
    costo: 1200000,
    smoke: true,
    pets: false
  },
  {
    nombre: "Depto Ejecutivo",
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/535677797.jpg?k=9da75b2c3ae5010daa3b30a1fa4aa684af4a20efc505ff128615d0001eba4926&o=&hp=1",
    descripcion: "Ubicación estratégica para ejecutivos.",
    ubicacion: "Sanhattan, Santiago",
    habitaciones: 2,
    costo: 1100000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Habitación Compartida",
    src: "https://www.hostalprovidencia.com/wp-content/uploads/2021/05/HP-hab-dorm-61.jpg",
    descripcion: "Espacio para compartir con estudiantes.",
    ubicacion: "Estación Central, Santiago",
    habitaciones: 1,
    costo: 150000,
    smoke: false,
    pets: false
  }
];

function formatearMonedaCLP(valor) {
  return valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
}

function formatearMonedaUSD(valor) {
  const tasaCambio = 950;
  const usd = valor / tasaCambio;
  return usd.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

async function renderizarPropiedades(lista, idContenedor, max = lista.length) {
  const contenedor = document.getElementById(idContenedor);
  contenedor.innerHTML = "";
  let html = "";

  for (let i = 0; i < max; i++) {
    const propiedad = lista[i];
    const precioUSD = formatearMonedaUSD(propiedad.costo);

    html += `
      <div class="propiedad">
        <img src="${propiedad.src}" alt="${propiedad.nombre}">
        <h3>${propiedad.nombre}</h3>
        <p>${propiedad.descripcion}</p>
        <p><strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
        <p><strong>Habitaciones:</strong> ${propiedad.habitaciones}</p>
        <p><strong>Precio:</strong> 
          <span title="Pesos Chilenos">${formatearMonedaCLP(propiedad.costo)}</span> | 
          <span title="Dólares Americanos">${precioUSD}</span>
        </p>
        <p class="icono">${propiedad.smoke ? '🚬 Permitido fumar' : '❌ No fumar'}</p>
        <p class="icono">${propiedad.pets ? '🐾 Mascotas permitidas' : '❌ No se permiten mascotas'}</p>
      </div>
    `;
  }

  contenedor.innerHTML = html;
}