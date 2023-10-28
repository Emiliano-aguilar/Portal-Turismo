let comercios = {
   comercios: [
      {
         nombre: "Supermercado Atomo",
         detalle: "Supermercado 24 hrs",
         direccion: "Coronel Mercau 1166, D5881 Merlo, San Luis",
         coordenadas: [-32.33847916071844, -65.01406774630965],
         horario: "Lunes a Domingo de 8 a 14",
         telefono: "1123457895",
         img1: "https://lh5.googleusercontent.com/p/AF1QipNdNKZnYfWNwHBPT3QsoBArPdYtqYHdImxNsQAk=w408-h307-k-no",
         supermercado: true,
         perfumeria: true,
         otros: false,
         avisos: [
            {
               nombre: "Leche",
               detalle: "Leche don satur",
               img1: "https://previews.123rf.com/images/yuwnis07/yuwnis072211/yuwnis07221100038/194959154-leche-de-caricatura-animada-plana-en-ilustraci%C3%B3n-de-caja-de-papel-grande-bebidas-ricas-en-calcio.jpg",
               img2: "https://us.123rf.com/450wm/kahovsky/kahovsky2008/kahovsky200800097/154187168-linda-leche-divertida-feliz-icono-de-ilustraci%C3%B3n-de-personaje-kawaii-de-dibujos-animados-de-l%C3%ADnea.jpg?ver=6",
               img3: "https://dibujos-paracolorear.de/wp-content/uploads/2020/05/imagenes-leches.png",
               supermercado: true,
               perfumeria: false,
               otros: false,
               // hace referencia a Restricciones (servicio) o caracteristicas (producto)
               infoAdicional: "Leche 1L",
               precio: "sin precio asignado",
               estado: "vigente",

            },
            {
               nombre: "Leche",
               detalle: "Leche VI",
               img1: "https://us.123rf.com/450wm/kahovsky/kahovsky2008/kahovsky200800097/154187168-linda-leche-divertida-feliz-icono-de-ilustraci%C3%B3n-de-personaje-kawaii-de-dibujos-animados-de-l%C3%ADnea.jpg?ver=6",
               img2: "https://previews.123rf.com/images/yuwnis07/yuwnis072211/yuwnis07221100038/194959154-leche-de-caricatura-animada-plana-en-ilustraci%C3%B3n-de-caja-de-papel-grande-bebidas-ricas-en-calcio.jpg",
               img3: "https://dibujos-paracolorear.de/wp-content/uploads/2020/05/imagenes-leches.png",
               supermercado: true,
               perfumeria: false,
               otros: false,
               // hace referencia a Restricciones (servicio) o caracteristicas (producto)
               infoAdicional: "Leche 1L",
               precio: "$1.200",
               estado: "vigente",

            },
            {
               nombre: "Set Perfume Carolina Herrera Bad Boy + Shower Gel Original",
               detalle: "Perfume masculino",
               img1: "https://images.fravega.com/f500/639e7ffb6c76050b742483a061bf41f3.jpg",
               img2: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/188/259/products/ch-bad-boy-11-c2c362bcd4534b831716225029380496-240-0.jpg",
               img3: "https://f.fcdn.app/imgs/3a9323/electroventas.com.uy/elecuy/0528/original/catalogo/VIE65189703VIE651897032/1500-1500/set-perfume-carolina-herrera-bad-boy-edt-50ml-shower-gel-original-set-perfume-carolina-herrera-bad-boy-edt-50ml-shower-gel-original.jpg",
               supermercado: false,
               perfumeria: true,
               otros: false,
               categoria: "perfumeria",
               // hace referencia a Restricciones (servicio) o caracteristicas (producto)
               infoAdicional: "50ml",
               precio: "$100.000",
               estado: "vigente",

            }
         ]
      },
      {
         nombre: "Carniceria",
         detalle: "Carniceria Familiar",
         direccion: "Avenida Nte. 1440, D5881 Merlo, San Luis",
         coordenadas: [-32.336086722050766, -65.01425911745416],
         horario: "Lunes a Domingo de 8 a 14",
         telefono: "1123457895",
         img1: "https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/WOSQKJ7TP5ERZH4RP3LP6UZ5KE.jpg",
         supermercado: false,
         perfumeria: false,
         otros: true,
         avisos: [
            {
               nombre: "asado",
               detalle: "asado finito",
               img1: "https://thumbs.dreamstime.com/z/asado-crudo-8478920.jpg",
               img2: "https://www.elcucodigital.com/wp-content/uploads/2023/08/carne1.jpg",
               img3: "https://previews.123rf.com/images/greggr/greggr1609/greggr160901880/62831888-tradicional-suram%C3%A9rica-cocina-costillas-asado-de-carne-crudos-gran-filete-bistec-en-gran-cl%C3%A1sica.jpg",
               supermercado: false,
               perfumeria: false,
               otros: true,
               // hace referencia a Restricciones (servicio) o caracteristicas (producto)
               infoAdicional: "5kg de asado",
               precio: "$5.000",
               estado: "vigente",

            }
         ]
      }
   ]
}



//////////////////////////////////MAPA//////////////////////////////



var map = L.map('map').setView([-32.346975285600216, -65.00391276013097], 14);




var comercioIcon = L.icon({
   iconUrl: 'img/comercioIcono.png',
   iconSize: [38, 45],
   iconAnchor: [22, 30],
   popupAnchor: [-3, -10]
});

function llenarMapa(comerciosACompletar) {

   contenedorDeComercios.innerHTML = "";
   añadirComerciosAlDOM(comerciosACompletar);


   // Elimina todos los markers existentes en el mapa
   map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
         map.removeLayer(layer);
      }
   });
   // creo los nuevos markers
   comerciosACompletar.forEach((comercio) => {
      L.marker(comercio.coordenadas, { icon: comercioIcon }).addTo(map).bindPopup("<b>" + comercio.nombre + "</b><br>" + comercio.direccion + "</b><br>Horario: " + comercio.horario);
   });
}


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 20,
   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



/////////////////////////////////////////////////////Logica//////////////////////////////////////////////





const contenerDeProcutos = document.getElementById('cuerpoAvisos');
const contenedorDeComercios = document.getElementById('cuerpoComercios');
var filtroSupermercadoIsChecked = true;
var filtroPerfumeriaIsChecked = true;
var filtroOtrosIsChecked = true;



var filtroSupermercado = document.querySelector("input[name=Supermercado]");
filtroSupermercado.addEventListener('click', function () {
   if (filtroSupermercado.checked) {
      filtroSupermercadoIsChecked = true;
      return filtroSupermercadoIsChecked;
   }
   else {
      filtroSupermercadoIsChecked = false;
      return filtroSupermercadoIsChecked;
   }
}
);

var filtroPerfumeria = document.querySelector("input[name=Perfumeria]");
filtroPerfumeria.addEventListener('click', function () {
   if (filtroPerfumeria.checked) {
      filtroPerfumeriaIsChecked = true;
      return filtroPerfumeriaIsChecked;
   }
   else {
      filtroPerfumeriaIsChecked = false;
      return filtroPerfumeriaIsChecked;
   }
});

var filtroOtros = document.querySelector("input[name=Otros]");
filtroOtros.addEventListener('click', function () {
   if (filtroOtros.checked) {
      filtroOtrosIsChecked = true;
      return filtroOtrosIsChecked;
   }
   else {
      filtroOtrosIsChecked = false;
      return filtroOtrosIsChecked;
   }
});


let comercio = comercios.comercios


const buscador = document.getElementById("buscador");
const inputBusqueda = document.getElementById("inputBusqueda");


buscador.addEventListener("click", function () {

   contenerDeProcutos.innerHTML = "";
   var produc = [];
   var comercios = [];
   var valor = inputBusqueda.value;
   valor = valor.toLowerCase();

   comercio.forEach((producto) => {


      producto.avisos.forEach((aviso) => {

         let nombre = aviso.nombre
         nombre = nombre.toLowerCase();

         if (nombre.includes(valor)) {
            produc.push(aviso)
            comercios.push(producto);
         }

      })
   })
   llenarMapa(comercios)
   añadirAvisosAlDOM(produc);



})

///////////////////////////////////////////



function filtrarAvisos() {

   var produc = [];
   var comerciosParaElmapa = [];


   comercio.forEach((comercios) => {


      comercios.avisos.forEach((aviso) => {

         switch (true) {
            case filtroSupermercadoIsChecked && filtroPerfumeriaIsChecked && filtroOtrosIsChecked:
                if (aviso.supermercado || aviso.perfumeria || aviso.otros) {
                    produc.push(aviso);
                    comerciosParaElmapa.push(comercios);
                }
                break;
        
            case filtroSupermercadoIsChecked && filtroPerfumeriaIsChecked && !filtroOtrosIsChecked:
                if (aviso.supermercado || aviso.perfumeria) {
                    produc.push(aviso);
                    comerciosParaElmapa.push(comercios);
                }
                break;
        
            case filtroSupermercadoIsChecked && !filtroPerfumeriaIsChecked && filtroOtrosIsChecked:
                if (aviso.supermercado || aviso.otros) {
                    produc.push(aviso);
                    comerciosParaElmapa.push(comercios);
                }
                break;
        
            case filtroSupermercadoIsChecked && !filtroPerfumeriaIsChecked && !filtroOtrosIsChecked:
                if (aviso.supermercado) {
                    produc.push(aviso);
                    comerciosParaElmapa.push(comercios);
                }
                break;
        
            case !filtroSupermercadoIsChecked && filtroPerfumeriaIsChecked && filtroOtrosIsChecked:
                if (aviso.perfumeria || aviso.otros) {
                    produc.push(aviso);
                    comerciosParaElmapa.push(comercios);
                }
                break;
        
            case !filtroSupermercadoIsChecked && filtroPerfumeriaIsChecked && !filtroOtrosIsChecked:
                if (aviso.perfumeria) {
                    produc.push(aviso);
                    comerciosParaElmapa.push(comercios);
                }
                break;
        
            case !filtroSupermercadoIsChecked && !filtroPerfumeriaIsChecked && filtroOtrosIsChecked:
                if (aviso.otros) {
                    produc.push(aviso);
                    comerciosParaElmapa.push(comercios);
                }
                break;
        }
        
      })

   })

   llenarMapa(comerciosParaElmapa);
   añadirAvisosAlDOM(produc);
}


const botonActualizar = document.getElementById("actualizar-filtros");
const verTodosLosAvisos = document.getElementById("ver-todo");


verTodosLosAvisos.addEventListener('click', function () {

   contenerDeProcutos.innerHTML = "";
   var comerciosParaElmapa = [];

   comercio.forEach((comercio) => {
      añadirAvisosAlDOM(comercio.avisos);
      comerciosParaElmapa.push(comercio);
   })
   llenarMapa(comercio);

})



function mostrarAvisosFiltrados() {
   contenerDeProcutos.innerHTML = "";
   filtrarAvisos();
}

botonActualizar.addEventListener('click', mostrarAvisosFiltrados)


function añadirAvisosAlDOM(avisos) {


   avisos.forEach((aviso) => {

      const div = document.createElement(`div`)
      const image = document.createElement("img")
      image.src = aviso.img1
      div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
       
               <div class="row g-0">
                 <div class="col-md-4">
                 <img src="${aviso.img1}" class="img-fluid rounded-start" alt="..."> 
                 </div>
                 <div class="col-md-8">
                   <div class="card-body">
                     <h5 class="card-title">${aviso.nombre}</h5>
                     <p class="card-text">descripcion : ${aviso.detalle}</p>
                     <p class="card-text">precio : ${aviso.precio}</p>
                     <p class="card-text">precio : ${aviso.infoAdicional}</p>
                   </div>
                 </div>
               </div>
             </div>`

      contenerDeProcutos.append(div);

   })


}

function añadirComerciosAlDOM(comercios){
   comercios.forEach((comercio) => {

      const div = document.createElement(`div`)
      const image = document.createElement("img")
      image.src = comercio.img1
      div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
       
               <div class="row g-0">
                 <div class="col-md-4">
                 <img src="${comercio.img1}" class="img-fluid rounded-start" alt="..."> 
                 </div>
                 <div class="col-md-8">
                   <div class="card-body">
                     <h5 class="card-title">${comercio.nombre}</h5>
                     <p class="card-text">descripcion : ${comercio.detalle}</p>
                     <p class="card-text">precio : ${comercio.direccion}</p>
                     <p class="card-text">precio : ${comercio.telefono}</p>
                     <p class="card-text">precio : ${comercio.supermercado}</p>
                     <p class="card-text">precio : ${comercio.perfumeria}</p>
                     <p class="card-text">precio : ${comercio.otros}</p>
                   </div>
                 </div>
               </div>
             </div>`

      contenedorDeComercios.append(div);

   })
}

