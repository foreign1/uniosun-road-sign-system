
import ha_acadBlockA from "../assets/audio/ha/Academic staff building block A.ogg"; 
import ha_ataoja from "../assets/audio/ha/Ataoja hostel.ogg";
import ha_bio_garden from "../assets/audio/ha/Biological garden.ogg"; 
import ha_chem_lab from "../assets/audio/ha/Chemical sciences laboratory.ogg";
import ha_health_sci from "../assets/audio/ha/College of health sciences.ogg";
import ha_digital_inov from "../assets/audio/ha/Digital innovation and business startup hub.ogg";
import ha_engineering from "../assets/audio/ha/Faculty of engineering.ogg";
import ha_env_sci from "../assets/audio/ha/Faculty of environmental sciences.ogg";
import ha_senate from "../assets/audio/ha/Senate building or admin building.ogg";
import ha_ict from "../assets/audio/ha/University ICT.ogg";

import yo_acadBlockA from "../assets/audio/yo/Academic staff building block A.ogg"; 
import yo_ataoja from "../assets/audio/yo/Ataoja hostel.ogg";
import yo_bio_garden from "../assets/audio/yo/Biological garden.ogg"; 
import yo_chem_lab from "../assets/audio/yo/Chemical sciences laboratory.ogg";
import yo_health_sci from "../assets/audio/yo/College of health sciences.ogg";
import yo_digital_inov from "../assets/audio/yo/Digital innovation and business startup hub.ogg";
import yo_engineering from "../assets/audio/yo/Faculty of engineering.ogg";
import yo_env_sci from "../assets/audio/yo/Faculty of environmental sciences.ogg";
import yo_senate from "../assets/audio/yo/Senate building or admin building.ogg";
import yo_ict from "../assets/audio/yo/University ICT.ogg";

const nativeSpeechMapping = {
  "English": {},
  "Hausa": {
    "Academic staff building block A": ha_acadBlockA,
    "Ataoja hostel": ha_ataoja,
    "Biological garden": ha_bio_garden,
    "Chemical sciences laboratory": ha_chem_lab,
    "College of health sciences": ha_health_sci,
    "Digital innovation and business startup hub": ha_digital_inov,
    "Faculty of engineering": ha_engineering,
    "Faculty of environmental sciences": ha_env_sci,
    "Senate building or admin building": ha_senate,
    "University ICT": ha_ict
  },
  "Igbo": {},
  "Yoruba": {
    "Academic staff building block A": yo_acadBlockA,
    "Ataoja hostel": yo_ataoja,
    "Biological garden": yo_bio_garden,
    "Chemical sciences laboratory": yo_chem_lab,
    "College of health sciences": yo_health_sci,
    "Digital innovation and business startup hub": yo_digital_inov,
    "Faculty of engineering": yo_engineering,
    "Faculty of environmental sciences": yo_env_sci,
    "Senate building or admin building": yo_senate,
    "University ICT": yo_ict
  }
}

export default nativeSpeechMapping;