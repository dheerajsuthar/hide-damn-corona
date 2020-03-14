function walkAndReplace(node, from, to) {
    if (node.nodeType == Node.TEXT_NODE) {
        node.data = node.data.replace(from, to);
    }
    if (node.nodeType == Node.ELEMENT_NODE && node.nodeName != "SCRIPT") {
        for (var i = 0; i < node.childNodes.length; i++) {
            walkAndReplace(node.childNodes[i], from, to);
        }
    }
}

chrome.storage.sync.get(['active', 'to'], ({
    active,
    to
}) => {
    if (active === 'true') {
        const from = /coronavirus|corona virus|corona   |covid/gi
        walkAndReplace(document.body, from, to || 'ZOMBIE')
    }
})