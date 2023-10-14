import { ImageResponse } from "next/server";

export const runtime = "edge";

const logoURL = new URL(
  "../../../../public/images/logo-footer.png",
  import.meta.url
);

export const GET = async () => {
  const logoData = await fetch(logoURL).then((res) => res.arrayBuffer());

  const OG = new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#181818",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "200px",
            background: "#181818",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <img
            style={{
              height: "100px",
              width: "400px",
              objectFit: "contain",
            }}
            src={logoData as any}
          />
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "430px",
            background: "#ffffff",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontStyle: "normal",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#181818",
              textAlign: "center",
              marginTop: 30,
              padding: "0 120px",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
            }}
          >
            ChupaPrecios
          </div>
          <div
            style={{
              fontSize: 20,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              color: "#4a4a4a",
              textAlign: "center",
              marginTop: 10,
              padding: "0 120px",
              lineHeight: 1.2,
              whiteSpace: "pre-wrap",
            }}
          >
            Entrega en Toda la República Mexicana; Paga en Pesos Mexicanos; Más
            de 300 Millones de Productos. Toggle Nav Chupaprecios. Seleccionar
            Tienda. HOME DEPOT.
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 16,
              borderRadius: 4,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              color: "#ff3838",
              textAlign: "center",
              marginTop: 40,
              padding: "9px 20px",
              lineHeight: 1.2,
              whiteSpace: "pre-wrap",
              border: "1px solid #ff3838",
            }}
          >
            <span>Ingresa a la página de ChupaPrecios</span>
            <span>para ver más información.</span>
          </div>

          <span
            style={{
              fontSize: 18,
              fontStyle: "normal",
              fontWeight: "bold",
              letterSpacing: "-0.025em",
              color: "#181818",
              textAlign: "center",
              marginTop: 50,
              padding: "0 120px",
              lineHeight: 1.2,
              whiteSpace: "pre-wrap",
            }}
          >
            Made By WillSkr{" "}
            <span
              style={{
                color: "#ff3838",
              }}
            >
              (willskr.com)
            </span>
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
  return OG;
};
