document.getElementById('textInput').addEventListener('input', () => {
    const input = document.getElementById('textInput').value;
    const saveButton = document.getElementById('saveButton');
    if (input.trim() !== '') {
        saveButton.style.display = 'block';
    } else {
        saveButton.style.display = 'none';
    }
});

document.getElementById('saveButton').addEventListener('click', () => {
    const input = document.getElementById('textInput').value;
    chrome.storage.local.set({ sidebarContent: input }, () => {
        console.log('Información guardada:', input);
        alert('guardada');
    });
});

document.getElementById('toggleSidebar').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: toggleSidebar
    });
});

function toggleSidebar() {
    chrome.storage.local.get('sidebarContent', (data) => {
        let sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.remove();
        } else {
            sidebar = document.createElement('div');
            sidebar.id = 'sidebar';
            sidebar.style.position = 'fixed';
            sidebar.style.top = '0';
            sidebar.style.left = '0';
            sidebar.style.width = '450px';
            sidebar.style.height = '100%';
            sidebar.style.zIndex = '10000';
            sidebar.innerHTML = `
            <iframe style="width: 100%; height: 100vh;" src="https://66a15d505303ac34c79b5dcd--bespoke-granita-2d1cb8.netlify.app/barra" frameborder="0"></iframe>  
            `;
document.body.appendChild(sidebar);
        }
    });
}
