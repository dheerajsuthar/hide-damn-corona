const to = document.getElementById('to');
window.onload = () => {
    let toggle = document.getElementById('toggle');
    toggle.onchange = () => {
        const nextStatus = toggle.checked ? 'true' : 'false'
        chrome.storage.sync.set({
            active: nextStatus
        })
    };

    chrome.storage.sync.get([
        'active',
        'to'
    ], (result) => {
        to.value = result.to || 'ZOMBIE'
        toggle.checked = result.active === 'true' ? true : false
    })

    let button = document.getElementById('save')
    button.addEventListener('click', () => {
        chrome.storage.sync.set({
            to: to.value
        })
    });

}