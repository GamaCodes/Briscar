import React from "react";

export default function Service() {
  return (
    <div className="service-contain">
      <h1 className="service-title">Servicios</h1>
      <section className="service-box">
        <article class="card">
          <div class="card--front">
            <img
              class="card__img"
              alt="card"
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <h1 class="card__title"> Mecánica </h1>
          </div>
          <div class="card--back">
            <p class="card__title">Mecánica</p>
            <p>
              El correcto funcionamiento de tu automóvil es nuestro compromiso.
              <br />
              <br />
              Contamos con una amplia diversidad de servicios en mecánica
              express, general y mayor que van desde alineación de ruedas hasta
              reparaciones de motor.
            </p>
          </div>
        </article>

        <article class="card">
          <div class="card--front">
            <img
              class="card__img"
              alt="card"
              src="https://images.pexels.com/photos/6872568/pexels-photo-6872568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <h1 class="card__title"> Hojalatería y Pintura </h1>
          </div>
          <div class="card--back">
            <p class="card__title">Hojalatería y Pintura</p>
            <p>
              ¡Que tu auto no pierda el encanto! <br />
              <br />
              Si tu auto sufrió una colisión, golpe o abolladura, recupera aquí
              la imagen que lo hizo atraer tu atención cuando lo viste por
              primera vez. <br />
              <br />
              Conoce los servicios en hojalatería y pintura y haz que te
              vehículo vuelva a sonreír.
            </p>
          </div>
        </article>
      </section>

      <section className="service-box">
        <article class="card">
          <div class="card--front">
            <img
              class="card__img"
              alt="card"
              src="https://images.pexels.com/photos/1135379/pexels-photo-1135379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <h1 class="card__title"> Electricidad Automotriz </h1>
          </div>
          <div class="card--back">
            <p class="card__title">Electricidad Automotriz</p>
            <p>
              Es de vital importancia que el sistema eléctrico de tu automóvil
              esté siempre en óptimas condiciones, por eso, en Briscar nos
              ocupamos de diagnosticar fallos y hacer remplazo de piezas
              necesarias para asegurar el buen funcionamiento del mismo.
            </p>
          </div>
        </article>

        <article class="card">
          <div class="card--front">
            <img
              class="card__img"
              alt="card"
              src="https://images.pexels.com/photos/5438616/pexels-photo-5438616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <h1 class="card__title"> Escáner </h1>
          </div>
          <div class="card--back">
            <p class="card__title">Escáner</p>
            <p>
              Si tu auto presenta una luz encendida en el tablero, podemos hacer
              un diagnóstico exacto de las fallas con el escáner, una
              herramienta que nos sirve para realizar una lectura del historial
              de errores de tu vehículo que nos permite realizar una correcta
              reparación.
            </p>
          </div>
        </article>
      </section>

      <section className="service-box">
        <article class="card">
          <div class="card--front">
            <img
              class="card__img"
              alt="card"
              src="https://images.pexels.com/photos/4489760/pexels-photo-4489760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <h1 class="card__title"> Estética Automotriz </h1>
          </div>
          <div class="card--back">
            <p class="card__title">Estética Automotriz</p>
            <p>
              Un auto con buen funcionamiento es ideal, pero que tenga una
              excelente imagen es mucho mejor. <br />
              <br />
              En Briscar nos encargamos del lavado de interiores y exteriores,
              pulido y encerado y hasta lavado de motor.
            </p>
          </div>
        </article>

        <article class="card">
          <div class="card--front">
            <img
              class="card__img"
              alt="card"
              src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <h1 class="card__title"> Venta y montaje </h1>
          </div>
          <div class="card--back">
            <p class="card__title">Venta y montaje de llantas</p>
            <p>
              Las llantas son uno de los puntos de seguridad más importantes en
              un automóvil. <br />
              <br />
              En Briscar contamos con diferentes servicios como alineación y
              balanceo, además, tenemos a la venta las mejores marcas de llantas
              en el mercado.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
