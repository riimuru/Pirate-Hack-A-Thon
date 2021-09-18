import React from "react";
import "./styles/Solutions.css";

const Solutions = () => {
  return (
    <div className="container">
      <h1 className="solTitle">Pirate Cloud solutions</h1>
      <p className="solTitleP">
        With the pirate suite you will be able to intergrate you whole
        infustructure logically and securely.
      </p>
      <h2>Privacy Pirate</h2>
      <p className="solSubP">
        Keep you businesses network secure with Privacy Pirate. Privacy Pirate
        is a VPN will route all your triffic to a different server which will
        keep your network anonymous at all times.
      </p>
      <img
        className="solImg"
        src="https://thumbs.dreamstime.com/b/pirate-padlock-data-privacy-pirate-padlock-data-privacy-vector-illustration-design-125967273.jpg"
        alt="privacy pirate"
      />
      <hr />
      <h2>Identity Pirate</h2>
      <p className="solSubP">
        Know how much person information is out there at all times with Identity
        Pirate. Identity Pirate is a indexing service that indexes through the
        internet to find if your personal information is out there.
      </p>
      <img
        className="solImg"
        src="https://roy.k12.mt.us/images/pirate-logo.png"
        alt="identaty pirate"
      />
      <hr />
      <h2>Pirate HR</h2>
      <p className="solSubP">
        Get through the hiring easily and stress free. Pirate HR takes takes in
        the applicants resume, indexes through it to see if they meet your
        certain requirements. After the index you will see a dashboard with
        their attributes.
      </p>
      <img
        className="solImg"
        src="https://www.mlive.com/resizer/n3GoBv7F45ZsyQ_3Jdt3q6exnQA=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/cadenceadvance_impact/photo/piratec0908-8jpg-a9a80afeabcda65a.jpg"
        alt="identaty pirate"
        style={{ width: 600, height: 600 }}
      />
      <hr />
      <h2>Pirate Training</h2>
      <p className="solSubP">
        Train your employees with ease. Pirate Training takes care of the
        training process with custum training modules that your employees will
        be able to take to increase their knowledge in any domain.
      </p>
      <hr />
      <img
        className="solImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhzmeKZV4CwllDKSTOPN6VfWeJgz3qZKCF3zRUoO4Xw4vtWQ6sq_-MeFQqDrur8Qu7AlQ&usqp=CAU"
        alt="pirate training"
        style={{ width: 600, height: 600, marginBottom: 50 }}
      />
      <h2>Pirate DB</h2>
      <p className="solSubP">
        Store your business data quckly and securely. Pirate DB is a no-sql
        cloud database that allows you to store and access your data quickly and
        securely.
      </p>
      <img
        className="solImg"
        src="https://titles.trackercdn.com/modern-warfare/db/images/ui_emblem_833.png"
        alt="pirate db"
        style={{ width: 600, height: 600, marginBottom: 50 }}
      />
    </div>
  );
};

export default Solutions;
