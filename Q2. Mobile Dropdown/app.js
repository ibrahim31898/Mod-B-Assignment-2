var mobiles = {
    iphone: {
        iphone7: {
            processor: "Snapdragon 8 Gen 2",
            memory: { ram: 12, storage: 512 },
            camera: { rear: { main: 200, ultrawide: 12, telephoto: 10, telephotoPeriscope: 10 }, front: 10 },
            battery: 5000,
            operatingSystem: "Android 13",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
        },
        iphone8: {
            processor: "Snapdragon 12 Gen 5",
            memory: { ram: 8, storage: 256 },
            camera: { rear: { main: 180, ultrawide: 15, telephoto: 10, telephotoPeriscope: 20 }, front: 12 },
            battery: 8000,
            operatingSystem: "iphone 8",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
        },
        iphone8plus: {
            processor: "Snapdragon 5 Gen 6",
            memory: { ram: 8, storage: 128 },
            camera: { rear: { main: 160, ultrawide: 18, telephoto: 10, telephotoPeriscope: 8 }, front: 16 },
            battery: 5000,
            operatingSystem: "iphone 8",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
        },
        iphoneX: {
            processor: "Snapdragon 5 Gen 4",
            memory: { ram: 8, storage: 256 },
            camera: { rear: { main: 130, ultrawide: 16, telephoto: 10, telephotoPeriscope: 18 }, front: 14 },
            battery: 6000,
            operatingSystem: "iphone X",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
        },
        iphone11: {
            processor: "Snapdragon 7 Gen 9",
            memory: { ram: 16, storage: 512 },
            camera: { rear: { main: 150, ultrawide: 24, telephoto: 16, telephotoPeriscope: 10 }, front: 20 },
            battery: 10000,
            operatingSystem: "iphone 11",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
        }
    },
    xiomi: {
        redmiA2: {
            modelName: "Mi 12 Pro",
            display: { size: 6.73, resolution: "3200 x 1440", panelType: "AMOLED", refreshRate: 120 },
            processor: "Snapdragon 8 Gen 1",
            memory: { ram: 8, storage: 256 },
            camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
            battery: 4600,
            operatingSystem: "Android 12",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"]
        },
        redmi10: {
            modelName: "Mi 8 Pro",
            display: { size: 5.73, resolution: "3000 x 1320", panelType: "AMOLED", refreshRate: 100 },
            processor: "Snapdragon 7 Gen 5",
            memory: { ram: 12, storage: 256 },
            camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
            battery: 5000,
            operatingSystem: "Android 11",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"]
        },
        redmi11: {
            modelName: "Mi 14 Pro",
            display: { size: 6.0, resolution: "3000 x 1240", panelType: "AMOLED", refreshRate: 150 },
            processor: "Snapdragon 8 Gen 4",
            memory: { ram: 12, storage: 512 },
            camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
            battery: 8000,
            operatingSystem: "Android 12",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"]
        },
        redmi12: {
            modelName: "Mi 12 Pro",
            display: { size: 7.4, resolution: "3200 x 1440", panelType: "AMOLED", refreshRate: 180 },
            processor: "Snapdragon 12 Gen 1",
            memory: { ram: 12, storage: 512 },
            camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
            battery: 8000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"]
        },
        redmi13: {
            modelName: "Mi 14 Pro",
            display: { size: 8.03, resolution: "4200 x 1540", panelType: "AMOLED", refreshRate: 100 },
            processor: "Snapdragon 8 Gen 6",
            memory: { ram: 12, storage: 256 },
            camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
            battery: 10000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"]
        },
        redmi13C: {
            modelName: "Mi 14 Pro",
            display: { size: 8.43, resolution: "4200 x 1340", panelType: "AMOLED", refreshRate: 100 },
            processor: "Snapdragon 9 Gen 5",
            memory: { ram: 12, storage: 512 },
            camera: { rear: { main: "50MP", ultrawide: "50MP", telephoto: "48MP" }, front: "32MP" },
            battery: 10000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"]
        }
    },
    realme: {
        realmiNote50: {
            brand: "Realme",
            model: "hypothetical model",
            display: { size: "6.5 inches", resolution: "FHD+ (1080 x 2400 pixels)", type: "AMOLED" },
            processor: "Qualcomm Snapdragon 8 Gen 1",
            memory: { ram: "8GB", storage: "128GB" },
            camera: { rear: { resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)" }, front: { resolution: "16MP" } },
            battery: { capacity: "5000mAh", fastCharging: "65W" },
            operatingSystem: "Android 12",
            specialFeatures: ["In-display fingerprint sensor", "3.5mm headphone jack"]
        },
        realmiC67: {
            brand: "Realme",
            model: "hypothetical model",
            display: { size: "6.7 inches", resolution: "FHD+ (1280 x 2100 pixels)", type: "AMOLED" },
            processor: "Qualcomm Snapdragon 6 Gen 4",
            memory: { ram: "8GB", storage: "256GB" },
            camera: { rear: { resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)" }, front: { resolution: "14MP" } },
            battery: { capacity: "5000mAh", fastCharging: "65W" },
            operatingSystem: "Android 13",
            specialFeatures: ["In-display fingerprint sensor", "3.5mm headphone jack"]
        },
        realmiC11: {
            brand: "Realme",
            model: "hypothetical model",
            display: { size: "6.9 inches", resolution: "FHD+ (1280 x 2100 pixels)", type: "AMOLED" },
            processor: "Qualcomm Snapdragon 8 Gen 6",
            memory: { ram: "12GB", storage: "512GB" },
            camera: { rear: { resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)" }, front: { resolution: "14MP" } },
            battery: { capacity: "5000mAh", fastCharging: "65W" },
            operatingSystem: "Android 13",
            specialFeatures: ["In-display fingerprint sensor", "3.5mm headphone jack"]
        },
        realmiNote12: {
            brand: "Realme",
            model: "hypothetical model",
            display: { size: "7.5 inches", resolution: "FHD+ (1080 x 2400 pixels)", type: "AMOLED" },
            processor: "Qualcomm Snapdragon 8 Gen 4",
            memory: { ram: "16GB", storage: "512GB" },
            camera: { rear: { resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)" }, front: { resolution: "16MP" } },
            battery: { capacity: "6000mAh", fastCharging: "65W" },
            operatingSystem: "Android 12",
            specialFeatures: ["In-display fingerprint sensor", "3.5mm headphone jack"]
        },
        realmiC20: {
            brand: "Realme",
            model: "hypothetical model",
            display: { size: "8.0 inches", resolution: "FHD+ (1080 x 2400 pixels)", type: "AMOLED" },
            processor: "Qualcomm Snapdragon 9 Gen 5",
            memory: { ram: "8GB", storage: "512GB" },
            camera: { rear: { resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)" }, front: { resolution: "16MP" } },
            battery: { capacity: "5000mAh", fastCharging: "65W" },
            operatingSystem: "Android 14",
            specialFeatures: ["In-display fingerprint sensor", "3.5mm headphone jack"]
        }
    },
    samsung: {
        samsungGalaxyS22Ultra: {
            modelName: "Galaxy S22 Ultra",
            display: { size: 6.8, resolution: "3088 x 1440", panelType: "Dynamic AMOLED 2X", refreshRate: 120 },
            processor: "Snapdragon 8 Gen 1",
            memory: { ram: 12, storage: 512 },
            camera: { rear: { main: 108, ultrawide: 12, telephoto: 10, telephotoPeriscope: 10 }, front: 40 },
            battery: 5000,
            operatingSystem: "Android 12",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
        },
        samsungGalaxyS21Ultra: {
            modelName: "Galaxy S21 Ultra",
            display: { size: 6.8, resolution: "3200 x 1440", panelType: "Dynamic AMOLED 2X", refreshRate: 120 },
            processor: "Exynos 2100",
            memory: { ram: 12, storage: 256 },
            camera: { rear: { main: 108, ultrawide: 12, telephoto: 10, telephotoPeriscope: 10 }, front: 40 },
            battery: 5000,
            operatingSystem: "Android 11",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
        },
        samsungGalaxyNote20Ultra: {
            modelName: "Galaxy Note20 Ultra",
            display: { size: 6.9, resolution: "3088 x 1440", panelType: "Dynamic AMOLED 2X", refreshRate: 120 },
            processor: "Snapdragon 865+",
            memory: { ram: 12, storage: 256 },
            camera: { rear: { main: 108, ultrawide: 12, telephoto: 10 }, front: 10 },
            battery: 4500,
            operatingSystem: "Android 10",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"]
        },
        samsungGalaxyZFold3: {
            modelName: "Galaxy Z Fold3",
            display: { size: 7.6, resolution: "2208 x 1768", panelType: "Dynamic AMOLED 2X", refreshRate: 120 },
            processor: "Snapdragon 888",
            memory: { ram: 12, storage: 512 },
            camera: { rear: { main: 12, ultrawide: 12, telephoto: 12 }, front: 4 },
            battery: 4400,
            operatingSystem: "Android 11",
            specialFeatures: ["Foldable display", "Under-display camera"]
        },
        samsungGalaxyA52: {
            modelName: "Galaxy A52",
            display: { size: 6.5, resolution: "2400 x 1080", panelType: "Super AMOLED", refreshRate: 90 },
            processor: "Snapdragon 720G",
            memory: { ram: 8, storage: 128 },
            camera: { rear: { main: 64, ultrawide: 12, macro: 5, depth: 5 }, front: 32 },
            battery: 4500,
            operatingSystem: "Android 11",
            specialFeatures: ["IP67 water and dust resistance", "In-display fingerprint sensor"]
        }
    }
};

// Populate brands
const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');
const resultDiv = document.getElementById('result');

for (let brand in mobiles) {
    let option = document.createElement('option');
    option.value = brand;
    option.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
    brandSelect.appendChild(option);
}

// Handle brand change
brandSelect.addEventListener('change', function() {
    modelSelect.innerHTML = '<option value="">--Select Model--</option>';
    resultDiv.innerHTML = '';

    if (this.value) {
        let models = mobiles[this.value];
        for (let model in models) {
            let option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        }
    }
});

// Handle search
document.getElementById('searchBtn').addEventListener('click', function() {
    resultDiv.innerHTML = '';

    let brand = brandSelect.value;
    let model = modelSelect.value;

    if (brand && model) {
        let mobile = mobiles[brand][model];
        let details = `
            <h2>${brand.charAt(0).toUpperCase() + brand.slice(1)} ${model}</h2>
            <p><strong>Processor:</strong> ${mobile.processor}</p>
            <p><strong>RAM:</strong> ${mobile.memory.ram}GB</p>
            <p><strong>Storage:</strong> ${mobile.memory.storage}GB</p>
            <p><strong>Camera:</strong> Rear - ${Object.entries(mobile.camera.rear).map(([k, v]) => `${k}: ${v}MP`).join(', ')}; Front - ${mobile.camera.front}MP</p>
            <p><strong>Battery:</strong> ${mobile.battery}mAh</p>
            <p><strong>Operating System:</strong> ${mobile.operatingSystem}</p>
            <p><strong>Special Features:</strong> ${mobile.specialFeatures.join(', ')}</p>
        `;
        resultDiv.innerHTML = details;
    } else {
        resultDiv.textContent = 'Please select both brand and model.';
    }
});
