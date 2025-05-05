const nodes = new vis.DataSet([]);
    const edges = new vis.DataSet([]);
    let network;
    const expandedDiseases = new Set();
    const expandedNodes = new Set();
const medicineIngredients  = {
    "paracetamol": ["N-(4-hydroxyphenyl)acetamide", "Acetanilide", "Para-aminophenol"],
  "Amoxicillin": ["Amoxicillin trihydrate", "Penicillin nucleus", "Aminopenicillin"],
  "Aspirin": ["Acetylsalicylic acid", "Salicylic acid", "Acetic anhydride"],
  "Ibuprofen": ["Isobutylphenylpropionic acid", "Propionic acid", "Carboxylic group"],
  "Metformin": ["Metformin hydrochloride", "Biguanide", "Dimethylamine"],
  "Atorvastatin": ["Atorvastatin calcium", "Pyrrole ring", "Fluorophenyl group"],
  "Clopidogrel": ["Clopidogrel bisulfate", "Thienopyridine", "Carboxylic acid ester"],
  "Ranitidine": ["Ranitidine hydrochloride", "Furan ring", "Nitroethene"],
  "Montelukast": ["Montelukast sodium", "Quinoline", "Sodium salt"],
  "Rac-salbutamol": ["Salbutamol sulfate", "Phenylethanolamine", "Tert-butyl group"],
  "Cetirizine": ["Cetirizine dihydrochloride", "Piperazine", "Carboxylic acid"],
  "Fluconazole": ["Fluconazole base", "Triazole ring", "Difluorophenyl group"],
  "Amoxicillin (alt)": ["Amoxicillin sodium", "Thiazolidine ring", "Amino group"],
  "Diclofenac": ["Diclofenac sodium", "Phenylacetic acid", "Chlorophenyl group"],
  "Ibutilide": ["Ibutilide fumarate", "Methanesulfonamide", "Phenyl group"],
  "Moxifloxacin": ["Moxifloxacin hydrochloride", "Fluoroquinolone", "Carboxyl group"],
  "Propofol": ["2,6-diisopropylphenol", "Phenol group", "Isopropyl group"],
  "Carbamazepin": ["Carbamazepine", "Dibenzazepine", "Urea group"],
  "Pregabalin": ["3-isobutyl GABA", "Isobutyl group", "Gamma-aminobutyric acid"],
  "Doxycycline": ["Doxycycline hyclate", "Tetracycline core", "Hydroxyl groups"],
  "Ac-warfarin": ["Warfarin sodium", "Coumarin", "Hydroxybenzyl group"],
  "Hydrochlorothiazide": ["Hydrochlorothiazide", "Thiazide ring", "Sulfonamide"],
  "Levothyroxine / liothyronine": ["Levothyroxine", "Liothyronine", "Iodinated tyrosine"],
  "Metoprolol": ["Metoprolol tartrate", "Beta-hydroxypropylamine", "Aromatic ether"],
  "Omeprazole": ["Omeprazole magnesium", "Benzimidazole", "Sulfoxide group"],
  "Ciprofloxacin": ["Ciprofloxacin hydrochloride", "Fluoroquinolone core", "Piperazine ring"],
  "Sertraline": ["Sertraline hydrochloride", "Naphthalene", "Amine group"],
  "Alprazolam": ["Alprazolam base", "Triazolobenzodiazepine", "Methyl group"],
  "Levalbuterol": ["Levalbuterol hydrochloride", "Catechol", "Isopropylamino group"],
  "Insulin glargine": ["Glycine", "Asparagine", "Insulin A and B chains"],
  "Risperidone": ["Risperidone base", "Benzisoxazole", "Piperidine"],
  "Haloperidol": ["Haloperidol base", "Butyrophenone", "Chlorophenyl group"],
  "Lamotrigine": ["Lamotrigine base", "Dichlorophenyl ring", "Triazine"],
  "Azithromycin": ["Azithromycin dihydrate", "Macrolide", "Desosamine sugar"],
  "Linezolid": ["Linezolid base", "Oxazolidinone ring", "Fluorophenyl group"],
  "Beclometasone": ["Beclometasone dipropionate", "Corticosteroid", "Propionate group"],
  "Finasteride": ["Finasteride base", "Azasteroid", "Lactam group"],
  "Tamsulosin": ["Tamsulosin hydrochloride", "Sulfonamide", "Methoxyphenethylamine"],
  "Isotretinoin": ["13-cis-retinoic acid", "Vitamin A derivative", "Carboxylic acid"],
  "Levodopa": ["Levodopa", "Carbidopa", "Phenylalanine derivative"]
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
  async function expandDisease(disease) {
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
async function fetchDiseases() {
const medicine = document.getElementById('medicine-input').value;
if (!medicine) return alert("Please enter a medicine name.");

const query = `
SELECT ?diseaseLabel WHERE {
?medicine wdt:P2175 ?disease.
?medicine rdfs:label "${medicine}"@en.
SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}`;

const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(query)}&format=json`;

try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results.bindings;

    const diseaseList = document.getElementById('disease-results');
    diseaseList.innerHTML = results.length ? results.map(item => `<li>${item.diseaseLabel.value}</li>`).join('') : "<li>No results found</li>";
} catch (error) {
    console.error("Error fetching data:", error);
}
}

function openGraph(medicine) {
    // Normalize to lowercase and trimmed
    const normalized = medicine.trim().toLowerCase();
    localStorage.setItem("selectedMedicine", normalized);
    window.location.href = "graph.html";
}


