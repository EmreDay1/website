// blog-index.js - JavaScript for blog index functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const fileList = document.getElementById('file-list');
    const template = document.getElementById('file-entry-template');
    const updateTimeElement = document.getElementById('update-time');
    
    // Set the current date in the footer if needed
    if (updateTimeElement) {
        // You can use this to automatically update the date
        // Uncomment to enable automatic date update:
        // updateTimeElement.textContent = new Date().toLocaleDateString('en-US', {
        //     day: '2-digit',
        //     month: 'short',
        //     year: 'numeric'
        // });
    }
    
    // Populate file list
    if (blogFiles && blogFiles.length) {
        populateFileList(blogFiles);
    }
    
    // Add event listener for sorting if needed
    const tableHeaders = document.querySelectorAll('th');
    tableHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Implement sorting logic here if needed
            console.log('Sort by', this.textContent.trim());
        });
    });
    
    /**
     * Populates the file list using the template
     * @param {Array} files - Array of file objects
     */
    function populateFileList(files) {
        // Sort files alphabetically by name
        files.sort((a, b) => a.name.localeCompare(b.name));
        
        // Create file entries
        files.forEach(file => {
            // Clone the template
            const clone = template.content.cloneNode(true);
            
            // Update elements
            const link = clone.querySelector('.file-link');
            const name = clone.querySelector('.file-name');
            const size = clone.querySelector('.file-size');
            const date = clone.querySelector('.file-date');
            
            link.href = file.name;
            name.textContent = file.name;
            size.textContent = file.size;
            date.textContent = file.date;
            
            // Add to DOM
            fileList.appendChild(clone);
        });
    }
});