import React from "react";

function Price() {
  return (
    <div className="container" style={{ position: "relative", width: "100%", height: "100%", background: "linear-gradient(90deg, #75CCEB, #6FB4FF)", opacity: 0.8, zIndex: 1, }}>
      <div className="row" style={{ backgroundImage: "url('/vector.png')", backgroundSize: "100% 100%", backgroundPosition: "center", height: "100vh", width: "100vw" }}>
        
        {/* First Column */}
        <div className="col-6 " style={{marginTop:"100px"}}>
          <p style={{ display: "flex", flexDirection: "row-reverse", fontSize: "20px", color: "#31546D" }}>
            BEST PRICE
          </p>
          <h1 style={{ display: "flex", flexDirection: "row-reverse", color: "#31546D", fontSize: "50px", fontWeight: "bold" }}>
            Agate Phone Grip
          </h1>
          <div style={{ display: "flex", alignItems: "center", marginRight: "50px" }}>
            <p style={{ fontSize: "20px", color: "#41A0B7", textDecoration: "line-through", marginLeft: "400px", paddingRight: "15px", marginTop: "20px" }}>
              44.50$
            </p>
            <span style={{ marginLeft: "-20px", paddingLeft: "15px", fontSize: "65px", color: "#E35B3E", fontWeight: "bold" }}>
              19.50$
            </span>
          </div>
          <div>
            <p style={{ fontSize: "16px", color: "#31546D", display: "flex", flexDirection: "row-end", marginLeft: "273px", textAlign: "right", opacity: 1 }}>
              These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
            </p>
          </div>
          <a href="#" style={{ marginLeft: "555px", backgroundColor: "#75CCEB", color: "#fff", padding: "15px", marginTop: "10px", borderRadius: "15px" }} className="btn center">
            BUY NOW
          </a>
        </div>

        {/* Second Column with Image */}
        <div className="col-6 position-relative">
          {/* Image 1 */}
          <img
            src="/Ellipse1.png"
            alt="ellipse1"
            style={{
              position: "absolute",
              top: "60px",
              left: "-10px",
              bottom:"20px",
              right:"500px",
              zIndex: 1,
              maxWidth: "100%",
              height: "auto",
            }}
          />
          {/* Image 2 */}
          <img
            src="/Ellipse2.png"
            alt="ellipse2"
            style={{
              position: "absolute",
              top: "70px",
              left: "8px",
              right:"500px",
              zIndex: 2,
              maxWidth: "70%",
              height: "auto",
            }}
          />
           {/* Image 3 */}
          <img
            src="/Ellipse3.png"
            alt="ellipse3"
            style={{
              position: "absolute",
              top: "150px",
              left: "100px",
              right:"100px",
              zIndex: 2,
              maxWidth: "45%",
              height: "auto",
            }}
          />
          {/* Image 3 - Overlapping */}
          <img
            src="card.png"
            alt="product"
            style={{
              position: "absolute",
              top: "230px",
              left: "180px",
              zIndex: 3,
              padding:"10px",
              maxWidth: "20%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Price;
