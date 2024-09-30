import React from "react";
import "./welcome.css"

function Welcome() {
  return (

    <div
      className="container"
      style={{
        backgroundImage: "url('/background.png')", // Use your background image
        backgroundSize: "cover", // Ensure the background covers the entire container
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 50px",
        boxSizing: "border-box",
        position: "relative", // Relative positioning for the absolute elements
        zIndex: 0, // The background image layer
        overflow: "hidden",
      }}
    >
  <nav className="navbar navbar-expand-lg"
        style={{
            width: "100%",
            position: "sticky", // Fixes it to the top, independent of the flex container
            top: 0,
            left: 0,
            marginBottom:"50px",
            zIndex: 10, // Ensures it stays above other content
            backgroundColor: "transparent", // Transparent background
        }}
      >
        <a className="navbar-brand" href="#" style={{ color: "#fff" }}>
         <img src="/logo.png" alt="logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active pl-4">
              <a className="nav-link" href="#" style={{ color: "#fff" ,paddingLeft:"300px"}}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#fff",paddingLeft:"20px" }}>
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#fff" ,paddingLeft:"10px",marginLeft:"5px"}}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#fff",paddingLeft:"10px" }}>
                Help
              </a>
            </li>
            <li className="nav-item">
               <a className="navbar-brand" href="#" style={{ color: "#fff" ,paddingLeft:"200px"}}>
                   <img src="/smalllogo.png" alt="logo"/>
                </a>
            </li>
          </ul>
        </div>
      </nav>
   <div className="row " style={{display:"flex",marginBottom:"20px"}}>
        
      {/* Left Column - Welcome Text */}
      <div className="text-column" style={{ flex: 1 }}>
        <p
          style={{
            color: "#FFFFFF",
            fontSize: "30px",
            marginBottom: "10px",
            fontWeight: "300",
          }}
        >
          Welcome to
        </p>
        <h1
          style={{
            fontSize: "45px",
            color: "#FFFFFF",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Pop Rock Crystal Shop!
        </h1>

        <p
          style={{
            color: "#FFFFFF",
            fontSize: "18px",
            maxWidth: "450px",
            marginBottom: "30px",
          }}
        >
          Here you will find unique phone accessories, crystals, jewelry, and
          more. Free shipping inside the U.S. and our phone grips come with a
          limited warranty. Enjoy!
        </p>

        <button
          className="shop-now-button btn"
          style={{
            backgroundColor: "#fff",
            color: "#317189",
            padding: "10px 30px",
            border: "none",
            borderRadius: "25px",
            fontSize: "18px",
            cursor: "pointer",
            marginRight: "20px",
            fontWeight: "bold",
          }}
        >
          SHOP NOW
        </button>
        <span style={{ fontSize: "18px", color: "#317189", cursor: "pointer" }}>
          about us
        </span>
      </div>

      {/* Right Column - Product Preview */}
      <div
        className="product-column"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="product-card"
          style={{
            width: "300px",
            height: "400px",
            backgroundColor: "#FFFFFF",
            borderRadius: "20px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Add shadow for the card
            padding: "20px",
            marginLeft:"50px",
            marginBottom:"20px",
            textAlign: "center",
            position: "relative", // For positioning the badge
            zIndex:"10",
          }}
        >
          {/* "New Lot" Badge */}
          <div
            className="new-badge"
            style={{
              position: "absolute",
              top: "40px",
              left:"-1px",
              backgroundColor: "#8A93E5",
              color: "#FFFFFF",
              padding: "5px 10px",
              borderRadius: "0 10px 10px 0px",
              fontSize: "14px",
            }}
          >
            New lot
          </div>

          {/* Product Image */}
          <img
            src="/crystal.png"
            alt="Product"
            style={{
              maxWidth: "100%",
              height: "auto",
              marginBottom: "20px",
            }}
          />


         {/* Pagination Controls as a Single Image */}
         <div
            className="pagination"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            {/* Single Image for Left Arrow, Dots, and Right Arrow */}
            <img
              src="/arrow.png" // Replace with your actual image path
              alt="Pagination Controls"
              style={{
                width: "150px", // Adjust this width based on your image size
                height: "auto",
                marginTop:"30px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <img
        src="/background1.png"
        alt="Bottom Wave"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right:0,
          margin: "0px",
          padding:"0px",
          width: "100vw",
          zIndex: 2, // Lower than other elements
        }}
      />

      {/* Scroll down indicator */}
      <div
        className="scroll-indicator"
        style={{
          position: "absolute",
          bottom: "-4px",
          left: "95%",
          transform: "translateX(-50%)",
          color: "#317189",
          fontSize: "16px",
          zIndex: 100, // Ensure it stays above the bottom image
        }}
      >
        <span><img src="/mouse.png" alt="scroll" /> </span> scroll down
      </div>
      </div>
      </div>
  );
}

export default Welcome;
