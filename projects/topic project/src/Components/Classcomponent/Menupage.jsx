import React from 'react';
import { Link, Outlet, } from 'react-router-dom';

const Menupage = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="classcomponents">class component</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="jsx">JSX</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="props">Props</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="State">State</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="Conditionalrendering">Conditionalrendering</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="Listsandkeys">Listsandkeys</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="controlledcompo">controlledcomponent</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="uncontrolledcompo">uncontrolledcomponent</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="SpredvsRest">SpredvsRest</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="CompositionvsInheritance">CompositionvsInheritance</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="APIExample">APIExample</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="CSSExample">CSSExample</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="CSSStyledCompo">CSSStyledCompo</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="StateLifting">StateLifting</Link>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <Link to="HighOrderCompo">HighOrderCompo</Link>
          </div>
        </div>
      </div>
      <Outlet></Outlet>

    </>
  );
};

export default Menupage;