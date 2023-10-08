document.addEventListener('DOMContentLoaded', function () {
    const pythonCodeTextarea = document.getElementById('pythonCode');
    const removeCommentsBtn = document.getElementById('removeCommentsBtn');
    const outputTextarea = document.getElementById('output');
    const copyCodeBtn = document.getElementById('copyCodeBtn');
    const codeWithoutCommentsSection = document.getElementById('codeWithoutCommentsSection'); // Get the codeWithoutCommentsSection

    removeCommentsBtn.addEventListener('click', function () {
        const pythonCode = pythonCodeTextarea.value;
        const codeWithoutComments = removePythonComments(pythonCode);
        const codeWithoutEmptyLines = removeEmptyLines(codeWithoutComments);
        outputTextarea.textContent = codeWithoutEmptyLines;

        // Show the codeWithoutCommentsSection
        codeWithoutCommentsSection.style.display = 'block';
    });

    copyCodeBtn.addEventListener('click', function () {
        const codeWithoutComments = outputTextarea.textContent;
        const textArea = document.createElement('textarea');
        textArea.value = codeWithoutComments;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Code copied to clipboard!');
    });

    function removePythonComments(code) {
        return code.replace(/(^|\n)([ \t]*#.*)/g, '$1');
    }

    function removeEmptyLines(code) {
        return code.replace(/^\s*[\r\n]/gm, '');
    }
});
