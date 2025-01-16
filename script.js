

// Get DOM elements
const fileInput = document.getElementById('fileInput');
const uploadBox = document.querySelector('.upload-box');
const uploadedDocs = document.querySelector('.uploaded-docs');
const analyzeButton = document.querySelector('.analyze-button');
const loader = document.querySelector('.loader');
// Event listener for file input change
// Show the loader initially

let uploadedFiles = [];

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    let currentFiles = [];
    // Store the files in the uploadedFiles array
    uploadedFiles = [...uploadedFiles, ...files];
    currentFiles = [ ...files];
    
    
    // Repeat the handleFileSelect function for all uploaded files
    currentFiles.forEach(file => handleFileSelect({ target: { files: [file] } }));
});

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        // Display the file in the uploaded docs section
        const docDiv = document.createElement('div');
        docDiv.classList.add('doc');

        // Create file icon and name elements
        const fileIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        fileIcon.setAttribute('class', 'file-svg');
        fileIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        fileIcon.setAttribute('height', '20px');
        fileIcon.setAttribute('viewBox', '0 -960 960 960');
        fileIcon.setAttribute('width', '20px');
        fileIcon.setAttribute('fill', '#333');
        fileIcon.innerHTML = `<path d="M197.69-185.39h564.62q5.38 0 8.84-3.46t3.46-8.84v-364.62l-212.3-212.3H197.69q-5.38 0-8.84 3.46t-3.46 8.84v564.62q0 5.38 3.46 8.84t8.84 3.46Zm0 45.39q-23.59 0-40.64-17.05T140-197.69v-564.62q0-23.59 17.05-40.64T197.69-820h383.46L820-581.15v383.46q0 23.59-17.05 40.64T762.31-140H197.69Zm91.7-167.92h381.22v-45.39H289.39v45.39Zm0-149.39h381.22v-45.38H289.39v45.38Zm0-149.38h251.76v-45.39H289.39v45.39Zm-104 421.3v-589.22V-185.39Z"/>`;

        const fileName = document.createElement('p');
        fileName.textContent = file.name;

        // Create the right section with "ok" and "cancel" icons
        const docRight = document.createElement('div');
        docRight.classList.add('doc-right');

        const okayIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        okayIcon.setAttribute('class', 'okay-svg');
        okayIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        okayIcon.setAttribute('height', '20px');
        okayIcon.setAttribute('viewBox', '0 -960 960 960');
        okayIcon.setAttribute('width', '20px');
        okayIcon.setAttribute('fill', '#068604');
        okayIcon.innerHTML = `<path d="m429.04-353.89 219.27-218.26-34.73-34.73-184.54 183.53-83.39-82.38L310.92-471l118.12 117.11Zm51.05 229.81q-73.15 0-138.06-27.82-64.92-27.83-113.66-76.6-48.73-48.77-76.51-113.55-27.78-64.79-27.78-137.86 0-74.15 27.82-138.56 27.83-64.42 76.6-113.16 48.77-48.73 113.55-76.51 64.79-27.78 137.86-27.78 74.15 0 138.56 27.82 64.42 27.83 113.16 76.6 48.73 48.77 76.51 113.05 27.78 64.29 27.78 138.36 0 73.15-27.82 138.06-27.83 64.92-76.6 113.66-48.77 48.73-113.05 76.51-64.29 27.78-138.36 27.78Zm-.1-47.96q127.89 0 217.93-90.02 90.04-90.03 90.04-217.93 0-127.89-90.02-217.93-90.03-90.04-217.93-90.04-127.89 0-217.93 90.02-90.04 90.03-90.04 217.93 0 127.89 90.02 217.93 90.03 90.04 217.93 90.04ZM480-480Z"/>`;

        const cancelIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        cancelIcon.setAttribute('class', 'cancel-svg');
        cancelIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        cancelIcon.setAttribute('height', '20px');
        cancelIcon.setAttribute('viewBox', '0 -960 960 960');
        cancelIcon.setAttribute('width', '20px');
        cancelIcon.setAttribute('fill', '#333');
        cancelIcon.innerHTML = `<path d="M340.62-306.69 480-446.08l139.38 139.39 33.93-33.93L513.92-480l139.39-139.38-33.93-33.93L480-513.92 340.62-653.31l-33.93 33.93L446.08-480 306.69-340.62l33.93 33.93Zm139.47 182.61q-73.15 0-138.06-27.82-64.92-27.83-113.66-76.6-48.73-48.77-76.51-113.55-27.78-64.79-27.78-137.86 0-74.15 27.82-138.56 27.83-64.42 76.6-113.16 48.77-48.73 113.55-76.51 64.79-27.78 137.86-27.78 74.15 0 138.56 27.82 64.42 27.83 113.16 76.6 48.73 48.77 76.51 113.05 27.78 64.29 27.78 138.36 0 73.15-27.82 138.06-27.83 64.92-76.6 113.66-48.77 48.73-113.05 76.51-64.29 27.78-138.36 27.78Zm-.1-47.96q127.89 0 217.93-90.02 90.04-90.03 90.04-217.93 0-127.89-90.02-217.93-90.03-90.04-217.93-90.04-127.89 0-217.93 90.02-90.04 90.03-90.04 217.93 0 127.89 90.02 217.93 90.03 90.04 217.93 90.04ZM480-480Z"/>`;

        // Add icons to the docRight section
        docRight.appendChild(okayIcon);
        docRight.appendChild(cancelIcon);

        // Add all elements to the document
        docDiv.appendChild(fileIcon);
        docDiv.appendChild(fileName);
        docDiv.appendChild(docRight);
        uploadedDocs.appendChild(docDiv);

        // Show the analyze button
        analyzeButton.style.display = 'flex';

        // Event listener for the cancel icon to remove the file
        cancelIcon.addEventListener('click', () => {
            uploadedDocs.removeChild(docDiv);
            if (uploadedDocs.children.length === 0) {
                analyzeButton.style.display = 'none';
            }
        });
    }
}

const analysisResponse = {};

analyzeButton.addEventListener('click', () => {
    if (uploadedFiles.length < 2) {
        alert("At least two files are required for comparison.");
        return;
    }
    loader.classList.remove('hidden');

    const formData = new FormData();
    uploadedFiles.forEach((file) => {
        formData.append('documents', file);  // Append the actual file object
    });

    // Send the FormData to the server
    fetch('https://plagiarism-apis.onrender.com/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        loader.classList.add('hidden');
        console.log('Analysis results:', data);
        Object.assign(analysisResponse, data); // Update the analysisResponse object
        renderResults(data); // Call renderResults with the fetched data
    })
    .catch(error => {
        loader.classList.add('hidden');
        console.error('Error analyzing documents:', error);
        alert('An error occurred while analyzing the documents.');
    });
});

const resultsContainer = document.getElementById("results");
const resultsContainerx = document.getElementById("resultx");
// Function to create result HTML dynamically
function renderResults(data) {
    // Clear existing results if any
    resultsContainer.innerHTML = '';
    resultsContainerx.innerHTML = `<p><strong> Global similarity:</strong><span> ${data.globalSimilarity} </span> </p>`;

    data.results.forEach((result, index) => {
        // Create file comparison block
        const comparisonBlock = document.createElement("div");
        comparisonBlock.className = "file-details";

        const fileHeader = document.createElement("div");
        fileHeader.className = "file-header";
        fileHeader.textContent = `Comparison ${index + 1}: ${result.file1.fileName} vs. ${result.file2.fileName}`;
        fileHeader.addEventListener("click", () => {
            details.classList.toggle("hidden");
        });

        const details = document.createElement("div");
        details.className = "hidden";
        details.innerHTML = `
            <p><strong>File 1:</strong> ${result.file1.fileName} </p>
            <p><strong>File 2:</strong> ${result.file2.fileName} </p>
            <p><strong>Similarity Found?</strong> ${result.similarity.length} </p>
        `;

        // Add similar sections, if any
        if (result.similarSections.length > 0) {
            const sectionList = document.createElement("ul");
            sectionList.className = "similar-sections";

            result.similarSections.forEach((section) => {
                const sectionItem = document.createElement("li");
                sectionItem.innerHTML = `
                    <p><strong>${section.location.file1}:</strong> ${section.section1}</p>
                    <p><strong>${section.location.file2}:</strong> ${section.section2}</p>
                    
                    <p><strong>Similarity:</strong> ${section.similarity}</p>
                `;
                sectionList.appendChild(sectionItem);
            });

            details.appendChild(sectionList);
        } else {
            details.innerHTML += `<p>No similar sections found.</p>`;
        }

        // Append elements to the container
        comparisonBlock.appendChild(fileHeader);
        comparisonBlock.appendChild(details);
        resultsContainer.appendChild(comparisonBlock);
    });
}
