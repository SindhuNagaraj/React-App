import React from "react";
import "./Departments.css";
import img1 from "../../images/Departments/Cardiology-img.jpg";
import img2 from "../../images/Departments/Dentist-img.jpg";
import img3 from "../../images/Departments/Gastrology-img.jpg";
import img4 from "../../images/Departments/Gynecalogy-img.jpg";
import img5 from "../../images/Departments/Labratory-img.jpg";
import img6 from "../../images/Departments/Neurology-img.jpg";
import img7 from "../../images/Departments/pediatrics-img.jpg";
import img8 from "../../images/Departments/Pulmonology-img.jpg";
import img9 from "../../images/Departments/rehabilation-img.jpg";

const Departments = () => {
  return (
    <div className="container">
      <h1 className="mt-4">Departments</h1>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="card department bg-light bg-gradient">
            <img
              src={img1}
              alt=""
              className="card-img-top"
              width="400"
              height="250"
            ></img>
            <div>
              <h3 className="h4">Cardiology</h3>
              <p>
                Cardiology is a branch of medicine that deals disorders of the
                heart & cardiovascular system. This includes medical diagnosis,
                congenital heart defects, coronary artery disease, heart
                failure, valvular heart disease.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card department bg-light bg-gradient">
            <img
              src={img2}
              alt=""
              className="card-img-top"
              width="400"
              height="250"
            ></img>
            <div>
              <h3 className="h4">Dentist</h3>
              <p>
                Evaluates them about oral health and disease prevention.
                Performs clinical procedures, such as exams, fillings, crowns,
                implants, extractions and corrective surgeries. Identifies,
                diagnoses and treats oral conditions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card department bg-light bg-gradient">
            <img
              src={img3}
              alt=""
              className="card-img-top"
              width="400"
              height="250"
            ></img>
            <div>
              <h3 className="h4">Gastrology</h3>
              <p>
                Gastroenterology is the branch of medicine focused on the
                digestive system and its disorders. Diseases affecting the
                gastrointestinal tract, which include the organs from mouth into
                anus, along with the alimentary canal.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card department bg-light bg-gradient">
            <img
              src={img4}
              alt=""
              className="card-img-top"
              width="400"
              height="250"
            ></img>
            <div>
              <h3 className="h4">Gynaecology</h3>
              <p>
                Gynaecology is the area of medicine that involves the treatment
                of women's diseases, especially those of the reproductive
                organs. It is paired with the field of obstetrics, forming the
                combined area of obstetrics and gynecology.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card department bg-light bg-gradient">
            <img
              src={img5}
              alt=""
              className="card-img-top"
              width="400"
              height="250"
            ></img>
            <div>
              <h3 className="h4">Laboratory</h3>
              <p>
                A laboratory is a facility that provides controlled conditions
                in which scientific or technological research, experiments.
                Laboratory services are provided in physicians' offices,
                clinics, hospitals, and regional and national referral centers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card department bg-light bg-gradient">
            <img
              src={img6}
              alt=""
              className="card-img-top"
              width="400"
              height="250"
            ></img>
            <div>
              <h3 className="h4">Neurology</h3>
              <p>
                Neurology is branch of medicine dealing with diagnosis &
                treatment of disease involving brain, spinal cord & peripheral
                nerves. Neurological practice relies on the field of
                neuroscience, the scientific study of the nervous system.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card department bg-light bg-gradient">
            <img
              src={img7}
              alt=""
              className="card-img-top"
              width="400"
              height="250"
            ></img>
            <div>
              <h3 className="h4">Pediatrics</h3>
              <p>
                Pediatrics is the branch of medicine that involves the medical
                care of infants, children, adolescents, and young adults. In the
                United Kingdom, paediatrics covers many of their youth until the
                age of 18.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card department bg-light bg-gradient">
            <img
              src={img8}
              alt=""
              className="card-img-top"
              width="400"
              height="250"
            ></img>
            <div>
              <h3 className="h4">Pulmonology</h3>
              <p>
                Pulmonology involves patients who need life support & mechanical
                ventilation. Pulmonologists are trained in diseases like
                pneumonia, asthma, tuberculosis, emphysema & chest infections.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card department bg-light bg-gradient">
            <img
              src={img9}
              alt=""
              className="card-img-top"
              width="400"
              height="250"
            ></img>
            <div>
              <h3 className="h4">Physical Rehabilation</h3>
              <p>
                Physical medicine & rehabilitation, also known as physiatry, is
                branch of medicine that aims to enhance & restore functional
                ability & quality of life to people with physical impairments or
                disabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
