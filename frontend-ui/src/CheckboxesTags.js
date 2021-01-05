import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Button from "@material-ui/core/Button";
import { render } from "react-dom";
// import "./CheckboxesTags.css";
import Typography from "@material-ui/core/Typography";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
    this.onTagsChange = this.onTagsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onTagsChange = (event, values) => {
    this.setState(
      {
        tags: values,
      },
      () => {
        // This will output an array of objects
        // given by Autocompelte options property.
        console.log(this.state.tags);
      }
    );
  };
  handleSubmit(event) {
    event.preventDefault();
    // this.setState({ prediction: "" });
    const url = "http://localhost:8000/scoreJson";
    const bodyData = JSON.stringify(this.state.tags);
    const reqOpt = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: bodyData,
    };
    fetch(url, reqOpt)
      .then((resp) => resp.json())
      .then((respJ) => this.setState({ prediction: respJ.prediction }));
  }

  render() {
    return (
      <div style={{ width: 500 }}>
        <div className="dp">
          <Typography
            variant="h4"
            component="h4"
            style={{ margin: "30px", fontWeight: "bolder", color: "#eb144c" }}
          >
            You are Suffering from<strong> {this.state.prediction}</strong>
          </Typography>
        </div>

        <form onSubmit={this.handleSubmit}>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={diseaseData}
            onChange={this.onTagsChange}
            disableCloseOnSelect
            getOptionLabel={(option) => option.Title}
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.Title}
              </React.Fragment>
            )}
            style={{ width: 480 }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Please Select Symptoms"
              />
            )}
          />
          {/* <input type="submit" value="Submit" /> */}
          <Button
            style={{ margin: "15px" }}
            value="Submit"
            type="submit"
            variant="contained"
            color="secondary"
          >
            Predict
          </Button>
        </form>
      </div>
    );
  }
}

const diseaseData = [
  { Symptom: "itching", Title: "Itching" },
  { Symptom: "skin_rash", Title: "Skin Rash" },
  { Symptom: "nodal_skin_eruptions", Title: "Nodal Skin Eruptions" },
  { Symptom: "continuous_sneezing", Title: "Continuous Sneezing" },
  { Symptom: "shivering", Title: "Shivering" },
  { Symptom: "chills", Title: "Chills" },
  { Symptom: "joint_pain", Title: "Joint Pain" },
  { Symptom: "stomach_pain", Title: "Stomach Pain" },
  { Symptom: "acidity", Title: "Acidity" },
  { Symptom: "ulcers_on_tongue", Title: "Ulcers on Tongue" },
  { Symptom: "muscle_wasting", Title: "Muscle Wasting" },
  { Symptom: "vomiting", Title: "Vomiting" },
  { Symptom: "burning_micturition", Title: "Burning Micturition" },
  { Symptom: "spotting_ urination", Title: "Spotting Urination" },
  { Symptom: "fatigue", Title: "Fatigue" },
  { Symptom: "weight_gain", Title: "Weight Gain" },
  { Symptom: "anxiety", Title: "Anxiety" },
  { Symptom: "cold_hands_and_feets", Title: "Cold Hands and Feets" },
  { Symptom: "mood_swings", Title: "Mood Swings" },
  { Symptom: "weight_loss", Title: "Weight Loss" },
  { Symptom: "restlessness", Title: "Restlessness" },
  { Symptom: "lethargy", Title: "Lethargy" },
  { Symptom: "patches_in_throat", Title: "Patches in Throat" },
  { Symptom: "irregular_sugar_level", Title: "Irregular Sugar Level" },
  { Symptom: "cough", Title: "Cough" },
  { Symptom: "high_fever", Title: "High Fever" },
  { Symptom: "sunken_eyes", Title: "Sunken Eyes" },
  { Symptom: "breathlessness", Title: "Breathlessness" },
  { Symptom: "sweating", Title: "Sweating" },
  { Symptom: "dehydration", Title: "Dehydration" },
  { Symptom: "indigestion", Title: "Indigestion" },
  { Symptom: "headache", Title: "Headache" },
  { Symptom: "yellowish_skin", Title: "Yellowish Skin" },
  { Symptom: "dark_urine", Title: "Dark Urine" },
  { Symptom: "nausea", Title: "Nausea" },
  { Symptom: "loss_of_appetite", Title: "Loss of Appetite" },
  { Symptom: "pain_behind_the_eyes", Title: "Pain behind the Eyes" },
  { Symptom: "back_pain", Title: "Back Pain" },
  { Symptom: "constipation", Title: "Constipation" },
  { Symptom: "abdominal_pain", Title: "Abdominal Pain" },
  { Symptom: "diarrhoea", Title: "Diarrhoea" },
  { Symptom: "mild_fever", Title: "Mild Fever" },
  { Symptom: "yellow_urine", Title: "Yellow Urine" },
  { Symptom: "yellowing_of_eyes", Title: "Yellowing of Eyes" },
  { Symptom: "acute_liver_failure", Title: "Acute Liver Failure" },
  { Symptom: "fluid_overload", Title: "Fluid Overload" },
  { Symptom: "swelling_of_stomach", Title: "Swelling of Stomach" },
  { Symptom: "swelled_lymph_nodes", Title: "Swelled Lymph Nodes" },
  { Symptom: "malaise", Title: "Malaise" },
  {
    Symptom: "blurred_and_distorted_vision",
    Title: "Blurred and Distorted Vision",
  },
  { Symptom: "phlegm", Title: "Phlegm" },
  { Symptom: "throat_irritation", Title: "Throat Irritation" },
  { Symptom: "redness_of_eyes", Title: "Redness of Eyes" },
  { Symptom: "sinus_pressure", Title: "Sinus Pressure" },
  { Symptom: "runny_nose", Title: "Runny Nose" },
  { Symptom: "congestion", Title: "Congestion" },
  { Symptom: "chest_pain", Title: "Chest Pain" },
  { Symptom: "weakness_in_limbs", Title: "Weakness in Limbs" },
  { Symptom: "fast_heart_rate", Title: "Fast Heart Rate" },
  {
    Symptom: "pain_during_bowel_movements",
    Title: "Pain during Bowel Movements",
  },
  { Symptom: "pain_in_anal_region", Title: "Pain in Anal Region" },
  { Symptom: "bloody_stool", Title: "Bloody Stool" },
  { Symptom: "irritation_in_anus", Title: "Irritation in Anus" },
  { Symptom: "neck_pain", Title: "Neck Pain" },
  { Symptom: "dizziness", Title: "Dizziness" },
  { Symptom: "cramps", Title: "Cramps" },
  { Symptom: "bruising", Title: "Bruising" },
  { Symptom: "obesity", Title: "Obesity" },
  { Symptom: "swollen_legs", Title: "Swollen Legs" },
  { Symptom: "swollen_blood_vessels", Title: "Swollen Blood Vessels" },
  { Symptom: "puffy_face_and_eyes", Title: "Puffy Face and Eyes" },
  { Symptom: "enlarged_thyroid", Title: "Enlarged Thyroid" },
  { Symptom: "brittle_nails", Title: "Brittle Nails" },
  { Symptom: "swollen_extremeties", Title: "Swollen Extremeties" },
  { Symptom: "excessive_hunger", Title: "Excessive Hunger" },
  { Symptom: "extra_marital_contacts", Title: "Extra Martial Contacts" },
  { Symptom: "drying_and_tingling_lips", Title: "Drying and Tingling Lips" },
  { Symptom: "slurred_speech", Title: "Slurred Speech" },
  { Symptom: "knee_pain", Title: "Knee Pain" },
  { Symptom: "hip_joint_pain", Title: "Hip Joint Pain" },
  { Symptom: "muscle_weakness", Title: "Muscle Weakness" },
  { Symptom: "stiff_neck", Title: "Stiff Neck" },
  { Symptom: "swelling_joints", Title: "Swelling Joints" },
  { Symptom: "movement_stiffness", Title: "Movement Stiffness" },
  { Symptom: "spinning_movements", Title: "Spinning Movements" },
  { Symptom: "loss_of_balance", Title: "Loss of Balance" },
  { Symptom: "unsteadiness", Title: "Unsteadiness" },
  { Symptom: "weakness_of_one_body_side", Title: "Weakness of One Body Side" },
  { Symptom: "loss_of_smell", Title: "Loss of Smell" },
  { Symptom: "bladder_discomfort", Title: "Bladder Discomfort" },
  { Symptom: "foul_smell_of urine", Title: "Foul Smell of Urine" },
  { Symptom: "continuous_feel_of_urine", Title: "Continous Feel of Urine" },
  { Symptom: "passage_of_gases", Title: "Passage of Gases" },
  { Symptom: "internal_itching", Title: "Internal Itching" },
  { Symptom: "toxic_look_(typhos)", Title: "Toxic Look (Typhos)" },
  { Symptom: "depression", Title: "Depression" },
  { Symptom: "irritability", Title: "Irritability" },
  { Symptom: "muscle_pain", Title: "Muscle Pain" },
  { Symptom: "altered_sensorium", Title: "Altered Sensorium" },
  { Symptom: "red_spots_over_body", Title: "Red Spots Over Body" },
  { Symptom: "belly_pain", Title: "Belly Pain" },
  { Symptom: "abnormal_menstruation", Title: "Abnormal Menstruation" },
  { Symptom: "dischromic _patches", Title: "Dischromic Patches" },
  { Symptom: "watering_from_eyes", Title: "Watering from Eyes" },
  { Symptom: "increased_appetite", Title: "Increased Appetite" },
  { Symptom: "polyuria", Title: "Polyuria" },
  { Symptom: "family_history", Title: "Family History" },
  { Symptom: "mucoid_sputum", Title: "Mucoid Sputum" },
  { Symptom: "rusty_sputum", Title: "Rusty Sputum" },
  { Symptom: "lack_of_concentration", Title: "Lack of Concentration" },
  { Symptom: "visual_disturbances", Title: "Visual Disturbances" },
  {
    Symptom: "receiving_blood_transfusion",
    Title: "Receiving Blood Transfusion",
  },
  {
    Symptom: "receiving_unsterile_injections",
    Title: "Receiving Unsterile Injections",
  },
  { Symptom: "coma", Title: "Coma" },
  { Symptom: "stomach_bleeding", Title: "Stomach Bleeding" },
  { Symptom: "distention_of_abdomen", Title: "Distention of Abdomen" },
  {
    Symptom: "history_of_alcohol_consumption",
    Title: "History of Alcohol Consumption",
  },
  { Symptom: "fluid_overload.1", Title: "Fluid Overload" },
  { Symptom: "blood_in_sputum", Title: "Blood in Sputum" },
  { Symptom: "prominent_veins_on_calf", Title: "Prominent Veins on Calf" },
  { Symptom: "palpitations", Title: "Palpitations" },
  { Symptom: "painful_walking", Title: "Painful Walking" },
  { Symptom: "pus_filled_pimples", Title: "Pus Filled Pimples" },
  { Symptom: "blackheads", Title: "Blackheads" },
  { Symptom: "scurring", Title: "Scurring" },
  { Symptom: "skin_peeling", Title: "Skin Peeling" },
  { Symptom: "silver_like_dusting", Title: "Silver like Dusting" },
  { Symptom: "small_dents_in_nails", Title: "Small Dents in Nails" },
  { Symptom: "inflammatory_nails", Title: "Inflammatory Nails" },
  { Symptom: "blister", Title: "Blister" },
  { Symptom: "red_sore_around_nose", Title: "Red Sore Around Nose" },
  { Symptom: "yellow_crust_ooze", Title: "Yellow Crust Ooze" },
];
