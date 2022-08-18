import React from "react";
import Logo from "../../Icons/Logo";

export default function Nav() {
  return (
    <>
      <div className="container">
        <div
          className="d-lg-none"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasResponsive"
          aria-controls="offcanvasResponsive"
        >
          Icono Menu
        </div>

        <div
          className="offcanvas-lg offcanvas-end"
          tabindex="-1"
          id="offcanvasResponsive"
          aria-labelledby="offcanvasResponsiveLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-label="Close"
            ></button>
          </div>
          <div className="d-flex justify-content-between p-3">
            <div className="d-none d-lg-block d-md-none">
              <Logo height={60} width={60} />
            </div>
            <div className="offcanvas-body d-flex justify-content-lg-end justify-content-sm-center">
              <ul className="list-group list-group-horizontal-lg align-items-center">
                <li className="list-group-item ">Catalogue</li>
                <li className="list-group-item">About</li>
                <li className="list-group-item">User</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .list-group-item {
          border: none;
        }
      `}</style>
    </>
  );
}
