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

    async function fetchMedicines() {
    const disease = document.getElementById('disease-input').value;
    if (!disease) return alert("Please enter a disease name.");

    const query = `
    SELECT ?medicineLabel WHERE {
    ?medicine wdt:P2175 ?disease.
    ?disease rdfs:label "${disease}"@en.
    SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
    }`;

    const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(query)}&format=json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const results = data.results.bindings;

        const medicineList = document.getElementById('medicine-results');
        medicineList.innerHTML = results.length
  ? results.map(item => `<li onclick="openGraph('${item.medicineLabel.value}')">${item.medicineLabel.value}</li>`).join('')
  : "<li>No results found</li>";


    } catch (error) {
        console.error("Error fetching data:", error);
    }
    }

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
    
    
    
