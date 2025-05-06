// const nodes = new vis.DataSet([]);
//     const edges = new vis.DataSet([]);
//     let network;
//     const expandedDiseases = new Set();
//     const expandedNodes = new Set();
// const medicineIngredients  = {
//     "paracetamol": ["N-(4-hydroxyphenyl)acetamide", "Acetanilide", "Para-aminophenol"],
//   "Amoxicillin": ["Amoxicillin trihydrate", "Penicillin nucleus", "Aminopenicillin"],
//   "Aspirin": ["Acetylsalicylic acid", "Salicylic acid", "Acetic anhydride"],
//   "Ibuprofen": ["Isobutylphenylpropionic acid", "Propionic acid", "Carboxylic group"],
//   "Metformin": ["Metformin hydrochloride", "Biguanide", "Dimethylamine"],
//   "Atorvastatin": ["Atorvastatin calcium", "Pyrrole ring", "Fluorophenyl group"],
//   "Clopidogrel": ["Clopidogrel bisulfate", "Thienopyridine", "Carboxylic acid ester"],
//   "Ranitidine": ["Ranitidine hydrochloride", "Furan ring", "Nitroethene"],
//   "Montelukast": ["Montelukast sodium", "Quinoline", "Sodium salt"],
//   "Rac-salbutamol": ["Salbutamol sulfate", "Phenylethanolamine", "Tert-butyl group"],
//   "Cetirizine": ["Cetirizine dihydrochloride", "Piperazine", "Carboxylic acid"],
//   "Fluconazole": ["Fluconazole base", "Triazole ring", "Difluorophenyl group"],
//   "Amoxicillin (alt)": ["Amoxicillin sodium", "Thiazolidine ring", "Amino group"],
//   "Diclofenac": ["Diclofenac sodium", "Phenylacetic acid", "Chlorophenyl group"],
//   "Ibutilide": ["Ibutilide fumarate", "Methanesulfonamide", "Phenyl group"],
//   "Moxifloxacin": ["Moxifloxacin hydrochloride", "Fluoroquinolone", "Carboxyl group"],
//   "Propofol": ["2,6-diisopropylphenol", "Phenol group", "Isopropyl group"],
//   "Carbamazepin": ["Carbamazepine", "Dibenzazepine", "Urea group"],
//   "Pregabalin": ["3-isobutyl GABA", "Isobutyl group", "Gamma-aminobutyric acid"],
//   "Doxycycline": ["Doxycycline hyclate", "Tetracycline core", "Hydroxyl groups"],
//   "Ac-warfarin": ["Warfarin sodium", "Coumarin", "Hydroxybenzyl group"],
//   "Hydrochlorothiazide": ["Hydrochlorothiazide", "Thiazide ring", "Sulfonamide"],
//   "Levothyroxine / liothyronine": ["Levothyroxine", "Liothyronine", "Iodinated tyrosine"],
//   "Metoprolol": ["Metoprolol tartrate", "Beta-hydroxypropylamine", "Aromatic ether"],
//   "Omeprazole": ["Omeprazole magnesium", "Benzimidazole", "Sulfoxide group"],
//   "Ciprofloxacin": ["Ciprofloxacin hydrochloride", "Fluoroquinolone core", "Piperazine ring"],
//   "Sertraline": ["Sertraline hydrochloride", "Naphthalene", "Amine group"],
//   "Alprazolam": ["Alprazolam base", "Triazolobenzodiazepine", "Methyl group"],
//   "Levalbuterol": ["Levalbuterol hydrochloride", "Catechol", "Isopropylamino group"],
//   "Insulin glargine": ["Glycine", "Asparagine", "Insulin A and B chains"],
//   "Risperidone": ["Risperidone base", "Benzisoxazole", "Piperidine"],
//   "Haloperidol": ["Haloperidol base", "Butyrophenone", "Chlorophenyl group"],
//   "Lamotrigine": ["Lamotrigine base", "Dichlorophenyl ring", "Triazine"],
//   "Azithromycin": ["Azithromycin dihydrate", "Macrolide", "Desosamine sugar"],
//   "Linezolid": ["Linezolid base", "Oxazolidinone ring", "Fluorophenyl group"],
//   "Beclometasone": ["Beclometasone dipropionate", "Corticosteroid", "Propionate group"],
//   "Finasteride": ["Finasteride base", "Azasteroid", "Lactam group"],
//   "Tamsulosin": ["Tamsulosin hydrochloride", "Sulfonamide", "Methoxyphenethylamine"],
//   "Isotretinoin": ["13-cis-retinoic acid", "Vitamin A derivative", "Carboxylic acid"],
//   "Levodopa": ["Levodopa", "Carbidopa", "Phenylalanine derivative"]
//   };



// function switchTab(tabName) {
//     document.querySelectorAll('.tab-button').forEach(button => {
//         button.classList.remove('active');
//         button.setAttribute('aria-selected', 'false');
//     });
//     document.querySelectorAll('.tab-content').forEach(content => {
//         content.classList.remove('active');
//     });

//     document.getElementById(`${tabName}-button`).classList.add('active');
//     document.getElementById(`${tabName}-button`).setAttribute('aria-selected', 'true');
//     document.getElementById(`${tabName}-tab`).classList.add('active');
// }
//   // 3) Fetch disease → plot root node + attach click
//   async function fetchMedicines() {
//     const diseaseRaw = document.getElementById('disease-input').value;
//     const disease = diseaseRaw.trim().toLowerCase();
//     if (!disease) return alert("Please enter a disease name.");

//     nodes.clear();
//     edges.clear();
//     expandedDiseases.clear();
//     expandedNodes.clear();
//     document.getElementById('medicine-list').innerHTML = "";

//     // add disease node
//     nodes.add({ id: disease, label: disease, level: 0, color: "#1abc9c" });

//     // init network
//     network = new vis.Network(
//       document.getElementById("network"),
//       { nodes, edges },
//       {
//         nodes: { shape: "dot", size: 15, font: { size: 14 } },
//         layout: { randomSeed: 2 },
//         physics: {
//           enabled: true,
//           solver: "forceAtlas2Based",
//           stabilization: { iterations: 150 }
//         }
//       }
//     );
    
//     // disease click → fetch medicines
//     network.on("click", params => {
//       if (!params.nodes.length) return;
//       const clicked = params.nodes[0];
//       if (clicked === disease && !expandedDiseases.has(disease)) {
//         expandedDiseases.add(disease);
//         expandDisease(disease);
       
//       }
//     });

//     // medicine-dot click → expand ingredients
//     network.on("click", params => {
//       if (!params.nodes.length) return;
//       const clicked = params.nodes[0];
//       const data = nodes.get(clicked);
//       if (data.level === 1) {
//         expandMedicineNode(clicked, data.label);
       
//       }
//     });
//   }

//   // 4) expand disease → fetch & add medicines
//   async function expandDisease(disease) {
//     const sparql = `
//       SELECT ?medicineLabel WHERE {
//         ?medicine wdt:P2175 ?disease.
//         ?disease rdfs:label "${disease}"@en.
//         SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
//       }`;
//     const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(sparql)}&format=json`;

//     try {
//       const res  = await fetch(url);
//       const json = await res.json();
//       const results = json.results.bindings;
//       const list = document.getElementById('medicine-list');

//       results.forEach((item, i) => {
//         const medName = item.medicineLabel.value;
//         const medId   = `${disease}-med-${i}`;
//         nodes.add({ id: medId, label: medName, level: 1, color: "#3498db" });
//         edges.add({ from: disease, to: medId });

//         const li = document.createElement('li');
//         li.textContent = medName;
//         li.onclick = () => expandMedicineNode(medId, medName);
//         list.appendChild(li);
//       });
//     } catch (err) {
//       console.error("SPARQL error:", err);
//     }
//   }

//   // 5) expand medicine → show ingredients
//   function expandMedicineNode(nodeId, medName) {
//     if (expandedNodes.has(nodeId)) return;
//     expandedNodes.add(nodeId);

//     const key = medName.trim().toLowerCase();
//     const ings = medicineIngredients[key] || [];

//     ings.forEach((ing, i) => {
//       const ingId = `${nodeId}-ing-${i}`;
//       nodes.add({ id: ingId, label: ing, level: 2, color: "#f39c12" });
//       edges.add({ from: nodeId, to: ingId });
//     });
//   }

//   // 6) wire up Search button
//   document.getElementById('search-btn')
//           .addEventListener('click', fetchMedicines);
// async function fetchDiseases() {
// const medicine = document.getElementById('medicine-input').value;
// if (!medicine) return alert("Please enter a medicine name.");

// const query = `
// SELECT ?diseaseLabel WHERE {
// ?medicine wdt:P2175 ?disease.
// ?medicine rdfs:label "${medicine}"@en.
// SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
// }`;

// const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(query)}&format=json`;

// try {
//     const response = await fetch(url);
//     const data = await response.json();
//     const results = data.results.bindings;

//     const diseaseList = document.getElementById('disease-results');
//     diseaseList.innerHTML = results.length ? results.map(item => `<li>${item.diseaseLabel.value}</li>`).join('') : "<li>No results found</li>";
// } catch (error) {
//     console.error("Error fetching data:", error);
// }
// }

// function openGraph(medicine) {
//     // Normalize to lowercase and trimmed
//     const normalized = medicine.trim().toLowerCase();
//     localStorage.setItem("selectedMedicine", normalized);
//     window.location.href = "graph.html";
// }


const nodes = new vis.DataSet([]);
    const edges = new vis.DataSet([]);
    let network;
    const expandedDiseases = new Set();
    const expandedNodes = new Set();
const medicineIngredients  = {
    "paracetamol": ["N-(4-hydroxyphenyl)acetamide", "Acetanilide", "Para-aminophenol"],
  "amoxicillin": ["Amoxicillin trihydrate", "Penicillin nucleus", "Aminopenicillin"],
  "aspirin": ["Acetylsalicylic acid", "Salicylic acid", "Acetic anhydride"],
  "ibuprofen": ["Isobutylphenylpropionic acid", "Propionic acid", "Carboxylic group"],
  "metformin": ["Metformin hydrochloride", "Biguanide", "Dimethylamine"],
  "atorvastatin": ["Atorvastatin calcium", "Pyrrole ring", "Fluorophenyl group"],
  "clopidogrel": ["Clopidogrel bisulfate", "Thienopyridine", "Carboxylic acid ester"],
  "ranitidine": ["Ranitidine hydrochloride", "Furan ring", "Nitroethene"],
  "montelukast": ["Montelukast sodium", "Quinoline", "Sodium salt"],
  "rac-salbutamol": ["Salbutamol sulfate", "Phenylethanolamine", "Tert-butyl group"],
  "cetirizine": ["Cetirizine dihydrochloride", "Piperazine", "Carboxylic acid"],
  "fluconazole": ["Fluconazole base", "Triazole ring", "Difluorophenyl group"],
  "amoxicillin (alt)": ["Amoxicillin sodium", "Thiazolidine ring", "Amino group"],
  "diclofenac": ["Diclofenac sodium", "Phenylacetic acid", "Chlorophenyl group"],
  "ibutilide": ["Ibutilide fumarate", "Methanesulfonamide", "Phenyl group"],
  "moxifloxacin": ["Moxifloxacin hydrochloride", "Fluoroquinolone", "Carboxyl group"],
  "propofol": ["2,6-diisopropylphenol", "Phenol group", "Isopropyl group"],
  "carbamazepin": ["Carbamazepine", "Dibenzazepine", "Urea group"],
  "pregabalin": ["3-isobutyl GABA", "Isobutyl group", "Gamma-aminobutyric acid"],
  "doxycycline": ["Doxycycline hyclate", "Tetracycline core", "Hydroxyl groups"],
  "ac-warfarin": ["Warfarin sodium", "Coumarin", "Hydroxybenzyl group"],
  "hydrochlorothiazide": ["Hydrochlorothiazide", "Thiazide ring", "Sulfonamide"],
  "levothyroxine / liothyronine": ["Levothyroxine", "Liothyronine", "Iodinated tyrosine"],
  "metoprolol": ["Metoprolol tartrate", "Beta-hydroxypropylamine", "Aromatic ether"],
  "omeprazole": ["Omeprazole magnesium", "Benzimidazole", "Sulfoxide group"],
  "ciprofloxacin": ["Ciprofloxacin hydrochloride", "Fluoroquinolone core", "Piperazine ring"],
  "sertraline": ["Sertraline hydrochloride", "Naphthalene", "Amine group"],
  "alprazolam": ["Alprazolam base", "Triazolobenzodiazepine", "Methyl group"],
  "levalbuterol": ["Levalbuterol hydrochloride", "Catechol", "Isopropylamino group"],
  "insulin glargine": ["Glycine", "Asparagine", "Insulin A and B chains"],
  "risperidone": ["Risperidone base", "Benzisoxazole", "Piperidine"],
  "haloperidol": ["Haloperidol base", "Butyrophenone", "Chlorophenyl group"],
  "lamotrigine": ["Lamotrigine base", "Dichlorophenyl ring", "Triazine"],
  "azithromycin": ["Azithromycin dihydrate", "Macrolide", "Desosamine sugar"],
  "linezolid": ["Linezolid base", "Oxazolidinone ring", "Fluorophenyl group"],
  "beclometasone": ["Beclometasone dipropionate", "Corticosteroid", "Propionate group"],
  "finasteride": ["Finasteride base", "Azasteroid", "Lactam group"],
  "tamsulosin": ["Tamsulosin hydrochloride", "Sulfonamide", "Methoxyphenethylamine"],
  "isotretinoin": ["13-cis-retinoic acid", "Vitamin A derivative", "Carboxylic acid"],
  "levodopa": ["Levodopa", "Carbidopa", "Phenylalanine derivative"],
  "onsen": ["Mineral water", "Hydrogen sulfide", "Carbon dioxide"],
  "diabetic diet": ["Low glycemic foods", "Fiber", "Complex carbohydrates"],
  "chromium picolinate": ["Chromium(III)", "Picolinic acid"],
  "Insulin Lispro": ["Insulin lispro", "Zinc", "Glycerol"],
  "Glucerna": ["Maltodextrin", "Soy protein", "Canola oil"],
  "voglibose": ["Voglibose", "Pyranose ring", "Amino group"],
  "hydrogen carbonate spring": ["Sodium bicarbonate", "Carbon dioxide", "Mineral water"],
  "sulphur spring": ["Hydrogen sulfide", "Sulfur compounds", "Mineral water"],
  "Sulfur Spring": ["Hydrogen sulfide", "Sulfur", "Mineral content"],
  "A Patient-Centered": ["Not a compound", "Descriptive term"],
  "bismuth": ["Bismuth subsalicylate", "Salicylic acid", "Bismuth oxychloride"],
  "clarithromycin": ["Clarithromycin base", "Macrolide ring", "Desosamine sugar"],
  "metronidazole": ["Metronidazole base", "Nitroimidazole", "Hydroxyethyl group"],
  "enrofloxacin": ["Enrofloxacin base", "Fluoroquinolone", "Ethyl group"],
  "cilastatin": ["Cilastatin sodium", "Beta-lactamase inhibitor", "Thienyl group"],
  "(2R)-daptomycin": ["Daptomycin", "Lipid tail", "Cyclic lipopeptide"],
  "amaranth": ["Amaranth dye", "Azo group", "Sulfonic acid"],
  "bacitracin a": ["Bacitracin A", "Cyclic peptide", "Thiazoline ring"],
  "thiamphenicol": ["Thiamphenicol base", "Nitro group", "Thioether"],
  "azlocillin": ["Azlocillin sodium", "Penicillin nucleus", "Ureido group"],
  "interferon gamma-1b": ["Interferon gamma", "Recombinant protein"],
  "ceftazidime": ["Ceftazidime pentahydrate", "Beta-lactam ring", "Pyridinium group"],
  "tobramycin": ["Tobramycin sulfate", "Aminoglycoside", "Deoxystreptamine"],
  "demeclocycline": ["Demeclocycline hydrochloride", "Tetracycline core", "Chlorine substituent"]
  };


  const diseaseSymptoms  ={
    "fever": ["High temperature", "Chills", "Sweating"],
    "bacterial infectious disease": ["Fever", "Chills", "Fatigue", "Headache"],
    "myocardial infarction": ["Chest pain", "Shortness of breath", "Nausea", "Fatigue"],
    "inflammation": ["Redness", "Swelling", "Pain", "Heat"],
    "diabetes": ["Frequent urination", "Increased thirst", "Fatigue", "Blurred vision"],
    "hypercholesterolemia": ["Often asymptomatic; detected through blood tests"],
    "stroke": ["Sudden numbness", "Confusion", "Trouble speaking", "Loss of balance"],
    "gastroesophageal reflux disease": ["Heartburn", "Chest pain", "Difficulty swallowing", "Regurgitation"],
    "asthma": ["Shortness of breath", "Wheezing", "Chest tightness", "Coughing"],
    "bronchospasm": ["Chest tightness", "Wheezing", "Shortness of breath", "Coughing"],
    "allergic rhinitis": ["Sneezing", "Runny nose", "Itchy eyes", "Nasal congestion"],
    "invasive fungal infections": ["Fever", "Chills", "Muscle aches", "Fatigue"],
    "gram-positive bacterial infections": ["Fever", "Fatigue", "Headache", "Skin changes"],
    "pain": ["Aching", "Throbbing", "Stabbing sensations", "Discomfort"],
    "atrial fibrillation": ["Irregular heartbeat", "Palpitations", "Fatigue", "Shortness of breath"],
    "pneumonia": ["Cough", "Fever", "Chest pain", "Shortness of breath"],
    "anaesthesia": ["Numbness", "Loss of sensation", "Unconsciousness", "Drowsiness"],
    "epilepsy": ["Seizures", "Loss of consciousness", "Confusion", "Staring spells"],
    "neuropathic pain": ["Burning sensation", "Tingling", "Numbness", "Sharp pain"],
    "typhus": ["High fever", "Headache", "Rash", "Muscle aches"],
    "thrombosis": ["Swelling", "Pain", "Redness", "Warmth in affected area"],
    "arterial hypertension": ["Often asymptomatic; possible headaches", "Dizziness", "Blurred vision"],
    "hypothyroidism": ["Fatigue", "Weight gain", "Cold intolerance", "Depression"],
    "angina pectoris": ["Chest pain", "Shortness of breath", "Fatigue", "Nausea"],
    "peptic ulcer disease": ["Abdominal pain", "Bloating", "Heartburn", "Nausea"],
    "urinary tract infection": ["Burning sensation during urination", "Frequent urination", "Cloudy urine", "Pelvic pain"],
    "mental depression": ["Persistent sadness", "Loss of interest", "Fatigue", "Changes in appetite"],
    "anxiety disorder": ["Excessive worry", "Restlessness", "Fatigue", "Difficulty concentrating"],
    "chronic obstructive pulmonary disease": ["Chronic cough", "Shortness of breath", "Wheezing", "Chest tightness"],
    "type-1 diabetes": ["Frequent urination", "Increased thirst", "Weight loss", "Fatigue"],
    "schizophrenia": ["Hallucinations", "Delusions", "Disorganized thinking", "Lack of motivation"],
    "delirium": ["Confusion", "Disorientation", "Hallucinations", "Agitation"],
    "bipolar disorder": ["Mood swings", "Mania", "Depression", "Irritability"],
    "chlamydia infection": ["Often asymptomatic", "Genital discharge", "Painful urination", "Pelvic pain"],
    "methicillin-resistant staphylococcus aureus": ["Skin infections", "Redness", "Swelling", "Pus formation"],
    "allergic asthma": ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing"],
    "benign prostatic hyperplasia": ["Frequent urination", "Urgency", "Weak urine stream", "Difficulty starting urination"],
    "urinary retention": ["Inability to urinate", "Painful urination", "Abdominal discomfort", "Frequent urges"],
    "severe acne": ["Inflamed pimples", "Pustules", "Nodules", "Scarring"],
    "parkinson's disease": ["Tremors", "Slowed movement", "Muscle stiffness", "Balance problems"]
  };
       

function switchTab(tabName) {
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
        button.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(`${tabName}-button`).classList.add('active');
    document.getElementById(`${tabName}-button`).setAttribute('aria-selected', 'true');
    document.getElementById(`${tabName}-tab`).classList.add('active');
}
  // 3) Fetch disease → plot root node + attach click
  async function fetchMedicines() {
    const diseaseRaw = document.getElementById('disease-input').value;
    const disease = diseaseRaw.trim().toLowerCase();
    if (!disease) return alert("Please enter a disease name.");

    nodes.clear();
    edges.clear();
    expandedDiseases.clear();
    expandedNodes.clear();
    document.getElementById('medicine-list').innerHTML = "";

    // add disease node
    nodes.add({ id: disease, label: disease, level: 0, color: "#1abc9c" });

    // init network
    network = new vis.Network(
      document.getElementById("network"),
      { nodes, edges },
      {
        nodes: { shape: "dot", size: 15, font: { size: 14 } },
        layout: { randomSeed: 2 },
        physics: {
          enabled: true,
          solver: "forceAtlas2Based",
          stabilization: { iterations: 150 }
        }
      }
    );
    
    // disease click → fetch medicines
    network.on("click", params => {
      if (!params.nodes.length) return;
      const clicked = params.nodes[0];
      if (clicked === disease && !expandedDiseases.has(disease)) {
        expandedDiseases.add(disease);
        expandDisease(disease);
       
      }
    });

    // medicine-dot click → expand ingredients
    network.on("click", params => {
      if (!params.nodes.length) return;
      const clicked = params.nodes[0];
      const data = nodes.get(clicked);
      if (data.level === 1) {
        expandMedicineNode(clicked, data.label);
       
      }
    });
  }

  // 4) expand disease → fetch & add medicines
  async function expandDisease(disease){
    const sparql = `
      SELECT ?medicineLabel WHERE {
        ?medicine wdt:P2175 ?disease.
        ?disease rdfs:label "${disease}"@en.
        SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
      }`;
    const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(sparql)}&format=json`;

    try {
      const res  = await fetch(url);
      const json = await res.json();
      const results = json.results.bindings;
      const list = document.getElementById('medicine-list');

      results.forEach((item, i) => {
        const medName = item.medicineLabel.value;
        const medId   = `${disease}-med-${i}`;
        nodes.add({ id: medId, label: medName, level: 1, color: "#3498db" });
        edges.add({ from: disease, to: medId });

        const li = document.createElement('li');
        li.textContent = medName;
        li.onclick = () => expandMedicineNode(medId, medName);
        list.appendChild(li);
      });
    } catch (err) {
      console.error("SPARQL error:", err);
    }
  }

  // 5) expand medicine → show ingredients
  function expandMedicineNode(nodeId, medName) {
    if (expandedNodes.has(nodeId)) return;
    expandedNodes.add(nodeId);

    const key = medName.trim().toLowerCase();
    const ings = medicineIngredients[key] || [];

    ings.forEach((ing, i) => {
      const ingId = `${nodeId}-ing-${i}`;
      nodes.add({ id: ingId, label: ing, level: 2, color: "#f39c12" });
      edges.add({ from: nodeId, to: ingId });
    });
  }

  // 6) wire up Search button
  document.getElementById('search-btn')
          .addEventListener('click', fetchMedicines);
  
          
     
// async function fetchDiseases() {
//   const medicine = document.getElementById('medicine-input').value.toLowerCase();
//   if (!medicine) return alert("Please enter a medicine name.");
  
//   const query = `
//   SELECT ?diseaseLabel WHERE {
//   ?medicine wdt:P2175 ?disease.
//   ?medicine rdfs:label "${medicine}"@en.
//   SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
//   }`;

//   const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(query)}&format=json`;

//   try {
//       const response = await fetch(url);
//       const data = await response.json();
//       const results = data.results.bindings;
    
//       const diseaseList = document.getElementById('disease-results');
//       diseaseList.innerHTML = results.length ? results.map(item => `<li>${item.diseaseLabel.value}</li>`).join('') : "<li>No results found</li>";
//   } catch (error) {
//       console.error("Error fetching data:", error);
//   }
// }

async function fetchDiseases() {
    const medicineRaw = document.getElementById('medicine-input').value;
    const medicine = medicineRaw.trim().toLowerCase();
    if (!medicine) return alert("Please enter a medicine name.");
   
    nodes.clear();
    edges.clear();
    expandedDiseases.clear();
    expandedNodes.clear();
    document.getElementById('disease-results').innerHTML = "";
  
    // Root node
    nodes.add({ id: medicine, label: medicine, level: 0, color: "#3498db" });
  
    // Init network
    network = new vis.Network(
      document.getElementById("network-medicine"),
      { nodes, edges },
      {
        nodes: { shape: "dot", size: 15, font: { size: 14 } },
        layout: { randomSeed: 3 },
        physics: {
          enabled: true,
          solver: "forceAtlas2Based",
          stabilization: { iterations: 150 }
        }
      }
    );
  
    network.on("click", params => {
      if (!params.nodes.length) return;
      const clicked = params.nodes[0];
      const data = nodes.get(clicked);
  
      if (clicked === medicine && !expandedNodes.has(medicine)) {
        expandedNodes.add(medicine);
        expandMedicineDiseases(medicine);
      } else if (data.level === 1 && !expandedNodes.has(clicked)) {
        expandedNodes.add(clicked);
        expandDiseaseSymptoms(clicked, data.label);
      }
    });
  }
  async function expandMedicineDiseases(medicine) {
  //  console.log(medicine+" here")
    const sparql = `
      SELECT ?diseaseLabel WHERE {
        ?medicine wdt:P2175 ?disease.
        ?medicine rdfs:label "${medicine}"@en.
        SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
      }`;
    const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(sparql)}&format=json`;
  
    try {
      const res  = await fetch(url);
      const json = await res.json();
      const results = json.results.bindings;
      const list = document.getElementById('disease-results');
       console.log(results); 
      results.forEach((item, i) => {
        const diseaseName = item.diseaseLabel.value;
       // console.log(diseaseName);
        const nodeId = `${medicine}-dis-${i}`;
        nodes.add({ id: nodeId, label: diseaseName, level: 1, color: "#1abc9c" });
        edges.add({ from: medicine, to: nodeId });
  
        const li = document.createElement('li');
        li.textContent = diseaseName;
        li.onclick = () => expandDiseaseSymptoms(nodeId, diseaseName);
        list.appendChild(li);
      });
    } catch (err) {
      console.error("SPARQL error:", err);
    }
  }

  function expandDiseaseSymptoms(nodeId, diseaseName) {
    console.log(diseaseName);
    const key = diseaseName.trim().toLowerCase();
    const symptoms = diseaseSymptoms[key] || [];
  
    symptoms.forEach((symptom, i) => {
      const symId = `${nodeId}-sym-${i}`;
      nodes.add({ id: symId, label: symptom, level: 2, color: "#e67e22" });
      edges.add({ from: nodeId, to: symId });
    });
  }
  

function openGraph(medicine) {
    // Normalize to lowercase and trimmed
    const normalized = medicine.trim().toLowerCase();
    localStorage.setItem("selectedMedicine", normalized);
    window.location.href = "graph.html";
}


